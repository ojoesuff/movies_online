import React, { useState, createContext, useEffect } from "react";
import { login, signup, getUserFromToken } from "../api/tmdb";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  useEffect(() => {
    if(authToken) {
      getUserFromToken(authToken).then(res => {
        if(res.username) {
          setUserName(res.username)
          setIsAuthenticated(true)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
    } 
    return result
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result);
    return (result)
  };

  const signout = () => {
    setUserName("")
    localStorage.removeItem("token")
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated : isAuthenticated,
        authenticate : authenticate,
        register : register,
        signout : signout,
        userName : userName
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;