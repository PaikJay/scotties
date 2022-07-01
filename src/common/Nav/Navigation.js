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
                    <h4 className="text-black h4">Home</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link tm-nav-link" href="/about">
                    <h4 className="text-black h4">About</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link tm-nav-link" href="/blog">
                    <h4 className="text-black h4">Blog</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link tm-nav-link" href="/contact">
                    <h4 className="text-black h4">Contact</h4>
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
