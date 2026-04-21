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
    <div className="auth-page">
      <div className="auth-header">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center mb-8">
            <span className="text-3xl font-black tracking-tighter text-blue">Project</span>
            <span className="text-3xl font-light text-cyan navbar-logo-cyan">Telecom</span>
          </Link>
          <h2 className="text-3xl font-black text-dark tracking-tight">Create Your Account</h2>
          <p className="mt-2 text-sm text-gray-mid">
            Join the network that empowers the Filipino digital future.
          </p>
        </div>
      </div>

      <div className="auth-container">
        <div className="auth-card">
          <form className="form-space" onSubmit={handleSubmit}>
            {error && (
              <div className="auth-error">
                <ShieldCheck size={18} />
                <span>{error}</span>
              </div>
            )}

            <div className="auth-form-group">
              <label className="auth-label">Full Name</label>
              <div className="auth-input-wrapper">
                <div className="auth-input-icon">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  required
                  className="auth-input"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

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
              <span>{loading ? 'Creating account...' : 'Create Account'}</span>
              {!loading && <ArrowRight size={20} />}
            </button>
          </form>

          <div className="mt-8">
            <div className="auth-divider">
              <div className="auth-divider-line">
                <div className="auth-divider-border"></div>
              </div>
              <div className="auth-divider-text-wrapper">
                <span className="auth-divider-text">Already have an account?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/login"
                className="btn-full btn-secondary btn-height-lg nowrap"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
