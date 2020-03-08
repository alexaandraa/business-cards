import React from "react";
import "./Card.css";

export const Card = ({ name, title, website }) => (
  <div className="card">
    <div className="name">{name}</div>
    <div className="title">{title}</div>
    {website ? (
      <a href="https://savitri-avtar.jmagrippis.now.sh/" className="link">
        {website}
      </a>
    ) : null}
    <a href="https://www.instagram.com/savitriavtar/" className="link">
      @savitriavtar
    </a>
  </div>
);

export default Card;
