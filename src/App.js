import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ContactPage } from "./components/contact/ContactPage";
import Error from "./Error";
import { Navigation } from "./common/Nav/Navigation";
import AboutPage from "./components/about/AboutPage";
import Home, { ConnectedDashboard } from "./components/home/Home";
import React, { Component } from "react";
// import LoginPage from "./common/loginpage/LoginPage";
// import SignUpPage from "./common/signup/SignUpPage";


export default class App extends Component {
 
  render() {
    return (
      <Router> 
      <div className="App">
        <Navigation />

        <Switch>
        <Route exact path="/" component={Home} />  
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />

        <Route component={Error} />
   
        </Switch>
     
      </div>
      </Router>
    );
  }
}

