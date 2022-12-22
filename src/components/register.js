import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createNewUser } from "../api";

export const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="content-container">
      <h1>Create a Stranger's Things Account:</h1>
      <form id="create-account"
        onSubmit={(event)=>{
          event.preventDefault();
          createNewUser(username, password);
          console.log(username, password);
        }}>
        <label htmlFor="username" >Type a unique username here:</label>
        <input type="text"
          placeholder="ex. username"
          id="create-username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        >

        </input>

        <label htmlFor="create-password">Create a password for your account:</label>
        <input
          type="password"
          placeholder="ex. password321"
          id="create-password"
          value={password}
          onChange={(event)=>{
            setPassword(event.target.value);
          }}
        >
        </input>

        <input type="submit" value="Log In"></input>
        <Link to="/">Already an ST member? Click here to log in!</Link>
      </form>
    </div>
  )
}