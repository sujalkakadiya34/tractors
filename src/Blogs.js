import React, { useState } from 'react';
import './Blogs.css';

function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

   const blogData = [
    {
      image: '/assets/food1.png',
      date: 'October 22, 2024',
      title: 'Topping Marzipan Tart Cheesecake Sweet Lollipop',
      description: 'Agriculture is the major element contributing the highest in the Indian Economy. Farmers'
    },
    {
      image: '/assets/food2.png',
      date: 'April 16, 2021',
      title: 'Topping Carrot Cake Jujubes Lemon Drops',
      description: 'Innovator of First Indigenous Mini Tractor, Mr. G T Patel and Mr. M T Patel are'
    },
    {
      image: '/assets/food3.jpg',
      date: 'April 16, 2021',
      title: 'Muffin Donut Soufflé Piebear Claw Croissant',
      description: 'Ratio of Farm Mechanization in India lies between 40-45%, where states like Punjab'
    },
    {
      image: '/assets/tractor13.png',
      date: 'April 16, 2021',
      title: 'Agricultural Revolution with Modern Tractors',
      description: 'Tractors play a major role in modernizing Indian farming'
    },
    {
      image: '/assets/tractor14.png',
      date: 'April 16, 2021',
      title: 'Organic Farming Growth Trends in 2025',
      description: 'More farmers are switching to eco-friendly cultivation'
    },
    {
      image: '/assets/tractor15.jpg',
      date: 'April 16, 2021',
      title: 'Sugarcane Farming Tips for Beginners',
      description: 'A beginner’s guide to managing sugarcane yields'
    },
    {
      image: '/assets/tractor16.png',
      date: 'April 16, 2021',
      title: 'How Technology Helps Indian Farmers',
      description: 'Latest farming apps and equipment in India'
    },
    {
      image: '/assets/tractor17.jpg',
      date: 'April 16, 2021',
      title: 'Seasonal Crops & Climate Awareness',
      description: 'Choosing crops based on changing climates'
    }
  ];

  const filteredData = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredData.length / postsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className='search-menu' id="jay">
        <p className='search-info'>Showing {filteredData.length} results</p>
        <div className="search-wrapper">
          <img src="/assets/searchicon.jpg" className="search-icon-img" alt="search" />
          <input
            type="search"
            className="search-input"  
            placeholder="Search blog titles..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset page on new search
            }}
          />
        </div>
      </div>

      <div className="imageRow">
        {currentPosts.map((blog, index) => (
          <div className="imageItem" key={index}>
            <img src={blog.image} className='border' alt={`Blog ${index + 1}`} />
            <div className="caption">
              <span className="authorName">{blog.date}</span>
              <h4 className='txthover'>{blog.title}</h4>
              <p>{blog.description}</p>
              <div className="avatarRow">
                <button className='foodbtn'>Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`page-btn ${currentPage === number ? 'active' : ''}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
}

export default Blogs;
