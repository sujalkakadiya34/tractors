import React, { useState } from "react";
import "./Innovation.css";
import data from "./innovationData.json";

function Innovation() {
  const [activeYear, setActiveYear] = useState(null);

  return (
    <>
        <div className='Innovation-main-container'>
            <div className='Innovation-text-container'>
                <h5 className='Innovation-ft-h5'>Innovation of Mini tractor</h5> 
                <h1 className='Innovation-ft-h1'>Tough Roads Lead to Beautiful Destination</h1>
                <p className='Innovation-ft-p'>
                    Success is valued by strength of the DESIRE. This saying perfectly reflects the Journey of Captain Tractors Pvt. Ltd. A single new thought of visionary farmer<br></br>
                    brothers changed the dimensions of Agri world.India's 1st Mini tractor was introduced in 1998,by ultimate efforts of G.T. Patel & M.T. Patel.
                </p>
            </div>
        </div>

    <div className="timeline-container">
  {data.map((item, index) => (
    <div
      key={index}
      className={`timeline-column ${activeYear === item.year ? "active" : ""}`}
      onClick={() => setActiveYear(item.year)}
    >
      {/* LEFT → Year + Gen */}
      <div className="timeline-text">
        <h3>{item.year}</h3>
        <p>{item.gen}</p>
      </div>

      {/* CENTER → Blank (alignment only) */}
      <div className="timeline-center"></div>

      {/* RIGHT → Image (only if active) */}
      {activeYear === item.year && item.img ? (
        <div className="timeline-img">
          <img src={item.img} alt={item.year} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  ))}
</div>

    </>
  );
}

export default Innovation;
