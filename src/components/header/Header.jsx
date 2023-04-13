import React from "react";
import "./header.css";
import header01 from "../../asset/header01.png";
import header02 from "../../asset/header02.png";
import headerSvg from "../../asset/headerSvg.svg"

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
          <button className="foodie-leftHeader-container-explorebtn" >
            Explore Now
          </button>

          </div>
         
        </div>

        <div className="foodie-rightHeader">
        <div className="foodie-rightHeader-container">
        <div className="foodie-rightHeader-container-img">
          <img src={header02} alt="header02" />
          </div>
        </div>
    
        </div>
      </div>
    </>
  );
};

export default Header;
