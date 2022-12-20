import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return(
    <div className="content-container">
      <h1>Create a New Stranger's Things Account:</h1>
      <form id="create-account">
      <label for="username" >Type a unique username here:</label> 
      <input type="text" placeholder="ex. username" id="create-username"></input> 

      <label for="create-password">Create a password for your account:</label> 
      <input type="create-password" placeholder="ex. password321" id="create-password"></input> 

      <input type="submit" value="Log In"></input>
      <Link to="/">Already an ST member? Click here to log in!</Link>
      </form>
    </div>
  )
}