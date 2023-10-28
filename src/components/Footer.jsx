import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
      <h3 className='bold'>About Us</h3>
        
      </div>
      <div className="footer-section">
      <h3 className='bold'>Help</h3>
        <p>If you have any questions, please contact us:</p>
        <p>yurta.kz.@gmail.com</p>
      </div>
      <div className="footer-section">
      <h3 className='bold'>Contacts</h3>
        <address>
          <p>Location: Almaty</p>
          <p>Number: +7 (705) 555-5555</p>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
