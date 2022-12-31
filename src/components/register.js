import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createNewUser } from "../api";

export const Register = ({setToken}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  return (
    <div className="register-container">
      <h1>Create a Stranger's Things Account:</h1>
      <form id="create-account"
        onSubmit={async(event)=>{
          
          event.preventDefault();

          try{
          const userInfo = await createNewUser(username, password);
          setToken(userInfo);
          // localStorage.setItem('myToken', );
          // console.log(userInfo);
          history.push("/profile");
          }
          catch(error){
            console.error('Having trouble registering account:', error);
          }
        }}>
        <label htmlFor="username" >Create a unique username here:</label>
        <input type="text"
          placeholder="ex. username"
          id="create-username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        >

        </input>

        <label htmlFor="create-password">Set a password for your new account:</label>
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

        <input type="submit" value="Create Account"></input>
        <Link to="/">Already an ST member? Click here to log in!</Link>
      </form>
    </div>
  )
}