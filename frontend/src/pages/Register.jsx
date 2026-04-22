import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../api/api';
import { Mail, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await authAPI.register(formData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please check your information.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center mb-8">
            <span className="text-3xl font-black tracking-tighter text-blue">Project</span>
            <span className="text-3xl font-light text-cyan ml-1">Telecom</span>
          </Link>
          <h2 className="text-3xl font-black text-dark tracking-tight">Create Your Account</h2>
          <p className="mt-2 text-sm text-gray-mid">
            Join the network that empowers the Filipino digital future.
          </p>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md mx-auto">
        <div className="bg-white p-10 shadow-2xl rounded-[2.5rem] border border-gray-100 mx-4 sm:mx-0">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 text-red p-4 rounded-xl text-sm font-bold flex items-center gap-2 mb-6">
                <ShieldCheck size={18} />
                <span>{error}</span>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  required
                  className="block w-full py-4 pl-11 pr-4 bg-gray border border-gray-100 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-blue/10 transition-all"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  className="block w-full py-4 pl-11 pr-4 bg-gray border border-gray-100 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-blue/10 transition-all"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  required
                  className="block w-full py-4 pl-11 pr-4 bg-gray border border-gray-100 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-blue/10 transition-all"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-full btn-primary btn-height-lg nowrap"
            >
              {loading ? 'Creating account...' : (
                <>
                  <span>Create Account</span>
                  <ArrowRight size={20} className="ml-2" />
                </>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400">Already have an account?</span>
            </div>
          </div>

          <Link to="/login" className="btn-full btn-secondary btn-height-lg">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
