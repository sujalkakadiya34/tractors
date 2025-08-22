
import React, { useState, useRef, useEffect } from 'react';
import './Blogs.css';
import RequestQfooter from './RequestQfooter';
import Footer from './footer';

function Inquiry() {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [activeTab, setActiveTab] = useState("domestic");

  const buttonLabels = [
    '200 DI 2WD', '200 DI 4WD', '200 DI LS', '223 4WD',
    '250 DI 2WD', '250 DI 4WD', '280 DX 2WD', '283 4WD',
    '280 4WD', '120 LITTLE MASTER', 'IMPLEMENTS',
  ];

  const toggleButton = (label) => {
    setSelectedButtons((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((item) => item !== label)
        : [...prevSelected, label]
    );
  };

  // Captcha
  const [captcha, setCaptcha] = useState('');
  const [userCaptchaInput, setUserCaptchaInput] = useState('');
  const canvasRef = useRef(null);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(text);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 150; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.4)`;
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1.5, 1.5);
    }

    ctx.font = '24px sans-serif';
    ctx.fillStyle = '#000';
    ctx.setTransform(1, 0.1, 0.1, 1, 0, 0);
    ctx.fillText(captcha, 10, 35);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }, [captcha]);

  // Form Fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    mobile: '',
    state: '',
    district: '',
    message: '',
    country: '',
    zip: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, businessName, email, mobile } = formData;
    if (!firstName || !lastName || !businessName || !email || !mobile) {
      alert('❗ Please fill in all required fields.');
      return false;
    }
    if (userCaptchaInput.trim() !== captcha.trim()) {
      alert('❌ Incorrect captcha!');
      generateCaptcha();
      setUserCaptchaInput('');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert(`✅ ${activeTab === "domestic" ? "Domestic" : "International"} Inquiry Submitted Successfully!`);

      generateCaptcha();
      setUserCaptchaInput('');
      setFormData({
        firstName: '',
        lastName: '',
        businessName: '',
        email: '',
        mobile: '',
        state: '',
        district: '',
        message: '',
        country: '',
        zip: ''
      });
      setSelectedButtons([]);
    }
  };

  return (
    <div className="inquiry-scroll-container">
      <div className="inquiry-main-container">
        {/* Banner */}
        <div className="inquiry-img">
          <img src="/assets/inquiry.jpg" alt="Inquiry" />
          <div className="center">Inquiry</div>
          <div className="center1"><b>Discover Your Next Adventure</b></div>
        </div>

        {/* Title */}
        <div className="inquiry-content">
          <p className='p'>Fill the Form</p>
          <h1 className='h1'><b>Fill up The Below Mentioned Details for Inquiry</b></h1>
        </div>

        {/* Toggle Buttons */}
      <div className="inquiry-form">
        <button
          className={`inquiry-form-btn2 ${activeTab === "domestic" ? "active" : ""}`}
          onClick={() => setActiveTab("domestic")}
        >
          Domestic Inquiry
        </button>
        <button
          className={`inquiry-form-btn2 ${activeTab === "international" ? "active" : ""}`}
          onClick={() => setActiveTab("international")}
        >
          International Inquiry
        </button>
      </div>

        <div className='inquiry-form-hr'><hr /></div>

        {/* === Form === */}
        {/* First/Last/Business */}
        <div className='inquiry-form-main-container'>
          <div className='inquiry-form-firstname'>
            <label className='fname1'>First Name<span style={{ color: 'red' }}>*</span></label><br />
            <input type='text' name='firstName' value={formData.firstName} onChange={handleInputChange} className='fname-input' placeholder='Enter first name' />
          </div>
        </div>
        <div className='inquiry-form-main-container'>
          <div className='inquiry-form-firstname'>
            <label className='fname1'>Last Name<span style={{ color: 'red' }}>*</span></label><br />
            <input type='text' name='lastName' value={formData.lastName} onChange={handleInputChange} className='fname-input' placeholder='Enter last name' />
          </div>
        </div>
        <div className='inquiry-form-main-container'>
          <div className='inquiry-form-firstname'>
            <label className='fname1-Business'>Business Name<span style={{ color: 'red' }}>*</span></label><br />
            <input type='text' name='businessName' value={formData.businessName} onChange={handleInputChange} className='fname-input' placeholder='Enter Business name' />
          </div>
        </div>

        {/* Email + Mobile */}
        <div className='secondmargin'>
          <div className='inquiry-form-main-container1'>
            <div className='inquiry-form-firstname'>
              <label className='fname2'>Email<span style={{ color: 'red' }}>*</span></label><br />
              <input type='email' name='email' value={formData.email} onChange={handleInputChange} className='lname-input-emailRow1' placeholder='Enter Email' />
            </div>
          </div>
          <div className='inquiry-form-main-container'>
            <div className='inquiry-form-firstname'>
              <label className='fname2-Mobile'>Mobile Number<span style={{ color: 'red' }}>*</span></label><br />
              <input type='text' name='mobile' value={formData.mobile} onChange={handleInputChange} className='lname-input-emailRow' placeholder='Enter Mobile Number' />
            </div>
          </div>

          {/* Domestic vs International */}
          {activeTab === "domestic" ? (
            <>
              <div className='inquiry-form-main-container'>
                <div className='inquiry-form-firstname'>
                  <label className='fname3'>State</label><br />
                  <select name='state' value={formData.state} onChange={handleInputChange} className='lname-input-emailRow'>
                    <option>Select State</option>
                    <option>Gujarat</option>
                    <option>Punjab</option>
                    <option>Madhya Pradesh</option>
                  </select>
                </div>
              </div>
              <div className='inquiry-form-main-container'>
                <div className='inquiry-form-firstname'>
                  <label className='fname4'>District</label><br />
                  <select name='district' value={formData.district} onChange={handleInputChange} className='lname-input-emailRow'>
                    <option>Select District</option>
                    <option>Rajkot</option>
                    <option>Ahmedabad</option>
                    <option>Surat</option>
                  </select>
                </div>
              </div>
            </>
          ) : (
            <>

              <div className='inquiry-form-main-container'>
                <div className='inquiry-form-firstname'>
                  <label className='fname3-add1'>Address Line 1<span style={{ color: 'red' }}>*</span></label><br />
                  <input type='text' name='country' value={formData.country} onChange={handleInputChange} className='lname-input-emailRow' placeholder='Enter Country' />
                </div>
              </div>
                <div className='inquiry-form-main-container'>
                <div className='inquiry-form-firstname'>
                  <label className='fname3-add2'>Address Line 2<span style={{ color: 'red' }}>*</span></label><br />
                  <input type='text' name='country' value={formData.country} onChange={handleInputChange} className='lname-input-emailRow' placeholder='Enter Country' />
                </div>
              </div>

              <div className='inquiry-form-main-container'>
                <div className='inquiry-form-firstname'>
                  <label className='fname3-country'>Country</label><br />
                  <input type='text' name='country' value={formData.country} onChange={handleInputChange} className='lname-input-emailRow11' placeholder='Enter Country' />
                </div>
              </div>
              <div className='inquiry-form-main-container'>
                <div className='inquiry-form-firstname'>
                  <label className='fname4'>Zip Code</label><br />
                  <input type='text' name='zip' value={formData.zip} onChange={handleInputChange} className='lname-input-emailRow' placeholder='Enter Zip Code' />
                </div>
              </div>
            </>
          )}

          <br />

          {/* Select Products */}
          <div className="select-products">
            <p className="select-products-p">Select Products</p>
            <div className="button-row">
              {buttonLabels.slice(0, 8).map((label, index) => (
                <button
                  key={index}
                  className={`custom-button ${selectedButtons.includes(label) ? 'active' : ''}`}
                  onClick={() => toggleButton(label)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="button-new-row">
              {buttonLabels.slice(8).map((label, index) => (
                <button
                  key={index}
                  className={`custom-button ${selectedButtons.includes(label) ? 'active' : ''}`}
                  onClick={() => toggleButton(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Message */}
        <div className='textareaMessage1'>
          <p className='textareaMessage'>Message</p>
          <div className='textarea'>
            <textarea name="message" className='textarea1' value={formData.message} onChange={handleInputChange} placeholder='Write something here...'></textarea>
          </div>
        </div>

        {/* Captcha */}
        <div className="captcha-box">
          <label>Captcha</label>
          <canvas ref={canvasRef} width={320} height={44}></canvas>
          <button type="button" className="reset-btn" onClick={generateCaptcha}>Reset Captcha</button>
          <label>Submit Captcha</label>
          <input type="text" value={userCaptchaInput} onChange={(e) => setUserCaptchaInput(e.target.value)} placeholder="Enter Captcha" />
        </div>

        <div className="inquiry-form-hr1"><hr /></div>

        <div className='fainal-form-send'>
          <button type="button" onClick={handleSubmit} className='fainal-form-send-btn'>Send Now</button>
        </div>
      </div>

      {/* Footer */}
      <div className='RequestQfooter-footer'>
        <RequestQfooter />
        <Footer />
      </div>
    </div>
  ); 
}

export default Inquiry;


