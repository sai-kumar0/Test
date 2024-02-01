import React from "react";
import { useContext, useState } from "react";
import DataContext from "./common/DataContext";
import { useParams } from "react-router-dom";

function Bookings() {
  const data = useContext(DataContext);
  const { id } = useParams();
  const details =
    data && data.filter((show) => show.show.id === parseFloat(id, 10));
  const ImageUrl = details && details[0].show.image.original;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    paymentMode: "creditCard",
    gender: "male",
    numberOfTickets: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, e.g., send to server
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bookings pt-5 d-flex flex-row">
      <div className="showDetails col-3 d-flex flex-column">
        <div className="col-4 d-flex justify-content-around w-100">
          <img src={ImageUrl} className="w-50" />
        </div>
        <div className="showInfo p-5 col-12">
          <div className="name w-100 text-center">
            <h1 style={{ fontSize: "40px" }}>
              {details && details[0].show.name}
            </h1>
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
              <span>
                {(details && details[0].show.rating.average) || "9.8"}
              </span>
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
        </div>
      </div>
      <div className="userDetails ps-5 col-8 d-flex flex-column">
        <h1 className="text-center ">Share Your Details</h1>
        <form
          onSubmit={handleSubmit}
          className=" d-flex flex-column justify-content-center align-content-center mt-5"
        >
          <div className="row mb-4">
            <div className="col">
              <label htmlFor="name" className="mb-2">
                First name :
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="name" className="mb-2">
                Last name :
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <label htmlFor="name" className="mb-2">
                Email :
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="spamchary934@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <label htmlFor="name" className="mb-2">
                Phone number :
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="93XXXXXXXX"
                name="nu,ber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="name" className="mb-2">
                No of tickets
              </label>
              <input
                className="form-control"
                type="number"
                name="numberOfTickets"
                value={formData.numberOfTickets}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
          </div>

          <div className="w-100 mt-5 pt-5">
            <button className="btn btn-primary w-100">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Bookings;
