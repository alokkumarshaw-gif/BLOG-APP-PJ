import React from 'react';
import { useBlogContext } from '../context/BlogContext';

const DashboardPage = () => {
  const { blogs, deleteBlog } = useBlogContext();
  const stats = [
    {
      label: 'Blogs',
      value: blogs.length,
      icon: (
        <svg width="24" height="24" fill="none" stroke="#6C63FF" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      bgColor: '#F3F0FF',
    },
    {
      label: 'Comments',
      value: blogs.reduce((acc, b) => acc + (b.comments ? b.comments.length : 0), 0),
      icon: (
        <svg width="24" height="24" fill="none" stroke="#3B82F6" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      bgColor: '#EEF4FF',
    },
    {
      label: 'Drafts',
      value: 0,
      icon: (
        <svg width="24" height="24" fill="none" stroke="#F59E0B" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      bgColor: '#FFF7ED',
    },
  ];

  return (
    <div>
      {/* Stats Cards */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '20px 28px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              border: '1px solid #F3F4F6',
              minWidth: '160px',
            }}
          >
            <div style={{
              width: '44px',
              height: '44px',
              backgroundColor: stat.bgColor,
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {stat.icon}
            </div>
            <div>
              <p style={{ fontSize: '22px', fontWeight: '700', color: '#111827', lineHeight: 1 }}>{stat.value}</p>
              <p style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '2px' }}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Blogs Table */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #F3F4F6', overflow: 'hidden' }}>
        <div style={{ padding: '18px 24px', borderBottom: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" fill="none" stroke="#6C63FF" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
          </svg>
          <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#111827' }}>Latest Blogs</h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                {['#', 'BLOG TITLE', 'DATE', 'STATUS', 'ACTIONS'].map((h) => (
                  <th key={h} style={{ padding: '12px 24px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {blogs.slice(0, 6).map((blog, index) => (
                <tr key={blog.id} style={{ borderBottom: '1px solid #F3F4F6', transition: 'background-color 0.15s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FAFAFA'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '14px 24px', fontSize: '14px', color: '#9CA3AF' }}>{index + 1}</td>
                  <td style={{ padding: '14px 24px', fontSize: '14px', color: '#374151', fontWeight: '400' }}>{blog.title}</td>
                  <td style={{ padding: '14px 24px', fontSize: '14px', color: '#9CA3AF' }}>{blog.date}</td>
                  <td style={{ padding: '14px 24px' }}>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: '500',
                      color: blog.status === 'Published' ? '#6C63FF' : '#EA580C',
                    }}>
                      {blog.status}
                    </span>
                  </td>
                  <td style={{ padding: '14px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button style={{
                        padding: '5px 14px',
                        backgroundColor: 'transparent',
                        color: '#6B7280',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '500',
                        border: '1px solid #E5E7EB',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}>Unpublish</button>
                      <button
                        onClick={() => deleteBlog(blog.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#EF4444',
                          fontSize: '16px',
                          padding: '2px',
                          lineHeight: 1,
                        }}
                      >✕</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
