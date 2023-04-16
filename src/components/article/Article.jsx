import React from "react";
import "./article.css";


function Article(props) {  
    const model = props.model;
  return (
    <div>
      <div className="foodie-gallary-article-card">
        <img
          src={model.imagePath}
          alt="blog01"
          className="foodie-gallary-article-card-img"
        />
        <div className="foodie-gallary-article-card-container-content">
          <div className="foodie-gallary-article-card-text">
            {model.title}
          </div>
          <div className="foodie-gallary-article-card-textDes">
           {model.description}
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
