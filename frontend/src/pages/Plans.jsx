import React, { useEffect, useState } from 'react';
import { plansAPI } from '../api/api';
import { Check, Info, ShoppingCart, Wifi, Smartphone, Building } from 'lucide-react';

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
          <h1 className="section-title">Choose Your Connection</h1>
          <p className="section-subtitle">Flexible plans tailored for your lifestyle and needs.</p>
        </div>

        <div className="tabs-container">
          <div className="tabs-wrapper">
            {[
              { id: 'mobile', label: 'Mobile Postpaid', icon: <Smartphone size={18} /> },
              { id: 'broadband', label: 'Fiber Broadband', icon: <Wifi size={18} /> },
              { id: 'enterprise', label: 'Business Solutions', icon: <Building size={18} /> },
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
              <div key={plan._id} className="card plan-card">
                {plan.isFeatured && (
                  <div className="plan-badge">
                    Most Popular
                  </div>
                )}

                <div className="card-body card-body-bottom">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price-wrapper">
                    <span className="plan-price">₱{plan.price}</span>
                    <span className="plan-price-period">/mo</span>
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

                <div className="card-footer">
                  <button className="btn-full btn-primary btn-icon-text">
                    <ShoppingCart size={18} />
                    <span>Get this plan</span>
                  </button>
                  <button className="btn-full mt-4 btn-ghost">
                    <Info size={16} />
                    <span>View full details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="info-banner">
          <div className="info-banner-glow"></div>
          <div className="info-banner-content">
            <div className="info-banner-text">
              <h2 className="info-banner-title">Not sure which plan is for you?</h2>
              <p className="info-banner-description">Our plan assistant can help you find the perfect match based on your data usage and budget.</p>
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
