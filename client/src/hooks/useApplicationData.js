import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import dataReducer, { SET_USERS } from "../reducers/dataReducer";

const useApplicationData = () => {
  const [state, setState] = useState({
    user: null, // user object
    loading: true,
    expressions: null,
    userMood: null
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
      url: "/users/register",
      data: {
        email,
        username,
        password
      }
    })
      .then(userInfo => {
        const id = userInfo.data.id;
        const user_name = userInfo.data.user_name;
        const email = userInfo.data.email;

        const user = {
          id,
          user_name,
          email
        };
        setState({ ...state, user: user });
      })
      .catch(error => console.log(error));
  }

  function login(email, password) {
    return axios({
      method: "GET",
      url: "/users",
      data: { email, password }
    }).then(response => {
      const users = response.data;
      const user = users.find(
        user => user.password === password && user.email === email
      );
      if (user) {
        setState({ ...state, user: user });
      }
    });
  }

  function logout() {
    axios.get({
      url: "users/logout"
    });
    setState({ ...state, user: null });
  }

  function setExpressions(
    surprised_percent,
    disgusted_percent,
    neutral_percent,
    sad_percent,
    fearful_percent,
    angry_percent,
    happy_percent
  ) {
    const expressionsPercentage = {
      surprised_percent,
      disgusted_percent,
      neutral_percent,
      sad_percent,
      fearful_percent,
      angry_percent,
      happy_percent
    };
    setState({ ...state, expressions: expressionsPercentage });
  }

  function setUserMood(mood) {
    setState({ ...state, userMood: mood });
  }

  return {
    state,
    setState,
    register,
    login,
    logout,
    setExpressions,
    setUserMood
  };
};

export default useApplicationData;
