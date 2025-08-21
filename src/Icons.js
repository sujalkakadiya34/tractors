import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './Blogs.css';

import ImageSlider from './ImageSlider';
import Aboutus from './Aboutus';
import Falcons from './Falcons';
import Tractorimg from './Tractorimg';
import Plant from './Plant';
import Farming from './Farming';
import Tracvedio from './Tracvedio';
import Bghome from './Bghome';
import Blogs from './Blogs';

function Icons() {
  return (
    <div className='body1'>
      <ul>
        <li><button className='Homebtn'><Link to="/">Home</Link></button></li>
        {/* <li><Link to="/ImageSlider">Image Slider</Link></li> */}
        <li><button className='Aboutusbtn'><Link to="/Aboutus" target="_parent">About Us</Link></button></li>
        <li><button className='Falconbtn'><Link to="/Falcons" target="_parent">Falcons</Link></button></li>
        <li><button className='Tractorimgbtn'><Link to="/Tractorimg" target="_parent">Tractor Images</Link></button></li>
        <li><button className='Plantbtn'><Link to="/Plant" target="_parent">Plant</Link></button></li>
        <li><button className='Farmimgbtn'><Link to="/Farming" target="_parent">Farming</Link></button></li>
        <li><button className='Tracvediobtn'><Link to="/Tracvedio" target="_parent">Tractor Videos</Link></button></li>
        <li><button className='Bghomebtn'><Link to="/Bghome" target="_parent">Background Home</Link></button></li>
        <li><button className='Blogsbtn'><Link to="/Blogs" target="_parent">Blogs</Link></button></li>
      </ul>

      
    </div>
  );
}

export default Icons;
