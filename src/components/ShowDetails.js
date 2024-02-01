// ShowDetails.js
import React, { createContext } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./common/DataContext";
import { Link } from "react-router-dom";

function ShowDetails() {
  const { id } = useParams();
  const data = useContext(DataContext);
  const details =
    data && data.filter((show) => show.show.id === parseFloat(id, 10));
  const ImageUrl = details && details[0].show.image.original;

  return (
    <div className="showDetails col-12 d-flex flex-row">
      <div className="col-4 p-5">
        <img src={ImageUrl} className="w-100" />
      </div>
      <div className="showInfo col-6 p-5">
        <div className="name">
          <h1>{details && details[0].show.name}</h1>
        </div>
        <div className="properties">
          <p>
            Language :{" "}
            <span>{(details && details[0].show.language) || "English"}</span>
          </p>
          <p>
            Run time :{" "}
            <span>{(details && details[0].show.runtime) || "50"}</span>
          </p>
          <p>
            Premiered :{" "}
            <span>{(details && details[0].show.premiered) || "2018"}</span>
          </p>
          <p>
            Schedule :{" "}
            <span style={{ fontWeight: "600" }}>
              {(details && details[0].show.schedule.days) || "Monday"}{" "}
              {(details && details[0].show.schedule.time) || "09:00"}
            </span>
          </p>
          <p>
            Rating :{" "}
            <span>{(details && details[0].show.rating.average) || "9.8"}</span>
          </p>
          <p>
            Genre : <span>{details && details[0].show.genres[0]}</span>
            {"  "}
            <span>{(details && details[0].show.genres[1]) || "none"}</span>
          </p>
          <p className="summary">
            Summary : <span>{details && details[0].show.summary}</span>
          </p>
        </div>
        <div className="pt-5 mt-5 book">
          <Link to={`/show/${id}/bookings`}>
            <button className="btn btn-primary w-100">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;
