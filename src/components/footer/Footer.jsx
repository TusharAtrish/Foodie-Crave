import React from "react";
import "./footer.css";
import footer01 from "../../asset/footer01.png";
import fb from '../../asset/fb.svg';
import insta from '../../asset/insta.svg'
import twitter from '../../asset/twitter.svg'

const Footer = () => {
  return (
    
    <div className="foodie-footer">
      <div className="foodie-footer-container-left">
        <img src={footer01} alt="footer01" className="foodie-footer-container-left-img"/>
      </div>
      <div className="foodie-footer-container-right">
        <div className="foodie-footer-container-right-contact">
          <p>Contact Us</p>
          <p1>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p1>
          <p1>example2020@gmail.com</p1>
          <p1>(904) 443-0343</p1>
        </div>
        <div className="foodie-footer-container-right-more">
          <p >More</p>
          <p1 >About Us</p1>
          <p1>Products</p1>
          <p1>Career</p1>
          <p1>Contact Us</p1>
        </div>
        <div className="foodie-footer-container-right-social">
          <p >Social Links</p>

          <div className="foodie-footer-container-right-social-img">
          <img src={insta} alt="insta" />  
          <img src={twitter} alt="twitter" />
          <img src={fb} alt="fb" />          
          </div>
          <div className="footer-end-text">
            <p1 >© 2022 Food Truck Example</p1>
          </div>
    
          
        </div>
      </div>
    </div>
   
    
    
  );
};

export default Footer;
