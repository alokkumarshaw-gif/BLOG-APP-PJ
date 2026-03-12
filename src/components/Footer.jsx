import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F8F9FA', color: '#374151' }}>
      {/* Main Footer */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px',
      }}>
        {/* Brand */}
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#6C63FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
            <span style={{ color: '#111827', fontSize: '20px', fontWeight: '700' }}>TECHVIMAN</span>
          </Link>
          <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.7' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontWeight: '600', fontSize: '15px', color: '#111827', marginBottom: '20px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Home', 'Best Sellers', 'Offers & Deals', 'Contact Us', 'FAQs'].map((link) => (
              <li key={link}>
                <a href="#" style={{ color: '#6C63FF', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#5A52D5'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6C63FF'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Need Help? */}
        <div>
          <h4 style={{ fontWeight: '600', fontSize: '15px', color: '#111827', marginBottom: '20px' }}>Need Help?</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Delivery Information', 'Return & Refund Policy', 'Payment Methods', 'Track your Order', 'Contact Us'].map((link) => (
              <li key={link}>
                <a href="#" style={{ color: '#6C63FF', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#5A52D5'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6C63FF'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 style={{ fontWeight: '600', fontSize: '15px', color: '#111827', marginBottom: '20px' }}>Follow Us</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Instagram', 'Twitter', 'Facebook', 'YouTube'].map((link) => (
              <li key={link}>
                <a href="#" style={{ color: '#6C63FF', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#5A52D5'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6C63FF'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px' }}>
          <p style={{ color: '#9CA3AF', fontSize: '13px', textAlign: 'center' }}>
            Copyright 2025 © TECHVIMAN - All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
