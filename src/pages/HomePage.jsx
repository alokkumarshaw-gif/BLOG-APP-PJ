import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { useBlogContext } from '../context/BlogContext';

const categories = ['All', 'Technology', 'Startup', 'Lifestyle', 'Finance'];

const HomePage = () => {
  const { blogs } = useBlogContext();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email || !email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section - Clean White */}
      <section style={{ backgroundColor: '#FFFFFF', color: '#111827', padding: '80px 24px 48px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>

          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: '700',
            lineHeight: '1.2',
            color: '#1F2937',
            marginBottom: '20px',
          }}>
            Your own <span style={{ color: '#6C63FF', fontStyle: 'italic' }}>blogging</span>
            <br />platform.
          </h1>
          <p style={{
            color: '#6B7280',
            fontSize: '15px',
            maxWidth: '520px',
            margin: '0 auto 36px',
            lineHeight: '1.7',
          }}>
            This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: '480px',
            margin: '0 auto',
            display: 'flex',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #E5E7EB',
          }}>
            <input
              type="text"
              placeholder="Search for blogs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                padding: '14px 20px',
                fontSize: '14px',
                border: 'none',
                outline: 'none',
                color: '#374151',
                backgroundColor: '#FFFFFF',
              }}
            />
            <button style={{
              backgroundColor: '#6C63FF',
              color: 'white',
              padding: '14px 32px',
              fontSize: '14px',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}>
              Search
            </button>
          </div>

          {/* Category Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '28px',
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 20px',
                  borderRadius: '50px',
                  fontSize: '13px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: activeCategory === cat ? '#6C63FF' : '#F3F4F6',
                  color: activeCategory === cat ? '#FFFFFF' : '#6B7280',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px 64px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}>
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ color: '#9CA3AF', fontSize: '16px' }}>No blogs found matching your criteria.</p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section style={{ backgroundColor: '#ECECEB', padding: '80px 24px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
            Never Miss a Blog!
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '32px' }}>
            Subscribe to get the latest blog, new tech, and exclusive news.
          </p>

          {subscribed ? (
            <div style={{
              backgroundColor: '#ECFDF5',
              border: '1px solid #6EE7B7',
              borderRadius: '8px',
              padding: '16px 24px',
              maxWidth: '440px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}>
              <span style={{ fontSize: '20px' }}>✅</span>
              <span style={{ color: '#065F46', fontSize: '14px', fontWeight: '500' }}>
                You've been subscribed successfully!
              </span>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              maxWidth: '440px',
              margin: '0 auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #E5E7EB',
            }}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                style={{
                  flex: 1,
                  padding: '14px 20px',
                  fontSize: '13px',
                  border: 'none',
                  outline: 'none',
                  color: '#374151',
                  backgroundColor: 'transparent',
                }}
              />
              <button
                onClick={handleSubscribe}
                style={{
                  backgroundColor: '#6C63FF',
                  color: 'white',
                  padding: '14px 28px',
                  fontSize: '13px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}>
                Subscribe
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
