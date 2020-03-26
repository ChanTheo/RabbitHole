import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import dataReducer, { SET_USERS } from "../reducers/dataReducer";

const useApplicationData = () => {
  const [state, setState] = useState({
    user: null,
    loading: true,
    expressions: null,
    userMood: null,
    watchLogID: null,


  });

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "/users"
  //   }).then(({ data }) => {
  //     // update the state with the result
  //     setState({ type: SET_USERS, users: data });
  //   });
  // }, []);

  function register(email, username, password) {

    return axios({
      method: "POST",
      url: "api/users/register",
      data: {
        email,
        username,
        password
      }
    })
      .then(userInfo => {
        const id = userInfo.data.id
        const user_name = userInfo.data.username
        const email = userInfo.data.email
        const user = {
          id,
          user_name,
          email
        }
        console.log(user)
        setState({ ...state, user: user })
      })
      .catch(error => console.log(error))

  }



  function login(email, password) {
    return axios({
        method: "POST",
        url: "/api/users/login",
        data: {email, password}
      }).then(response => {
        const id = response.data.id
        const user_name = response.data.username
        const email = response.data.email
        const user = {
          id,
          user_name,
          email
        }
        if (user) {
          setState({ ...state, user: user })
        } else {
          // send an error 
        }

  })
}


  function logout() {
    axios.post({
      url: "/api/users/logout"
    })
    setState({ ...state, user: null })

  }

  function setExpressions(
    surprised_percent,
    disgusted_percent,
    neutral_percent,
    sad_percent,
    fearful_percent,
    angry_percent,
    happy_percent) {

    const expressionsPercentage = {
      surprised_percent,
      disgusted_percent,
      neutral_percent,
      sad_percent,
      fearful_percent,
      angry_percent,
      happy_percent
    }
    console.log("in set expressions", expressionsPercentage)
    setState({ ...state, expressions: expressionsPercentage })

  }

  function setUserMood (mood) {
    setState({...state, userMood: mood})
  }

  function setWatchLogID (ID) {
    setState({...state, watchLogID: ID})
  }

  return {
    state,
    setState,
    register,
    login,
    logout,
    setExpressions,
    setUserMood,
    setWatchLogID,
  };
};

export default useApplicationData;
