import React, { Component } from "react";
import { connect } from "react-redux";
import './home.css'
export class Home extends Component {
  render() {
    return (
      <section id="gallery" className="tm-section-pad-top">
        <div className="container tm-container-gallery">
          <div className="row">
            <div className="text-center col-12">
              <div className="mx-auto tm-gallery-container">
                <div className="grid tm-gallery">
                 
                        <div className="card">
                      <div className="row">
                        <div className="col-12">
                          <div className="mx-auto tm-gallery-container">
                            <div className="grid tm-gallery">
                              <a href="/#" className="nav-link tm-nav-link">
                                <img
                                  src="img/gallery-tn-01.jpg"
                                  alt="yoga_warrior"
                                  className="img-fluid card-img-top"
                                />
                                <h2 className="text-black card-header">
                                
                                  <span className="card-body"></span>
                                </h2>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.rootReducer.users });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
