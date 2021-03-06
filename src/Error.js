import React from 'react'
import logo from "./logo.svg";

const Error = () => {
  return (
    <div>  
        <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <div className="page-wrap d-flex flex-row align-items-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                <span className="display-1 d-block">404</span>
                <div className="mb-4 lead">The page you are looking for was not found.</div>
            </div>
        </div>
    </div>
</div>
  </header></div>
  )
}

export default Error