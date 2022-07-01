import React, { Component } from "react";
import { connect } from "react-redux";
export class Home extends Component {
  render() {
    return (
      <section id="gallery" className="tm-section-pad-top">
        <div className="container tm-container-gallery">
          <div className="row">
            <div className="text-center col-12">
              <div className="mx-auto tm-gallery-container">
                <div className="grid tm-gallery">
                  {this.props.tasks.map((task) => {
                    return (
                        <div className="card" key={task.id}>
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
                                <h2 className="text-black card-header" key={task.owner}>
                                  {task.name}
                                  <span className="card-body">{task.group}</span>
                                </h2>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ tasks: state.rootReducer.tasks });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
