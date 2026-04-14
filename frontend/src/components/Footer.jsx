import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Camera, Play, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-logo">
              <span className="text-2xl font-black tracking-tighter text-white">Project</span>
              <span className="text-2xl font-light text-globe-cyan navbar-logo-cyan">Telecom</span>
            </Link>
            <p className="footer-text">
              Empowering every Filipino with connectivity that matters. Leading the digital transformation of the Philippines.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="footer-social-link">
                <X size={18} />
              </a>
              <a href="#" className="footer-social-link">
                <Camera size={18} />
              </a>
              <a href="#" className="footer-social-link">
                <Play size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Products & Services</h3>
            <ul className="footer-list">
              <li className="footer-list-item"><Link to="/plans" className="footer-link">Mobile Postpaid</Link></li>
              <li className="footer-list-item"><Link to="/plans" className="footer-link">Prepaid Promos</Link></li>
              <li className="footer-list-item"><Link to="/plans" className="footer-link">At Home</Link></li>
              <li className="footer-list-item"><Link to="/plans" className="footer-link">Enterprise Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Help & Support</h3>
            <ul className="footer-list">
              <li className="footer-list-item"><a href="#" className="footer-link">Help Center</a></li>
              <li className="footer-list-item"><a href="#" className="footer-link">Track Order</a></li>
              <li className="footer-list-item"><a href="#" className="footer-link">Find a Store</a></li>
              <li className="footer-list-item"><a href="#" className="footer-link">Report a Scam</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-list">
              <li className="footer-contact-item">
                <Phone size={16} className="text-globe-cyan" />
                <span>(02) 7730-1000</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} className="text-globe-cyan" />
                <span>support@project.com.ph</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-badge">24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Project Telecom, Inc. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Use</a>
            <a href="#" className="footer-bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
