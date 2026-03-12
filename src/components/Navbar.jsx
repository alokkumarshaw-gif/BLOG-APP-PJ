import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav style={{
      backgroundColor: '#FFFFFF',
      width: '100%',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      borderBottom: '1px solid #F3F4F6',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            backgroundColor: '#6C63FF',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          <span style={{ color: '#111827', fontSize: '20px', fontWeight: '700', letterSpacing: '-0.3px' }}>TECHVIMAN</span>
        </Link>

        {/* Login / Dashboard Button */}
        <button
          onClick={() => navigate(isLoggedIn ? '/admin' : '/login')}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? '#5A52D5' : '#6C63FF',
            color: '#FFFFFF',
            padding: '10px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {isLoggedIn ? 'Dashboard' : 'Login'}
          {isLoggedIn && <span>→</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
