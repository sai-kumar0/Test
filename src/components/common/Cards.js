import React from "react";
import { useContext } from "react";
import DataContext from "./DataContext";
import Card from "./Card";

function Cards() {
  const data = useContext(DataContext);
  return (
    <div className="cards pt-5 pb-5">
      <h3 className="ms-5 mb-4">Most Watched</h3>
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        {data && data.map((show, index) => <Card show={show} index={index} />)}
      </div>
    </div>
  );
}

export default Cards;
