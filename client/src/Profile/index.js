import React from "react";
import axios from "axios"
// will need to figure out how to limit the number of entries
// will need to get info from the data base might need to use useEffect or Promise.all (or both)
export default function Profile(props) {

  const renderHistory = (userID) => {
    return axios({
      method: "GET",
      url: ""
    }).then(result => console.log(result))
  }
  
  return (
    <section className="profile_container">
      <h1>  </h1>
      <div className="profile_history">

      </div>
      <div className="profile_watch_logs">

      </div>

    </section>
  )
}