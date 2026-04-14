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
    <div className="auth-page">
      <div className="auth-header">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center mb-8">
            <span className="text-3xl font-black tracking-tighter text-globe-blue">Project</span>
            <span className="text-3xl font-light text-globe-cyan navbar-logo-cyan">Telecom</span>
          </Link>
          <h2 className="text-3xl font-black text-globe-dark tracking-tight">Welcome Back!</h2>
          <p className="mt-2 text-sm text-gray-500">
            Log in to manage your plans and rewards.
          </p>
        </div>
      </div>

      <div className="auth-container">
        <div className="auth-card">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="auth-error">
                <ShieldCheck size={18} />
                <span>{error}</span>
              </div>
            )}
            
            <div className="auth-form-group">
              <label className="auth-label">Email Address</label>
              <div className="auth-input-wrapper">
                <div className="auth-input-icon">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  className="auth-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="auth-form-group">
              <label className="auth-label">Password</label>
              <div className="auth-input-wrapper">
                <div className="auth-input-icon">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  required
                  className="auth-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="checkbox-wrapper">
                <input type="checkbox" className="checkbox-input" />
                <label className="text-sm text-gray-500">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="auth-footer-link">Forgot password?</a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary nowrap auth-btn"
            >
              <span>{loading ? 'Logging in...' : 'Sign In'}</span>
              {!loading && <ArrowRight size={20} />}
            </button>
          </form>

          <div className="mt-8">
            <div className="auth-divider">
              <div className="auth-divider-line">
                <div className="auth-divider-border"></div>
              </div>
              <div className="auth-divider-text-wrapper">
                <span className="auth-divider-text">New to Globe?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/register"
                className="w-full btn-secondary nowrap auth-btn"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
