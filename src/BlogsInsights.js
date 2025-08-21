import React, { useState } from 'react';
import './Blogs.css';
import blogData from './blogsData.json';

const ITEMS_PER_PAGE = 3;

function BlogsInsights() {
  const [pageIndex, setPageIndex] = useState(0);
  const totalSlides = Math.ceil(blogData.length / ITEMS_PER_PAGE);

  const handlePrev = () => {
    setPageIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
    const getVisibleBlogs = () => {
      const start = pageIndex * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;

      if (end <= blogData.length) {
        return blogData.slice(start, end);
      } else {
        const firstPart = blogData.slice(start);
        const secondPart = blogData.slice(0, end - blogData.length);
        return [...firstPart, ...secondPart];
      }
    };
    
  return (
    <div className="blogs-wrapper">
      <div className="blogs-header">
        <p className="blogs-title">Blogs</p>
        <p className="blogs-subtitle">Insights and Innovations</p>
        <p className="blogs-description">
          Explore how Captain Tractors empowers farmers with advanced technology and innovation.
        </p>
      </div>

      <div className="blogs-card-row">
        {getVisibleBlogs().map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{blog.date}</p>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </div>
            <div className="blog-footer">
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="blogs-nav-buttons">
        <button className="circle-nav" onClick={handlePrev}>&larr;</button>
        <button className="circle-nav" onClick={handleNext}>&rarr;</button>
      </div>
    </div>
  );
}

export default BlogsInsights;
