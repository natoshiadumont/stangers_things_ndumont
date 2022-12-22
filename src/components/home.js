import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return(
    <div className="content-container">
      <h1>Welcome to Stranger's Things!</h1>
      <form id="login-form">
      <label htmlFor="username" >Username:</label> 
      <input type="text" placeholder="ex. username" id="username"></input> 

      <label htmlFor="password">Password:</label> 
      <input type="password" placeholder="ex. password123" id="password"></input> 

      <input type="submit" value="Log In"></input>
      
      <Link to="/register">Not a member? Click here to sign up!</Link>
      {/* <!-- Trigger/Open The Modal --> */}

      </form>
    </div>
  )
}