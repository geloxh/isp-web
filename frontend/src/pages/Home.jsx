import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Wifi, Headphones, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-content"
            >
              <div className="hero-badge">
                <span className="animate-pulse w-2 h-2 bg-blue rounded-full"></span>
                <span>The Philippines' Best Network</span>
              </div>
              <h1 className="hero-title">
                Unstoppable <br />
                <span className="text-gradient">Connectivity.</span>
              </h1>
              <p className="hero-description">
                Experience high-speed 5G, fiber-fast broadband, and premium digital lifestyle rewards. Join the network that empowers the Filipino digital future.
              </p>
              <div className="hero-cta">
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
              className="hero-image-col"
            >
              <div className="hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1551703599-6b3e8379aa81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Connectivity"
                  className="hero-image"
                />
                <div className="hero-image-overlay">
                  <div className="hero-image-badge">
                    <div className="hero-image-icon">
                      <Zap size={24} />
                    </div>
                    <span className="text-lg font-bold text-white">5G Ready Nationwide</span>
                  </div>
                  <h3 className="hero-image-title">Fastest Mobile Network</h3>
                  <p className="hero-image-text">Recognized for delivering the best digital experience in the PH.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { label: 'Network Coverage', value: '98%', sub: 'Nationwide' },
              { label: 'Speed Score', value: '120.5', sub: 'Mbps Avg' },
              { label: 'Total Users', value: '87M+', sub: 'Subscribers' },
              { label: 'Support 24/7', value: '100%', sub: 'Reliability' },
            ].map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="text-xs text-gray-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Everything you need in one place.</h2>
            <p className="section-subtitle">The ultimate connectivity ecosystem for your life and business.</p>
          </div>

          <div className="services-grid">
            <div className="card service-card">
              <div className="service-icon-wrapper service-icon-blue">
                <Zap size={40} />
              </div>
              <h3 className="service-title">High-Speed 5G</h3>
              <p className="service-description">Experience zero lag and ultra-fast downloads with our next-gen mobile network.</p>
              <Link to="/plans" className="service-link">
                <span>See mobile plans</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="card service-card">
              <div className="service-icon-wrapper service-icon-cyan">
                <Wifi size={40} />
              </div>
              <h3 className="service-title">Fiber Broadband</h3>
              <p className="service-description">Connect your entire home with reliable, high-speed fiber internet for all devices.</p>
              <Link to="/plans" className="service-link">
                <span>See home plans</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="card service-card">
              <div className="service-icon-wrapper service-icon-dark">
                <ShieldCheck size={40} />
              </div>
              <h3 className="service-title">Business Solutions</h3>
              <p className="service-description">Scale your enterprise with secure, dedicated connectivity and digital tools.</p>
              <Link to="/plans" className="service-link">
                <span>See business plans</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="promo-section">
        <div className="container">
          <div className="promo-section-content">
            <div className="promo-content">
              <h2 className="promo-content-title">Manage everything with the Project App.</h2>
              <p className="promo-content-text">
                Check your balance, redeem rewards, buy promos, and more in just a few taps.
              </p>
              <div className="promo-app-buttons">
                <button className="app-store-btn">App Store</button>
                <button className="app-store-btn">Google Play</button>
              </div>
            </div>
            <div className="relative">
              <div className="app-mockup">
                <div className="app-mockup-inner">
                  <div className="w-16 h-16 bg-blue rounded-2xl mb-4"></div>
                  <div className="app-mockup-bar-full"></div>
                  <div className="app-mockup-bar-three-quarters"></div>
                  <div className="app-mockup-cards">
                    <div className="app-mockup-card"></div>
                    <div className="app-mockup-card"></div>
                    <div className="app-mockup-card"></div>
                    <div className="app-mockup-card"></div>
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
