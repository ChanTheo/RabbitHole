import React, { useState, useEffect } from "react";

// npm install react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import * as faceapi from "face-api.js"; // npm i face-api.js


import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";

// Importing components
import Header from "./Header/index"
import Home from "./Header/Home"
import Login from "./Header/Login"
import Logout from "./Header/Logout"
import Register from "./Header/Register"
import Webcam from "./Webcam"
// import Button from "../Button"

function App() {
  const { state, setState, register, login, logout } = useApplicationData();

  //  This loads the models 
  // useEffect(() => {
  //   faceapi.nets.faceLandmark68Net
  //     .loadFromUri("/models")
  //     .then(error => console.log("FaceLandmark Model Loaded", error));
  //   faceapi.nets.ssdMobilenetv1
  //     .loadFromUri("/models")
  //     .then(error => console.log("ssdMobilenetv1 Model Loaded", error));
  //   faceapi.nets.faceExpressionNet
  //     .loadFromUri("/models")
  //     .then(error => console.log("FaceExpression Model Loaded", error));
  // }, []);



  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login login={login} />
        </Route>
        <Route path="/register">
          <Register register={register} />

        </Route>
        <Route path="/Logout">
          {/* <Logout /> */}
        </Route>
        <Route path="/">
          <Home 
          logout={logout} 
          user={state.user}
          />
        </Route>
      </Switch>
    
    <main className="layout">
      <div className="App">
        <h1> </h1>
        <Header
          user={state.user}
          login={login}
          register={register}
          logout={logout}
        />
        <Webcam
          user={state.user}
        />
      </div>

    </main>
      
    </Router>

  );
}

export default App;

