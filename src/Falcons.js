import React from 'react'
import './App.css';


function Falcons() {
  return (
    <>
      <div className="imageRow1" id='jatt'>
        <div className="imageItem">
          <div className="caption">
            <img src="/assets/boost1.jpg" alt="Boost 1" className='imgrdus' />
            <h2>Best-in-Class Power</h2>
            <p>With lowest RPM drop across the range for optimised output</p>
          </div>
        </div>
        <div className="imageItem">
          <div className="caption">
            <img src="/assets/boost2.jpg" alt="Boost 2" className='imgrdus' />
            <h2>Best-in-Class Mileage</h2>
            <p>Save more with lower fuel consumption per hour of operation.</p>
          </div>
        </div>
        <div className="imageItem">
          <div className="caption">
            <img src="/assets/boost3.jpg" alt="Boost 3" className='imgrdus' />
            <h2>Best-in-Class Technology</h2>
            <p>Specifically designed tractors for all your application-based needs.</p>
          </div>
        </div>
        <div className="imageItem">
          <div className="caption">
            <img src="/assets/boost4.jpg" alt="Boost 4" className='imgrdus' />
            <h2>3-Year Warranty*</h2>
            <p>Only company to provide unlimited hours warranty for 3 years (T&C applied).</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Falcons;
