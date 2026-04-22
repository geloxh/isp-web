import React, { useEffect, useState } from 'react';
import { promosAPI } from '../api/api';
import { Calendar, Tag, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Promos = () => {
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const { data } = await promosAPI.getAll();
        setPromos(data);
      } catch (error) {
        console.error('Error fetching promos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPromos();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-12 pb-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fffbeb] text-[#d97706] rounded-full text-sm font-bold mb-6">
            <Sparkles size={16} />
            <span>Limited Time Offers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-dark tracking-tighter mb-4">Exclusive Rewards & Deals</h1>
          <p className="text-xl text-gray-mid">More than just data. Get extra rewards with our limited-time promos.</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[450px] bg-white animate-pulse rounded-3xl shadow-sm border border-gray-100"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {promos.map((promo, index) => (
              <motion.div
                key={promo._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={promo.imageUrl || 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-dark text-[10px] font-black rounded-lg uppercase tracking-wider">
                    {promo.category || 'Special Offer'}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-mid mb-4">
                    <Calendar size={14} className="text-cyan" />
                    <span>Expires: {new Date(promo.expiryDate).toLocaleDateString()}</span>
                  </div>

                  <h3 className="text-xl font-black text-dark mb-4 leading-tight">
                    {promo.title}
                  </h3>

                  <p className="text-gray-mid text-sm mb-8 leading-relaxed line-clamp-2">
                    {promo.description}
                  </p>

                  <a
                    href={promo.link || '#'}
                    className="inline-flex items-center gap-2 text-blue font-bold no-underline hover:text-cyan transition-colors"
                  >
                    <span>Claim Promo</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-20">
          <div className="bg-white rounded-[2.5rem] p-12 text-center shadow-xl border border-gray-100 relative overflow-hidden">
            <Tag size={40} className="text-cyan mb-6 mx-auto" />
            <h2 className="text-3xl font-black text-dark mb-4">Never miss a deal.</h2>
            <p className="text-gray-mid max-w-xl mx-auto mb-10">Subscribe to our newsletter and be the first to know about new promos and exclusive rewards.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-[#f9fafb] rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue/10 transition-all"
              />
              <button className="btn-primary btn-padding-wide nowrap">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promos;
