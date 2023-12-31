import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

const CatCard = ({ item }) => {
  return (
    <Link to="/gig/123">
      <div className="catCard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <div className="title">{item.title}</div>
      </div>
    </Link>
  );
};

export default CatCard;
