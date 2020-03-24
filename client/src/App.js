import React, { useState, useEffect } from "react";

// npm install react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as faceapi from "face-api.js"; // npm i face-api.js
import axios from "axios";

import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";

// Importing components
import Header from "./Header/index";
import Home from "./Header/Home";
import Login from "./Header/Login";
import Logout from "./Header/Logout";
import Register from "./Header/Register";
import Webcam from "./Webcam";
// import Button from "../Button"
import PlayVideo from "./PlayVideo";
import Bargraph from "./Bargraph/index"
import Profile from "./Profile/index"
import Graph from "./Graph/index"

function App() {
  const { state, setState, register, login, logout, setExpressions, setUserMood } = useApplicationData();

  const testRoute = e => {
    e.preventDefault();
    return axios({
      method: "GET",
      url: "api/videos/"
    }).then(data => console.log(data));
  };

  return (
    <Router>
      <div className="App">
        <main className="layout">
          <Header
            user={state.user}
            login={login}
            register={register}
            logout={logout}
          />

          <Switch>
            <Route path="/login">
              <Login login={login} />
            </Route>
            <Route path="/register">
              <Register register={register} />
            </Route>
            <Route path="/logout"></Route>
            <Route path="/playvideo">
              <Webcam user={state.user} />
              <PlayVideo />
            </Route>
            <Route path="/webcam">
              <Webcam user={state.user} />
            </Route>
            <Route path="/">
              <Home logout={logout} user={state.user} />
              {state.userMood &&
              <PlayVideo 
              user={state.user} 
              setUserMood={setUserMood}
              mood={state.userMood}
              />}
              <Webcam 
              user={state.user} 
              setExpressions={setExpressions}
              setUserMood={setUserMood}
              mood={state.userMood}
              />
              {state.expressions && 
              <Graph
              expressions={state.expressions}
              />}
            </Route>
            <Route path="/users/:id/profile">
              <Profile />

            </Route>

          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
