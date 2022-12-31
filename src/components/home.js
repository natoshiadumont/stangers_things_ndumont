import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { logIn, getUser, } from "../api";


export const Home = ({ token, setToken, setAuthenicated }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    getUser().then((results) => { setUsername(results.username) });
    // getUser().then
  }, []);
  return (
    <div className="register-container">
      {localStorage.getItem('myToken') === null ?
        <><h1>Welcome to Stranger's Things!</h1><form id="login-form"
          onSubmit={async (event) => {

            event.preventDefault();

            try {
              const userInfo = await logIn(username, password);
              // console.log(userInfo);
              setToken(userInfo);
              setAuthenicated(true);
              history.push("/profile");
            }
            catch (error) {
              console.error(error);
            }
          }}>
          <div>
            <label htmlFor="username">Username:</label>
            <input required type="text" placeholder="ex. username" id="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input required type="password"
              placeholder="ex. password123"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>

          <input id="login-button" type="submit" value="Log In" ></input>

          <Link to="/register">Not a member? Click here to sign up! </Link>
        </form></>

        : <h2 id="welcome-user">
          {`You are currently signed in as ${username}...`}
          <a href="/" onClick={(event) => {
            localStorage.removeItem('myToken');
          }}>
             Not {username}? Click here.
          </a>
        </h2>
        
        }


    </div>
  )
}