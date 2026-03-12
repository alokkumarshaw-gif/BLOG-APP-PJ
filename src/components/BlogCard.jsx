import React from 'react';
import { Link } from 'react-router-dom';

const categoryColors = {
  Lifestyle: { bg: '#ECFDF5', color: '#059669' },
  Technology: { bg: '#EEF4FF', color: '#3B82F6' },
  Startup: { bg: '#FFF7ED', color: '#EA580C' },
  Finance: { bg: '#FEF3C7', color: '#D97706' },
  Stories: { bg: '#F3E8FF', color: '#9333EA' },
  Video: { bg: '#FEE2E2', color: '#EF4444' },
};

const BlogCard = ({ blog }) => {
  const catColor = categoryColors[blog.category] || { bg: '#F3F4F6', color: '#6B7280' };

  return (
    <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: '16px' }}>
          {/* Category Badge */}
          <span style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: '600',
            backgroundColor: catColor.bg,
            color: catColor.color,
            marginBottom: '10px',
          }}>
            {blog.category}
          </span>

          {/* Title */}
          <h3 style={{
            fontSize: '15px',
            fontWeight: '600',
            color: '#111827',
            lineHeight: '1.4',
            marginBottom: '8px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p style={{
            fontSize: '13px',
            color: '#9CA3AF',
            lineHeight: '1.5',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {blog.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
