import React from "react";
import { Link } from "react-router-dom";

function Card({ show, index }) {
  const imageUrl =
    (show.show.image && show.show.image.original) ||
    (show.show.image && show.show.image.medium);
  return (
    <div className="card" key={index}>
      <Link to={`/show/${show.show.id}`}>
        <img src={imageUrl} alt={show.show.name} />
      </Link>
    </div>
  );
}

export default Card;
