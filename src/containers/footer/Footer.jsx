import React from 'react';
import "./footer.css";
import logoUrl from "../../assets/web.jpeg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <div className="footer-header">
          Do you want to step into the future and solve land conflicts?
        </div>
      </div>
      <div className="gpt3__footer-button">
        <p>Join Us</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logoUrl} alt="gpt3 logo" />
          <p>All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Kampala, TNV</p>
          <p>085-132567</p>
          <p>info@landGrubby.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        ©2024 LNG. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
