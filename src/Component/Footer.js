import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer className="uc-footer">
      <div className="uc-footer-grid">
        <div className="uc-footer-logo">
          <img src="/footer1.webp" alt="Urban Company Logo" loading="lazy" />
        </div>
        <div className="uc-footer-col">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="/investors">Investor Relations</a></li>
            <li><a href="/terms">Terms & conditions</a></li>
            <li><a href="/privacy">Privacy policy</a></li>
            <li><a href="/anti-discrimination">Anti-discrimination policy</a></li>
            <li><a href="/esg">ESG Impact</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div className="uc-footer-col">
          <h3>For customers</h3>
          <ul>
            <li><a href="/reviews">UC reviews</a></li>
            <li><a href="/categories">Categories near you</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>
        <div className="uc-footer-col">
          <h3>For professionals</h3>
          <ul>
            <li><a href="/register">Register as a professional</a></li>
          </ul>
          <h3 className="uc-footer-social-title">Social links</h3>
          <div className="uc-footer-social">
            <Twitter className="uc-icon twitter" aria-label="Twitter" />
            <Facebook className="uc-icon facebook" aria-label="Facebook" />
            <Instagram className="uc-icon instagram" aria-label="Instagram" />
            <Linkedin className="uc-icon linkedin" aria-label="LinkedIn" />
          </div>
          <div className="uc-footer-apps">
            <img src="/footer2.webp" alt="Download on App Store" loading="lazy" />
            <img src="/footer3.webp" alt="Get it on Google Play" loading="lazy" />
          </div>
          <h3 className="uc-footer-social-title">Subscribe</h3>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Your email"
            aria-label="Email for newsletter"
          />
          <button className="newsletter-btn">Subscribe</button>
        </div>
      </div>
      <div className="uc-footer-bottom">
        <p>* As on December 31, 2024</p>
        <p className="uc-footer-copy">
          © 2025 Urban Company Ltd. (formerly known as UrbanClap Technologies India Limited) <br />
          All rights reserved. | CIN: U74140DL2014PTC274413
        </p>
      </div>
    </footer>
  );
};

export default Footer;