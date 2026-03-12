import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AddBlogPage from './pages/AddBlogPage';
import BlogListPage from './pages/BlogListPage';
import CommentsPage from './pages/CommentsPage';
import AdminLayout from './components/AdminLayout';

const App = () => {
  return (
    <AuthProvider>
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Admin Routes with Sidebar Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="add" element={<AddBlogPage />} />
            <Route path="blogs" element={<BlogListPage />} />
            <Route path="comments" element={<CommentsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogProvider>
    </AuthProvider>
  );
};

export default App;