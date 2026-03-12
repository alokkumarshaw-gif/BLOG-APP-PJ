import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';

const AddBlogPage = () => {
  const { addBlog } = useBlogContext();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please fill in this field.');
      return;
    }
    addBlog(formData);
    alert('Blog added successfully!');
    setFormData({ title: '', subtitle: '', description: '', category: '', image: '' });
    setImagePreview(null);
    navigate('/admin/blogs');
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    border: 'none',
    borderBottom: '1px solid #E5E7EB',
    fontSize: '14px',
    outline: 'none',
    color: '#374151',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px',
  };

  return (
    <div style={{ maxWidth: '580px' }}>
      <form onSubmit={handleSubmit}>
        {/* Image Upload - Small Square */}
        <div style={{ marginBottom: '28px' }}>
          <label style={labelStyle}>Upload thumbnail</label>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <div
            onClick={() => fileInputRef.current.click()}
            style={{
              width: '80px',
              height: '80px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'border-color 0.2s',
              backgroundColor: '#FAFAFA',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6C63FF'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <>
                <svg width="24" height="24" fill="none" stroke="#9CA3AF" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <span style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>Upload</span>
              </>
            )}
          </div>
        </div>

        {/* Blog Title */}
        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Blog title</label>
          <input
            type="text"
            name="title"
            placeholder="Type here"
            value={formData.title}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => e.currentTarget.style.borderBottomColor = '#6C63FF'}
            onBlur={(e) => e.currentTarget.style.borderBottomColor = '#E5E7EB'}
          />
        </div>

        {/* Sub Title */}
        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Sub title</label>
          <input
            type="text"
            name="subtitle"
            placeholder="Type here"
            value={formData.subtitle}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => e.currentTarget.style.borderBottomColor = '#6C63FF'}
            onBlur={(e) => e.currentTarget.style.borderBottomColor = '#E5E7EB'}
          />
        </div>

        {/* Blog Description with Toolbar */}
        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Blog Description</label>
          <div style={{
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            overflow: 'hidden',
          }}>
            {/* Toolbar */}
            <div style={{
              borderBottom: '1px solid #E5E7EB',
              backgroundColor: '#FFFFFF',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}>
              <select style={{
                padding: '4px 8px',
                fontSize: '12px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                outline: 'none',
                color: '#374151',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '500',
              }}>
                <option>Normal</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
              </select>
              <div style={{ width: '1px', height: '18px', backgroundColor: '#E5E7EB', margin: '0 6px' }} />
              {[
                { label: 'B', style: { fontWeight: '700' } },
                { label: 'I', style: { fontStyle: 'italic' } },
                { label: 'U', style: { textDecoration: 'underline' } },
              ].map((btn) => (
                <button
                  key={btn.label}
                  type="button"
                  style={{
                    padding: '5px 8px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    color: '#374151',
                    fontSize: '14px',
                    ...btn.style,
                  }}
                >
                  {btn.label}
                </button>
              ))}
              <div style={{ width: '1px', height: '18px', backgroundColor: '#E5E7EB', margin: '0 6px' }} />
              {['🔗', '☰', '≡', 'Tₓ'].map((icon, i) => (
                <button
                  key={i}
                  type="button"
                  style={{
                    padding: '5px 8px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    color: '#374151',
                    fontSize: '13px',
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
            <textarea
              name="description"
              placeholder=""
              value={formData.description}
              onChange={handleChange}
              rows={8}
              style={{
                width: '100%',
                padding: '14px',
                border: 'none',
                fontSize: '14px',
                outline: 'none',
                color: '#374151',
                fontFamily: 'Inter, sans-serif',
                resize: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>

        {/* Blog Category */}
        <div style={{ marginBottom: '32px' }}>
          <label style={labelStyle}>Blog category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{
              ...inputStyle,
              borderBottom: '1px solid #E5E7EB',
              cursor: 'pointer',
              color: formData.category ? '#374151' : '#9CA3AF',
            }}
          >
            <option value="">Select category</option>
            <option value="Technology">Technology</option>
            <option value="Startup">Startup</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            backgroundColor: '#6C63FF',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogPage;
