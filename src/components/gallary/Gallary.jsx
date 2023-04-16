import React, { useState } from "react";
import "./gallary.css";
import Article from "../article/Article";
import pager1 from "../../asset/pager1.svg";
import pager2 from "../../asset/pager2.svg";
import { ArticleModel } from "../../model/ArticleModel";

const articleModels = [
  new ArticleModel(
    "Grilled  Tomatoes at Home",
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    "../../asset/blog01.png"
  ),
  new ArticleModel(
    "Snacks for Travel",
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    "../../asset/blog02.png"
  ),
  new ArticleModel(
    "Post-workout Recipes",
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    "../../asset/blog03.png"
  ),
  new ArticleModel(
    "How To Grill Corn",
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    "../../asset/blog04.png"
  ),
  new ArticleModel(
    "Crunchwrap Supreme",
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    "../../asset/blog05.png"
  ),
  new ArticleModel(
    "Broccoli Cheese Soup",
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    "../../asset/blog06.png"
  ),
];

const Gallary = (props) => {
  const [currentWin, setCurrentWin] = useState([0, 1, 2]);
  return (
    <div className="foodie-gallary">
      <div className="foodie-gallary-title">Latest Articles</div>
      <div className="foodie-gallary-container">
        {currentWin.map((value) => {
          return <Article model={articleModels[value]} />;
        })}
      </div>
      <div className="foodie-gallary-containerpager">
        <button>
          <img
            src={pager1}
            alt="pager1"
            onClick={() => {
              setCurrentWin(0, 1, 2);
            }}
          />
        </button>
        <p>1/2</p>
        <button>
          <img
            src={pager2}
            alt="pager2"
            onClick={() => {
              setCurrentWin(3, 4, 5);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Gallary;
