import React from "react";
import "./Beer.css";

function Beer({ beer }) {
  return (
    <div className="beer-card">
      <img className="beer-img" src={beer.image_url}></img>
      <div className="beer-text">
        <p>{beer.name}</p>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default Beer;
