import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Icons from './Icons';
import ImageSlider from './ImageSlider';
import Aboutus from './Aboutus';
import Falcons from './Falcons';
import Tractorimg from './Tractorimg';
import Plant from './Plant';
import Farming from './Farming';
import Tracvedio from './Tracvedio';
import Bghome from './Bghome';
import Blogs from './Blogs';
import Inquiry from './Inquiry';
import { Routes, Route } from 'react-router-dom';
import RequestQfooter from './RequestQfooter';
import Footer from './footer';
import Socialcontribution from './Socialcontribution';
import Testimonials from './Testimonials';
import BlogsInsights from './BlogsInsights';
import Questions from './Questions';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="scroll-container" style={{ background: '#f0f0f0' }}>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

       
      {showSidebar && (
        <Icons setShowSidebar={setShowSidebar} />
      )}

      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageSlider />
              <Aboutus />
              <Falcons />
              <Tractorimg />
              <Plant />
              <Farming />
              <Tracvedio />
              <Bghome />
              <Blogs />
              <Socialcontribution />
              <Testimonials />
              <BlogsInsights />
              <Questions />
              <RequestQfooter />
              <Footer />
            </>
          }
        />
      
      {/* <Route
          path="/ImageSlider"
          element={<div className="ImageSlider-page"><ImageSlider /></div>}
        /> */}
        <Route
          path="/Aboutus"
          element={<div className="ImageSlider-page"><Aboutus /></div>}
        />
        <Route
          path="/Falcons"
          element={<div className="Falcons-page"><Falcons /></div>}
        />
        <Route
          path="/Tractorimg"
          element={<div className="Tractorimg-page"><Tractorimg /></div>}
        />
        <Route
          path="/Plant"
          element={<div className="Plant-page"><Plant /></div>}
        />
        <Route
          path="/Farming"
          element={<div className="Farming-page"><Farming /></div>}
        />
        <Route
          path="/Tracvedio"
          element={<div className="Tracvedio-page"><Tracvedio /></div>}
        />
        <Route
          path="/Bghome"
          element={<div className="Bghome-page"><Bghome /></div>}
        />
        <Route
          path="/Blogs"
          element={<div className="Blogs-page"><Blogs /></div>}
        />
         <Route
          path="/Inquiry"
          element={<div className="Inquiry-page"><Inquiry /></div>}
        />  
      </Routes>
    </div>
    
  );
}

export default App;
