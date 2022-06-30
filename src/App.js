import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ContactPage } from "./components/contact/ContactPage";
import Error from "./Error";
import { Navigation } from "./common/Nav/Navigation";
import AboutPage from "./components/about/AboutPage";
import React, { Component } from "react";

export default class App extends Component {
 
  render() {
    return (
      <Router>
      <div className="App">
        <Navigation />

        <Switch>

          <Route path="/contact"  component={() => <ContactPage /> } />
          <Route path="/about" component={() => <AboutPage />} />
          <Route component={Error} />
   
        </Switch>
     
      </div>
      </Router>
    );
  }
}

