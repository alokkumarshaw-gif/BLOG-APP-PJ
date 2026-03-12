import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useBlogContext } from '../context/BlogContext';

const BlogPage = () => {
  const { blogs } = useBlogContext();
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const [commentText, setCommentText] = useState('');

  if (!blog) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <Navbar />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>Blog Not Found</h2>
            <p style={{ color: '#9CA3AF', marginBottom: '24px' }}>The blog post you're looking for doesn't exist.</p>
            <Link to="/" style={{ color: '#6C63FF', fontWeight: '500', textDecoration: 'none' }}>← Back to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryColors = {
    Lifestyle: { bg: '#F3F0FF', text: '#6C63FF' },
    Technology: { bg: '#EEF4FF', text: '#3B82F6' },
    Finance: { bg: '#ECFDF5', text: '#10B981' },
    Stories: { bg: '#FFF7ED', text: '#F97316' },
    Video: { bg: '#FEF2F2', text: '#EF4444' },
  };
  const colors = categoryColors[blog.category] || { bg: '#F3F4F6', text: '#6B7280' };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Blog Header */}
      <section style={{ backgroundColor: 'white', color: 'black', padding: '60px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block',
            padding: '4px 16px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: '600',
            marginBottom: '20px',
            backgroundColor: colors.bg,
            color: colors.text,
          }}>
            {blog.category}
          </span>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '700', lineHeight: '1.3', marginBottom: '16px' }}>
            {blog.title}
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>
            {blog.subtitle}
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              backgroundColor: '#6C63FF',
              color: 'white',
              padding: '10px 28px',
              borderRadius: '50px',
              fontSize: '13px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            Read More
          </Link>
        </div>
      </section>

      {/* Featured Image */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
        <img
          src={blog.image}
          alt={blog.title}
          style={{
            width: '100%',
            height: '360px',
            objectFit: 'cover',
            borderRadius: '16px',
            marginTop: '32px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          }}
        />
      </div>

      {/* Article Content */}
      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#111827', marginBottom: '24px' }}>
          {blog.subtitle}
        </h2>
        <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.8', marginBottom: '32px' }}>
          In this detailed guide, we'll explore each step you need to take to {blog.title.toLowerCase()}. Whether you're just starting out or looking to refine your approach, these practical tips will help you make meaningful changes in your life.
        </p>

        {blog.content.map((section, index) => (
          <div key={index} style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              {section.heading}
            </h3>
            <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.8' }}>
              {section.text}
            </p>
          </div>
        ))}

        {/* Conclusion */}
        <div style={{ marginBottom: '32px', paddingTop: '16px', borderTop: '1px solid #E5E7EB' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>Conclusion</h3>
          <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.8' }}>
            Managing your lifestyle is an ongoing journey, not a destination. By following these steps consistently, you'll build habits that support your well-being and help you lead a more fulfilling life. Remember, small changes compound over time. Start today—your future self will thank you.
          </p>
        </div>

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '24px 0', borderTop: '1px solid #E5E7EB' }}>
          <img src={blog.authorAvatar} alt={blog.author} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#E5E7EB' }} />
          <div>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>{blog.author}</p>
            <p style={{ fontSize: '12px', color: '#9CA3AF' }}>{blog.date}</p>
          </div>
        </div>
      </article>

      {/* Comments Section */}
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 64px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '24px' }}>
          Comments ({blog.comments.length})
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
          {blog.comments.map((comment) => (
            <div key={comment.id} style={{ display: 'flex', gap: '12px' }}>
              <img src={comment.avatar} alt={comment.author} style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#E5E7EB', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>{comment.author}</span>
                  <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{comment.date}</span>
                </div>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6' }}>{comment.text}</p>
              </div>
            </div>
          ))}
          {blog.comments.length === 0 && (
            <p style={{ color: '#9CA3AF', fontSize: '14px' }}>No comments yet. Be the first to comment!</p>
          )}
        </div>

        {/* Add Comment */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>Add a comment</h4>
          <textarea
            placeholder="Write your comment here..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            rows={4}
            style={{
              width: '100%',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              padding: '14px 16px',
              fontSize: '14px',
              color: '#374151',
              outline: 'none',
              resize: 'none',
              fontFamily: 'Inter, sans-serif',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#6C63FF'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
          />
          <button style={{
            marginTop: '12px',
            backgroundColor: '#6C63FF',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}>
            Submit
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
