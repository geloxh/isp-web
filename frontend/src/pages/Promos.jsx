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
    <div className="promos-page">
      <div className="container">
        <div className="section-header">
          <div className="hero-badge hero-badge-yellow">
            <Sparkles size={16} />
            <span>Limited Time Offers</span>
          </div>
          <h1 className="section-title">Exclusive Rewards & Deals</h1>
          <p className="section-subtitle">More than just data. Get extra rewards with our limited-time promos.</p>
        </div>

        {loading ? (
          <div className="promos-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="loading-skeleton loading-skeleton-white"></div>
            ))}
          </div>
        ) : (
          <div className="promos-grid">
            {promos.map((promo, index) => (
              <motion.div
                key={promo._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="promo-card"
              >
                <div className="promo-image-container">
                  <img
                    src={promo.imageUrl || 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'}
                    alt={promo.title}
                    className="promo-image"
                  />
                  <div className="promo-category-badge">
                    {promo.category || 'Special Offer'}
                  </div>
                </div>

                <div className="promo-card-body">
                  <div className="promo-expiry">
                    <Calendar size={14} className="text-cyan" />
                    <span>Expires: {new Date(promo.expiryDate).toLocaleDateString()}</span>
                  </div>

                  <h3 className="promo-title">
                    {promo.title}
                  </h3>

                  <p className="promo-card-description">
                    {promo.description}
                  </p>

                  <a
                    href={promo.link || '#'}
                    className="promo-link"
                  >
                    <span>Claim Promo</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="promo-newsletter">
          <div className="promo-newsletter-box">
            <Tag size={40} className="text-cyan promo-newsletter-icon" />
            <h2 className="promo-newsletter-title">Never miss a deal.</h2>
            <p className="promo-newsletter-text">Subscribe to our newsletter and be the first to know about new promos and exclusive rewards.</p>
            <div className="promo-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="promo-newsletter-input"
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
