import React from 'react'
import { Link } from 'react-router-dom';
import logo from "./logo.svg";

export const Navigation = () => {
    
  return (
    <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light p-4">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/scotties">
                  <h4 className="text-black h4">Home</h4>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/scotties/about">
                  <h4 className="text-black h4">About</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/scotties/blog">
                  <h4 className="text-black h4">Blog</h4>
                </a>
              </li>
              <li className="nav-item">
                <a href="/scotties/contact" className="nav-link" >
                  <h4 className="text-black h4">Contact</h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/scotties">
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
  )
}
