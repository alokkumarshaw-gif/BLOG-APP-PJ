import React from 'react';
import { useBlogContext } from '../context/BlogContext';

const BlogListPage = () => {
  const { blogs, deleteBlog } = useBlogContext();
  return (
    <div>
      <h1 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '20px' }}>All blogs</h1>

      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #F3F4F6', overflow: 'hidden' }}>
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
              {blogs.map((blog, index) => (
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

export default BlogListPage;
