import React from 'react';
//css file is App.css  


function Bghome() {
  return (
    <div className='Bghome' style={{ padding: '40px' }} id='jaydeep'>
      <p className='Bghome1'> Captain Facts </p>  
      <h1 className='Bghome2'> The Captain Legacy in Numbers </h1>
      <p className='Bghome3'>
        The Captain Legacy in Numbers Revolutionizing compact tractors with innovative manufacturing, a global presence, exceptional<br />
        dealer network, skilled workforce, and a legacy of award-winning excellence for over three decades.
      </p>

      <div className="image-row">
      
        <div className='asset-nested-main'>
          <div className='asset-nested-1'>
            <img src="/assets/bghome1.svg" className="asset-nested-1-img" alt="Fact 1" />
          </div>
          <div className='asset-nested-1-2'>
            <h4 className='asset-nested-1-h4'>1994</h4>
            <p className='asset-nested-1-p'>Incorporated</p>
          </div>
        </div>

       
        <div className='asset-nested-main'>
          <div className='asset-nested-1'>
            <img src="/assets/bghome2.svg" className="asset-nested-1-img" alt="Fact 2" />
          </div>
          <div className='asset-nested-1-2'>
            <h4 className='asset-nested-1-h4'>50+</h4>
            <p className='asset-nested-1-p'>Tractor Variants</p>
          </div>
        </div>

        
        <div className='asset-nested-main'>
          <div className='asset-nested-1'>
            <img src="/assets/bghome3.svg" className="asset-nested-1-img" alt="Fact 3" />
          </div>
          <div className='asset-nested-1-2'>
            <h4 className='asset-nested-1-h4'>3rd</h4>
            <p className='asset-nested-1-p'>Largest by Exports</p>
          </div>
        </div>

 
        <div className='asset-nested-main'>
          <div className='asset-nested-1'>
            <img src="/assets/bghome4.svg" className="asset-nested-1-img" alt="Fact 4" />
          </div>
          <div className='asset-nested-1-2'>
            <h4 className='asset-nested-1-h4'>100+</h4>
            <p className='asset-nested-1-p'>Implements</p>
          </div>
        </div>

        {/* 5 */}
       <div className='asset-nested-main'>
          <div className='asset-nested-1'>
            <img src="/assets/bghome5.svg" className="asset-nested-1-img" alt="Fact 5" />
          </div>
          <div className='asset-nested-1-2'>
            <h4 className='asset-nested-1-h4'>1st</h4>
            <p className='asset-nested-1-p'>Incorporated</p>
          </div>
        </div>

       {/* 6 */}
        <div className='asset-nested-main'>
          <div className='asset-nested-1'>
            <img src="/assets/bghome6.svg" className="asset-nested-1-img" alt="Fact 6" />
          </div>
          <div className='asset-nested-1-2'>
            <h4 className='asset-nested-1-h4'>30+</h4>
            <p className='asset-nested-1-p'>Tractor Variants</p>
          </div>
        </div>

        {/* 7 */}
        <div className='asset-nested-main'>
          <div className='asset-nested-1'>
            <img src="/assets/bghome7.svg" className="asset-nested-1-img" alt="Fact 7" />
          </div>
          <div className='asset-nested-1-2'>
            <h4 className='asset-nested-1-h4'>500+</h4>
            <p className='asset-nested-1-p'>Largest by Exports</p>
          </div>
        </div>

        {/* 8 */}
        <div className='asset-nested-main'>
          <div className='asset-nested-1'>
            <img src="/assets/bghome8.svg" className="asset-nested-1-img" alt="Fact 8" />
          </div>
          <div className='asset-nested-1-2'>
            <h4 className='asset-nested-1-h4'>200+</h4>
            <p className='asset-nested-1-p'>Implements</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Bghome;
