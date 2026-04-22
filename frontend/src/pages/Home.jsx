import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Wifi, Headphones, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-white">
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container">
          <div className="grid gap-16 items-center lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-12 lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#eff6ff] text-blue rounded-full text-sm font-bold mb-6">
                <span className="animate-pulse w-2 h-2 bg-blue rounded-full"></span>
                <span>The Philippines' Best Network</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-dark tracking-tighter leading-tight mb-8">
                Unstoppable <br />
                <span className="text-gradient">Connectivity.</span>
              </h1>
              <p className="text-xl text-gray-mid mb-10 leading-relaxed max-w-xl">
                Experience high-speed 5G, fiber-fast broadband, and premium digital lifestyle rewards. Join the network that empowers the Filipino digital future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/plans" className="btn-primary btn-large">
                  <span>Explore Plans</span>
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/promos" className="btn-secondary btn-large">
                  View Latest Promos
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551703599-6b3e8379aa81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Connectivity"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent flex flex-col justify-end p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur color-white">
                      <Zap size={24} />
                    </div>
                    <span className="text-lg font-bold text-white">5G Ready Nationwide</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Fastest Mobile Network</h3>
                  <p className="text-white/80">Recognized for delivering the best digital experience in the PH.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Network Coverage', value: '98%', sub: 'Nationwide' },
              { label: 'Speed Score', value: '120.5', sub: 'Mbps Avg' },
              { label: 'Total Users', value: '87M+', sub: 'Subscribers' },
              { label: 'Support 24/7', value: '100%', sub: 'Reliability' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-3xl shadow-sm border">
                <div className="text-4xl font-black text-blue mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-dark uppercase tracking-widest">{stat.label}</div>
                <div className="text-xs text-gray-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tighter mb-4">Everything you need in one place.</h2>
            <p className="text-xl text-gray-mid">The ultimate connectivity ecosystem for your life and business.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-12 flex flex-col items-center text-center card">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-[#eff6ff] text-blue">
                <Zap size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">High-Speed 5G</h3>
              <p className="text-gray-mid mb-8 leading-relaxed">Experience zero lag and ultra-fast downloads with our next-gen mobile network.</p>
              <Link to="/plans" className="inline-flex items-center gap-2 text-blue font-bold no-underline mt-auto">
                <span>See mobile plans</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="p-12 flex flex-col items-center text-center card">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-[#ecfeff] text-cyan">
                <Wifi size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fiber Broadband</h3>
              <p className="text-gray-mid mb-8 leading-relaxed">Connect your entire home with reliable, high-speed fiber internet for all devices.</p>
              <Link to="/plans" className="inline-flex items-center gap-2 text-blue font-bold no-underline mt-auto">
                <span>See home plans</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="p-12 flex flex-col items-center text-center card">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-[#f3f4f6] text-dark">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Solutions</h3>
              <p className="text-gray-mid mb-8 leading-relaxed">Scale your enterprise with secure, dedicated connectivity and digital tools.</p>
              <Link to="/plans" className="inline-flex items-center gap-2 text-blue font-bold no-underline mt-auto">
                <span>See business plans</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue overflow-hidden relative">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl font-black mb-6">Manage everything with the Project App.</h2>
              <p className="text-xl mb-10 leading-relaxed text-[#dbeafe]">
                Check your balance, redeem rewards, buy promos, and more in just a few taps.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 rounded-xl font-bold border-none cursor-pointer bg-white text-blue">App Store</button>
                <button className="px-8 py-3 rounded-xl font-bold border-none cursor-pointer bg-white text-blue">Google Play</button>
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-[500px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-dark overflow-hidden">
                <div className="h-full w-full bg-gray flex flex-col items-center justify-center p-6">
                  <div className="w-16 h-16 bg-blue rounded-2xl mb-4"></div>
                  <div className="w-full h-4 bg-gray-200 rounded-full mb-2"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded-full mb-8"></div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="h-20 bg-white rounded-xl shadow-sm"></div>
                    <div className="h-20 bg-white rounded-xl shadow-sm"></div>
                    <div className="h-20 bg-white rounded-xl shadow-sm"></div>
                    <div className="h-20 bg-white rounded-xl shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
