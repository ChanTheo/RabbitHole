import React from "react";

// Importing components
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Button from "../Button";
import "./Header.scss";
// npm install react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="top">
      <div className="title-rabbithole">
        <img src={require("../img/logo2.png")} />
        <h2>
          {" "}
          <Link to="/" className="navbar-title">
            {" "}
            Rabbit Hole{" "}
          </Link>{" "}
        </h2>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        {props.user && (
          <div className="navbar loggedin">
            <Link to="/users/profile/:id" className="nav-item nav-link" >
              My Profile
            </Link>
            <Link
              to="/"
              className="nav-item nav-link"
              href="/urls/new"
              onClick={props.logout}
            >
              Logout
            </Link>
          </div>
        )}
        {!props.user && (
          <div className="navbar loggedout">
            <Link to="/login" className="nav-item nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-item nav-link">
              | Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
