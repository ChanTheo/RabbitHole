import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
import "./Register.scss";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    props
      .register(email, username, password)
      .then(response => setRedirectHome(true));
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <Fragment>
      {redirectHome && <Redirect to="/" />}
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <div className="register-title">Registration</div>
          <div className="empty"></div>
          <div className="register-email">
            Email:
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="empty"></div>
          <div className="register-username">
            Username:
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="empty"></div>
          <div className="register-password">
            Password:
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="empty"></div>
          <div className="register-submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Fragment>
  );
}
