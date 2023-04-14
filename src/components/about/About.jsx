import React from "react";
import "./about.css";
import about01 from "../../asset/about01.png";

const About = () => {
  return (
    <div className="foodie-about">
      <div className="foodie-about-containerLeft">
        <img src={about01} alt="about01" className="foodie-about-containerLeft-image" />
      </div>

      <div className="foodie-about-containerRight">
        <div className="foodie-about-containerRight-text">About Us</div>
        <div className="foodie-about-containerRight-desciption"><p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.</p>
        </div>
        <button className="foodie-about-containerRight-button">
            Read More
        </button>
      </div>
    </div>
  );
};

export default About;
