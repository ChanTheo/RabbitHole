import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import dataReducer, { SET_USERS } from "../reducers/dataReducer";

const useApplicationData = () => {
  const [state, setState] = useState({
    user: null,
    loading: true,
    

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
        const id = userInfo.data.id
        const user_name = userInfo.data.user_name
        const email = userInfo.data.email

        const user = {
          id,
          user_name,
          email
        }
        setState({ ...state, user: user })
      })
      .catch(error => console.log(error))

  }



  function login(email, password) {
    return axios({
      method: "GET",
      url: "/users"
    }).then(response => {
      const users = response.data;
      const user = users.find(user => user.password === password && user.email === email)
      console.log("login", user)
      if(user){
        setState({ ...state, user: user })
      }
      // use .find to find the user where email === password 

    })
  }

  function logout(user){
    // delete cookie 
    setState({...state, user: null})

  }

  return {
    state,
    setState,
    register,
    login,
    logout
  };
};

export default useApplicationData;
