import React, { useEffect, useState } from 'react';
import { plansAPI } from '../api/api';
import { Check, Info, ShoppingCart, Wifi, Smartphone, Project } from 'lucide-react';

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('mobile');

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const { data } = await plansAPI.getAll();
        setPlans(data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  return (
    <div className="plans-page">
      <div className="container">
        <div className="section-header">
          <h1 className="text-4xl md:text-5xl font-black text-globe-dark tracking-tighter mb-4">Choose Your Connection</h1>
          <p className="text-xl text-gray-500">Flexible plans tailored for your lifestyle and needs.</p>
        </div>

        {/* Category Tabs */}
        <div className="tabs-container">
          <div className="tabs-wrapper">
            {[
              { id: 'mobile', label: 'Mobile Postpaid', icon: <Smartphone size={18} /> },
              { id: 'broadband', label: 'Fiber Broadband', icon: <Wifi size={18} /> },
              { id: 'enterprise', label: 'Business Solutions', icon: <Project size={18} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="plans-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="loading-skeleton"></div>
            ))}
          </div>
        ) : (
          <div className="plans-grid">
            {plans.map((plan) => (
              <div key={plan._id} className="globe-card plan-card group">
                {plan.isFeatured && (
                  <div className="plan-badge">
                    Most Popular
                  </div>
                )}
                
                <div className="plan-card-body">
                  <h3 className="text-2xl font-black text-globe-dark mb-2">{plan.name}</h3>
                  <div className="plan-price-wrapper">
                    <span className="plan-price">₱{plan.price}</span>
                    <span className="text-gray-400 ml-1 font-medium">/mo</span>
                  </div>
                  
                  <div className="plan-data-box">
                    <div className="plan-data-value">{plan.data}</div>
                    <div className="plan-data-label">Total Data Allocation</div>
                  </div>

                  <ul className="feature-list">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <div className="feature-icon-wrapper feature-icon-success">
                          <Check size={14} />
                        </div>
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                    <li className="feature-item">
                      <div className="feature-icon-wrapper feature-icon-info">
                        <Check size={14} />
                      </div>
                      <span className="feature-text">Validity: {plan.validity}</span>
                    </li>
                  </ul>
                </div>

                <div className="plan-card-footer">
                  <button className="w-full btn-primary btn-icon-text">
                    <ShoppingCart size={18} />
                    <span>Get this plan</span>
                  </button>
                  <button className="w-full mt-4 btn-ghost">
                    <Info size={16} />
                    <span>View full details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}


        {/* Info Banner */}
        <div className="info-banner">
          <div className="info-banner-glow"></div>
          <div className="info-banner-content">
            <div className="info-banner-text">
              <h2 className="text-3xl font-black mb-4 tracking-tighter">Not sure which plan is for you?</h2>
              <p className="text-gray-400">Our plan assistant can help you find the perfect match based on your data usage and budget.</p>
            </div>
            <button className="btn-white">
              Start Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
