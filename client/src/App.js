import React from "react";

import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const { state, dispatch } = useApplicationData();

  const userList = state.users.map(user => (
    <li>
      {user.first_name} {user.last_name} {user.email}
    </li>
  ));

  return (
    <div className="App">
      <h1>Users</h1>

      {state.loading && <h1>Loading...</h1>}

      <ul>{!state.loading && userList}</ul>
    </div>
  );
}

export default App;
