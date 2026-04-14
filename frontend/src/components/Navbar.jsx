import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          <div className="flex items-center">
            <Link to="/" className="navbar-logo">
              <span className="text-2xl font-black tracking-tighter text-globe-blue">Project</span>
              <span className="text-2xl font-light text-globe-cyan navbar-logo-cyan">Telecom</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-desktop-menu">
            <Link to="/plans" className="navbar-link">Mobile & Broadband</Link>
            <Link to="/promos" className="navbar-link">Promos</Link>
            <Link to="/about" className="navbar-link">About Us</Link>
            
            <div className="navbar-actions">
              <Link to="/login" className="navbar-icon-btn">
                <User size={20} />
              </Link>
              <button className="navbar-icon-btn">
                <ShoppingCart size={20} />
              </button>
              <Link to="/plans" className="btn-primary navbar-btn-small">
                Get a Plan
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-toggle">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-icon-btn navbar-mobile-toggle-btn"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-menu-inner">
            <Link to="/plans" className="navbar-mobile-link">Mobile & Broadband</Link>
            <Link to="/promos" className="navbar-mobile-link">Promos</Link>
            <Link to="/about" className="navbar-mobile-link">About Us</Link>
            <Link to="/login" className="navbar-mobile-link">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
