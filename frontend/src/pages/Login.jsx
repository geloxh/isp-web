import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../api/api';
import { Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await authAPI.login(formData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
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
          <h2 className="text-3xl font-black text-dark tracking-tight">Welcome Back!</h2>
          <p className="mt-2 text-sm text-gray-mid">
            Log in to manage your plans and rewards.
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 text-blue rounded border-gray-300" />
                <label className="text-sm text-gray-mid">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-bold text-blue no-underline hover:text-cyan">Forgot password?</a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-full btn-primary btn-height-lg nowrap"
            >
              {loading ? 'Logging in...' : (
                <>
                  <span>Log In to Account</span>
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
              <span className="px-4 bg-white text-gray-400">New to Project Telecom?</span>
            </div>
          </div>

          <Link to="/register" className="btn-full btn-secondary btn-height-lg">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
