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
    <div className="min-h-screen bg-white pt-12 pb-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-dark tracking-tighter mb-4">Choose Your Connection</h1>
          <p className="text-xl text-gray-mid">Flexible plans tailored for your lifestyle and needs.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-2xl">
            {[
              { id: 'mobile', label: 'Mobile Postpaid', icon: <Smartphone size={18} /> },
              { id: 'broadband', label: 'Fiber Broadband', icon: <Wifi size={18} /> },
              { id: 'enterprise', label: 'Business Solutions', icon: <Building size={18} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-none cursor-pointer transition-all ${
                  activeTab === tab.id ? 'bg-white text-blue shadow-sm' : 'bg-transparent text-gray-mid hover:text-dark'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-gray-100 animate-pulse rounded-3xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan._id} className="card relative flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                {plan.isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue text-white text-xs font-black rounded-full uppercase tracking-widest z-10">
                    Most Popular
                  </div>
                )}

                <div className="p-8 pb-0">
                  <h3 className="text-xl font-black text-dark mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-black text-blue">₱{plan.price}</span>
                    <span className="text-gray-mid font-medium">/mo</span>
                  </div>

                  <div className="bg-gray py-4 px-6 rounded-2xl mb-8">
                    <div className="text-3xl font-black text-dark">{plan.data}</div>
                    <div className="text-xs font-bold text-gray-mid uppercase tracking-wider">Total Data Allocation</div>
                  </div>

                  <ul className="space-y-4 mb-8 list-none p-0">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 p-0.5 rounded-full flex items-center justify-center bg-[#dcfce7] text-[#16a34a]">
                          <Check size={14} />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full flex items-center justify-center bg-blue-50 text-blue">
                        <Check size={14} />
                      </div>
                      <span className="text-sm text-gray-700">Validity: {plan.validity}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto p-8 pt-0">
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

        <div className="mt-20 relative bg-dark rounded-[2.5rem] p-12 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
            <div className="max-w-xl mb-8 md:mb-0 text-center md:text-left">
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
