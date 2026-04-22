import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center no-underline flex-shrink-0">
              <span className="text-2xl font-black tracking-tighter text-blue">Project</span>
              <span className="text-2xl font-light text-cyan ml-0.5">Telecom</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/plans" className="text-gray-700 font-medium no-underline ml-8 hover:text-blue transition-colors">Mobile & Broadband</Link>
            <Link to="/promos" className="text-gray-700 font-medium no-underline ml-8 hover:text-blue transition-colors">Promos</Link>
            <Link to="/about" className="text-gray-700 font-medium no-underline ml-8 hover:text-blue transition-colors">About Us</Link>

            <div className="flex items-center border-l border-gray-200 pl-8 ml-4">
              <Link to="/login" className="p-2 text-gray-500 bg-none border-none cursor-pointer mr-4 hover:text-blue transition-colors">
                <User size={20} />
              </Link>
              <button className="p-2 text-gray-500 bg-none border-none cursor-pointer mr-4 hover:text-blue transition-colors">
                <ShoppingCart size={20} />
              </button>
              <Link to="/plans" className="btn-primary btn-small">
                Get a Plan
              </Link>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 bg-none border-none cursor-pointer hover:text-blue transition-colors inline-flex items-center justify-center rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <Link to="/plans" className="block px-3 py-2 text-gray-700 no-underline rounded-md hover:bg-gray-50 hover:text-blue transition-all">Mobile & Broadband</Link>
            <Link to="/promos" className="block px-3 py-2 text-gray-700 no-underline rounded-md hover:bg-gray-50 hover:text-blue transition-all">Promos</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 no-underline rounded-md hover:bg-gray-50 hover:text-blue transition-all">About Us</Link>
            <Link to="/login" className="block px-3 py-2 text-gray-700 no-underline rounded-md hover:bg-gray-50 hover:text-blue transition-all font-bold text-blue">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
