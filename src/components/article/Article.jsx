import React from "react";
import "./article.css";
import blog01 from "../../asset/blog01.png";
function Article() {
  return (
    <div>
      <div className="foodie-gallary-article-card">
        <img
          src={blog01}
          alt="blog01"
          className="foodie-gallary-article-card-img"
        />
        <div className="foodie-gallary-article-card-container-content">
          <div className="foodie-gallary-article-card-text">
            Grilled Tomatoes at Home
          </div>
          <div className="foodie-gallary-article-card-textDes">
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard...
          </div>
          <button className="foodie-gallary-article-card-button">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
