import React from "react";
import logo from "../../assets/ticket_1683743.png";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg mt-2"
      style={{ backgroundColor: "#0f1014" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="#">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-center me-2"
          />
          cineHub
        </a>

        <button
          className="navbar-toggler toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>

        <div
          className="collapse navbar-collapse me-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex column-gap-md-3 column-gap-lg-4 ms-auto me-5">
            <form className="d-flex me-sm-4">
              <div className="input-group input-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <button className="btn" type="button" id="button-addon2">
                  <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                </button>
              </div>
            </form>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Theatres
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>
            <button className="bg-primary px-3 rounded border-0 button">
              Login
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
