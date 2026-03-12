import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/admin');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff8da1 20%, #ffffff 100%)',
      // backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          padding: '48px 36px',
        }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#6C63FF',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              boxShadow: '0 4px 15px rgba(108,99,255,0.3)',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
          </div>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
              Admin <span style={{ color: '#6C63FF' }}>Login</span>
            </h1>
            <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6' }}>
              Please enter your admin credentials to access the dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                Email
              </label>
              <input
                type="email"
                placeholder="admin@quickblog.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #E5E7EB',
                  borderRadius: '12px',
                  fontSize: '14px',
                  outline: 'none',
                  color: '#374151',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  boxSizing: 'border-box',
                  backgroundColor: '#FAFAFA',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#6C63FF';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(108,99,255,0.1)';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = '#FAFAFA';
                }}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #E5E7EB',
                  borderRadius: '12px',
                  fontSize: '14px',
                  outline: 'none',
                  color: '#374151',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  boxSizing: 'border-box',
                  backgroundColor: '#FAFAFA',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#6C63FF';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(108,99,255,0.1)';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = '#FAFAFA';
                }}
              />
            </div>

            <button
              type="submit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                width: '100%',
                backgroundColor: isHovered ? '#5A52D5' : '#6C63FF',
                color: 'white',
                padding: '16px',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isHovered
                  ? '0 8px 25px rgba(108,99,255,0.45)'
                  : '0 4px 15px rgba(108,99,255,0.3)',
                transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
                letterSpacing: '0.3px',
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
