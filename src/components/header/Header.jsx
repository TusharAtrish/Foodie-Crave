import React from "react";
import "./header.css";
import header01 from "../../asset/header01.png";

const Header = () => {
  return (
    <>
      <div className="foodie-header">
        <div className="foodie-leftHeader">
          <div className="foodie-leftHeader-img">
            <img src={header01} alt="header01" />
          </div>
          <div className="foodie-leftHeader-container">
            <div className="foodie-leftHeader-container-text1"> <p>Discover the Best Food and Drinks</p></div>
            <div className="foodie-leftHeader-container-text2">
            <p>Naturally made Healthcare Products for the
               better care & support of your body</p>
          </div>
          <div className="foodie-leftHeader-container-explorebtn" >
            <txt> Explore Now</txt>
          </div>

          </div>
         
        </div>

        <div className="foodie-rightHeader"></div>
      </div>
    </>
  );
};

export default Header;
