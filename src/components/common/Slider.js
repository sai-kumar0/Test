import React, { useContext, useState, useEffect } from "react";
import DataContext from "./DataContext";
import "../../styles/style.css";
import { Link } from "react-router-dom";

function Slider() {
  const data = useContext(DataContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data && data.length) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [data]);

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="slider">
      {data.map((show, index) => {
        const imageUrl =
          (show.show.image && show.show.image.original) ||
          (show.show.image && show.show.image.medium);

        const itemStyle = {
          backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        };

        return (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
            style={itemStyle}
          >
            <div className="details">
              <div className="title">
                <h1>{show.show.name}</h1>
              </div>
              <div className="tags">
                <p>
                  <span>{show.show.language}</span> |{" "}
                  <span>
                    {(show.show.premiered && show.show.premiered.slice(0, 4)) ||
                      2018}
                  </span>{" "}
                  |{" "}
                  <span>
                    {(show.show.network && show.show.network.country.code) ||
                      "US"}
                  </span>{" "}
                  |{" "}
                  <span>
                    {(show.show.rating && show.show.rating.average) || 8.6}
                  </span>
                </p>
              </div>
              <p className="text-start overview">{show.show.summary}</p>
              <div className="buttons d-flex column-gap-1">
                <button className="btn btn-primary w-50">
                  {show.show.schedule.days || "Sunday"}{" "}
                  {show.show.schedule.time || "09:00"}
                </button>
                <Link to={`/show/${show.show.id}`} className="w-50">
                  <button className="btn btn-primary w-100">Book now</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
