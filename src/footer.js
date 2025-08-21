import React from 'react';

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-content">
         <div className="footer-column">
          <img src="/assets/tractorlogo.png" alt="Captain Logo" className="footer-logo" />
          <p className="footer-desc">
            Revolutionizing farming with innovative compact tractors since 1994.
            Trusted by farmers across India and 80+ countries for precision,
            power, and sustainable solutions.
          </p>
        </div>

         <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>Tractors</li>
            <li>Implements</li>
            <li>Inquiry</li>
            <li>Blogs</li>
            <li>Find A Dealer</li>
            <li>Become A Dealer</li>
            <li>Become A Supplier</li>
          </ul>
        </div>

         <div className="footer-column">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Awards & Certifications</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Domestic Network</li>
            <li>International Network</li>
            <li>Contact Us</li>
          </ul>
        </div>

         <div className="footer-column">
          <h4 className="footer-heading">Get In Touch With Captain</h4>
          <p className="footer-toll-label">Toll Free Number</p>
          <p className="footer-toll">1800 212 2129</p>
          <p className="footer-follow">Follow Us On</p>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/facebook-icons.png" alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedinnn.png" alt="LinkedIn" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/youtube-icons.png" alt="YouTube" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/twittericons.png" alt="Twitter" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/instagramicons.png" alt="Instagram" />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/pinteresticons.png" alt="Pinterest" />
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/whatsappicons.png" alt="WhatsApp" />
              </a>
            </div>
        </div>
      </div>

       <div className="footer-bottom">
         <p>Copyright © 2018-25 Captain Tractors Pvt. Ltd. All rights Reserved</p>
        <div className="footer-policy">
          <a 
            href="EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiA
            BDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHE
            EUYPdIBBzI1NWowajGoAgCwAgA">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="https://captaintractors.com/">Terms Of Use</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
