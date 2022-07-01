import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "./logo.svg";

export const Navigation = () => {
  let history = useHistory;
  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-light p-4">
        <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link tm-nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link tm-nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link tm-nav-link" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link tm-nav-link" href="/contact">
                      Contact
                    </a>
                  </li>
                 
                </ul>
        </div>
      </div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            width="30"
            height="30"
            alt="logo"
          />
          Scotties
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};
