import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as userActions  from "../redux/actions/userActions";

export const LoginPage = (authenticateUser, authenticated, props) => {
  const users = useSelector(state => state.users)
  const [emailAddress, setEmail] = useState("");
  const [password, setPassword] = useState("")

  useEffect(() => {
    console.info("First efffect login calls" + props );
    // navigator.geolocation.getCurrentPosition(function(position) {
    //        console.info("Latitude is :", position.coords.latitude);
    //       console.info("Longitude is :", position.coords.longitude);
    //      });
    userActions.loadUsers()
    return () => {
      console.info("second efffect login calls");
      userActions.requestAuthenticateUser()
    };
  }, [authenticated]);
  return (
 
    <div className="text-center">
      <div className="card-body col-md-4 text-center">

        <div className="card-text">
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="username"
                name="username"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-sm"
                placeholder="password" 
                name="password" 

              ></input>
            </div>
            <button type="submit" disabled={authenticated === `PROCESSING`} className="btn btn-primary btn-block form-control">
              Login
            </button>
          </form>
        </div>        
        <p>
            <Link to="signup">
                Don't have an account? Sign up.
            </Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (session) => ({
  authenticatd: session.authenticatd
});

const mapDispatchToProps = (dispatch) => {
  debugger
 return { 
    authenticateUser(e) {
        e.preventDefault()
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
      console.info("login new user", username, password);
     dispatch(userActions.requestAuthenticateUser(username,password));
    // dispatch(userActions.loadUsers())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
