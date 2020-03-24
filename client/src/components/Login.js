import React, { useState, Fragment } from "react";
import { Redirect } from 'react-router-dom'

export default function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirectHome, setRedirectHome] = useState(false);

  const handleLogin = function (event) {
    event.preventDefault()
    props.login(email, password)
      .then(data => { setRedirectHome(true) })
    setEmail("");
    setPassword("");

  }

  return (
    <Fragment>
      {redirectHome && <Redirect to="/" />}
      <main>
        <form className="login-form"
          onSubmit={handleLogin}
        >
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <input type="submit" value="Login" />
        </form>
      </main>
    </Fragment>
  )
}