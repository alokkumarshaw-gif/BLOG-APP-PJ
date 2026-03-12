import React, { useState } from 'react';
import { useBlogContext } from '../context/BlogContext';

const CommentsPage = () => {
  const { blogs } = useBlogContext();
  const [filter, setFilter] = useState('Approved');

  // Collect all comments from all blogs
  const allComments = blogs.flatMap((blog) =>
    (blog.comments || []).map((comment) => ({
      ...comment,
      blogTitle: blog.title,
      blogId: blog.id,
      status: comment.status || 'Approved',
    }))
  );

  const filteredComments = allComments.filter((c) => c.status === filter);

  return (
    <div>
      {/* Header with filter buttons */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>Comments</h1>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setFilter('Approved')}
            style={{
              padding: '7px 18px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              border: '1px solid',
              borderColor: filter === 'Approved' ? '#6C63FF' : '#E5E7EB',
              backgroundColor: filter === 'Approved' ? '#F3F0FF' : '#FFFFFF',
              color: filter === 'Approved' ? '#6C63FF' : '#6B7280',
            }}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter('Not Approved')}
            style={{
              padding: '7px 18px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              border: '1px solid',
              borderColor: filter === 'Not Approved' ? '#6C63FF' : '#E5E7EB',
              backgroundColor: filter === 'Not Approved' ? '#F3F0FF' : '#FFFFFF',
              color: filter === 'Not Approved' ? '#6C63FF' : '#6B7280',
            }}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Comments Table */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #F3F4F6', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
              <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>BLOG TITLE & COMMENT</th>
              <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>DATE</th>
              <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredComments.length === 0 && (
              <tr>
                <td colSpan="3" style={{ padding: '40px 24px', textAlign: 'center', color: '#9CA3AF', fontSize: '14px' }}>
                  No {filter.toLowerCase()} comments found.
                </td>
              </tr>
            )}
            {filteredComments.map((comment, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #F3F4F6' }}>
                <td style={{ padding: '16px 24px' }}>
                  <p style={{ fontSize: '13px', color: '#6C63FF', fontWeight: '500', marginBottom: '8px' }}>
                    Blog : {comment.blogTitle}
                  </p>
                  <p style={{ fontSize: '13px', color: '#374151', marginBottom: '2px' }}>
                    <span style={{ fontWeight: '600' }}>Name : </span>{comment.name}
                  </p>
                  <p style={{ fontSize: '13px', color: '#6B7280' }}>
                    <span style={{ fontWeight: '600', color: '#374151' }}>Comment : </span>{comment.text}
                  </p>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '14px', color: '#9CA3AF', verticalAlign: 'top' }}>
                  {comment.date || 'N/A'}
                </td>
                <td style={{ padding: '16px 24px', verticalAlign: 'top' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 14px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: comment.status === 'Approved' ? '#ECFDF5' : '#FFF7ED',
                      color: comment.status === 'Approved' ? '#059669' : '#EA580C',
                      border: `1px solid ${comment.status === 'Approved' ? '#A7F3D0' : '#FED7AA'}`,
                    }}>
                      {comment.status}
                    </span>
                    <button style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#9CA3AF',
                      fontSize: '16px',
                      padding: '2px',
                    }}>🗑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommentsPage;
