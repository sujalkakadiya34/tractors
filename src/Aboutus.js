import React from 'react'

function Aboutus() {
  return (
    <>
    <div className='AboutusContainer' id="sujal">
    <div className='about'>
        <p className='abouttxt'> About Us </p>
        <h1 style={{fontSize:'35px'}}> Manufacturers & Exporters <br></br>of Compact Tractors </h1>
    </div>
    <div className='aboutus'>
        <p> Since 1994, Captain Tractors Pvt Ltd is one of the leading manufacturers of <br></br>
        Mini Tractors and implements used in farming. We are also exporter of <br></br>
        agriculture products and machineries. We were Previously known as Asha <br></br> 
        Exim Pvt Ltd which was founded by two farmer brothers G T Patel and M T <br></br>
        Patel of Rajkot.</p>

        <p> Purpose behind establishment of Captain Tractors Pvt Ltd was to develop <br></br>
        such a tractor which can be affordable, efficient, lower in the maintenance<br></br> 
        cost and higher in the millage.</p>

        <button className='buttonnvnested'><b> Know More </b></button>
    </div>
    </div>
    </>
  )
}

export default Aboutus;