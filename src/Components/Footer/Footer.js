import React from "react";
import arrow from "../../images/button_arrow.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
        <h2>Running out of products?</h2>
        <p>
          Lorem ipsum dolor sit amet consect turadispicing elit. Integer
          aliquet.
        </p>
        <button className="button__buy"><span>Buy now</span><img src={arrow} alt="arrow" className="buttonArrow" /></button>
      </div>
      <div className="footer__column">
        <h2>Bod•ē Trainer in your pocket</h2>
        <p>
          Lorem ipsum dolor sit amet consect turadispicing elit. Integer
          aliquet.
        </p>
        <button className="button__apple"><span>iOS</span><img src={arrow} alt="arrow" className="buttonArrow" /></button>
        <button className="button__android"><span>Android</span><img src={arrow} alt="arrow" className="buttonArrow" /></button>
      </div>
      <div className="footer__column">
        <h2>Frequently Asked Questions</h2>
        <p>
          Lorem ipsum dolor sit amet consect turadispicing elit. Integer
          aliquet.
        </p>
        <button className="button__buy"><span>Read FAQs</span><img src={arrow} alt="arrow" className="buttonArrow" /></button>
      </div>
    </footer>
  );
};

export default Footer;
