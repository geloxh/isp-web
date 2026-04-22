import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Camera, Play, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center mb-6 no-underline">
              <span className="text-2xl font-black tracking-tighter text-white">Project</span>
              <span className="text-2xl font-light text-cyan ml-0.5">Telecom</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering every Filipino with connectivity that matters. Leading the digital transformation of the Philippines.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full text-white hover:bg-blue transition-colors flex items-center justify-center">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-white hover:bg-blue transition-colors flex items-center justify-center">
                <X size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-white hover:bg-blue transition-colors flex items-center justify-center">
                <Camera size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-white hover:bg-blue transition-colors flex items-center justify-center">
                <Play size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Products & Services</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-4"><Link to="/plans" className="text-gray-400 text-sm no-underline hover:text-cyan transition-colors">Mobile Postpaid</Link></li>
              <li className="mb-4"><Link to="/plans" className="text-gray-400 text-sm no-underline hover:text-cyan transition-colors">Prepaid Promos</Link></li>
              <li className="mb-4"><Link to="/plans" className="text-gray-400 text-sm no-underline hover:text-cyan transition-colors">At Home</Link></li>
              <li className="mb-4"><Link to="/plans" className="text-gray-400 text-sm no-underline hover:text-cyan transition-colors">Enterprise Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Help & Support</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-4"><a href="#" className="text-gray-400 text-sm no-underline hover:text-cyan transition-colors">Help Center</a></li>
              <li className="mb-4"><a href="#" className="text-gray-400 text-sm no-underline hover:text-cyan transition-colors">Track Order</a></li>
              <li className="mb-4"><a href="#" className="text-gray-400 text-sm no-underline hover:text-cyan transition-colors">Find a Store</a></li>
              <li className="mb-4"><a href="#" className="text-gray-400 text-sm no-underline hover:text-cyan transition-colors">Report a Scam</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="list-none p-0 m-0">
              <li className="flex items-center gap-3 mb-4 text-gray-400 text-sm">
                <Phone size={16} className="text-cyan" />
                <span>(02) 7730-1000</span>
              </li>
              <li className="flex items-center gap-3 mb-4 text-gray-400 text-sm">
                <Mail size={16} className="text-cyan" />
                <span>support@project.com.ph</span>
              </li>
              <li className="flex items-center gap-3 mb-4 text-gray-400 text-sm">
                <span className="bg-blue px-2 py-1 text-xs rounded text-white">24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 Project Telecom, Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 no-underline hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 no-underline hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="text-gray-500 no-underline hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
