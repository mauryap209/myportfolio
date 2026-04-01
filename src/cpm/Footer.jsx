import React, { useState } from 'react';
// import './style.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3 className="footer-title">Pankaj_Maurya</h3>
              <p className="footer-description">
                Building amazing digital experiences with cutting-edge technology and innovative solutions.
              </p>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Prayagraj, Uttar Pradesh</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+91 8935042258</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>mauryap8935@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/login" className="footer-link">Login</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="/services" className="footer-link">Web Development</a></li>
              <li><a href="/services" className="footer-link">Mobile Apps</a></li>
              <li><a href="/services" className="footer-link">UI/UX Design</a></li>
              <li><a href="/services" className="footer-link">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">Stay Updated</h3>
            <p className="footer-description">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            {isSubscribed && (
              <p className="success-message">Thank you for subscribing!</p>
            )}
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3 className="social-title">Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 7.996.014 6.797.067 5.609.12 4.757.309 4.018.562c-.775.266-1.434.611-2.093 1.27C.266 2.501 0 3.16 0 3.935c0 .775.266 1.434.925 2.093.659.659 1.318 1.004 2.093 1.27.739.253 1.591.442 2.779.495C7.996 7.986 8.396 8 12.017 8s4.021-.014 5.22-.067c1.188-.053 2.04-.242 2.779-.495.775-.266 1.434-.611 2.093-1.27.659-.659 1.004-1.318 1.27-2.093 0-.775-.266-1.434-.925-2.093-.659-.659-1.318-1.004-2.093-1.27-.739-.253-1.591-.442-2.779-.495C16.038.014 15.638 0 12.017 0zm0 2.163c3.532 0 3.958.013 5.357.066 1.303.049 2.026.275 2.512.459.522.196.903.43 1.298.825.395.395.629.776.825 1.298.184.486.41 1.209.459 2.512.053 1.399.066 1.825.066 5.357s-.013 3.958-.066 5.357c-.049 1.303-.275 2.026-.459 2.512-.196.522-.43.903-.825 1.298-.395.395-.776.629-1.298.825-.486.184-1.209.41-2.512.459-1.399.053-1.825.066-5.357.066s-3.958-.013-5.357-.066c-1.303-.049-2.026-.275-2.512-.459-.522-.196-.903-.43-1.298-.825-.395-.395-.629-.776-.825-1.298-.184-.486-.41-1.209-.459-2.512C2.071 15.975 2.045 15.549 2.045 12.017s.026-3.958.066-5.357c.049-1.303.275-2.026.459-2.512.196-.522.43-.903.825-1.298.395-.395.776-.629 1.298-.825.486-.184 1.209-.41 2.512-.459 1.399-.053 1.825-.066 5.357-.066zm0 3.836c-3.604 0-6.522 2.918-6.522 6.522s2.918 6.522 6.522 6.522 6.522-2.918 6.522-6.522-2.918-6.522-6.522-6.522zm0 10.761c-2.342 0-4.239-1.897-4.239-4.239s1.897-4.239 4.239-4.239 4.239 1.897 4.239 4.239-1.897 4.239-4.239 4.239zm8.406-10.761c0 .995-.807 1.802-1.802 1.802s-1.802-.807-1.802-1.802.807-1.802 1.802-1.802 1.802.807 1.802 1.802z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">&copy; 2024 Pankaj Maurya. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#" className="bottom-link">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#" className="bottom-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;