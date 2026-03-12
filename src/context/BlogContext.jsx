import React, { createContext, useContext, useState } from 'react';
import initialBlogs from '../data/blogs';

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(initialBlogs);

  const addBlog = (blogData) => {
    const newBlog = {
      id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1,
      title: blogData.title,
      subtitle: blogData.subtitle || blogData.title,
      category: blogData.category || 'Lifestyle',
      author: 'Admin',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      image: blogData.image || `https://picsum.photos/seed/${Date.now()}/600/400`,
      excerpt: blogData.description ? blogData.description.substring(0, 120) + '...' : 'No description provided.',
      status: 'Published',
      content: [
        {
          heading: blogData.title,
          text: blogData.description || 'Blog content goes here.',
        },
      ],
      comments: [],
    };
    setBlogs((prev) => [newBlog, ...prev]);
    return newBlog;
  };

  const deleteBlog = (id) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
