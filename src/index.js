import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, NavLink, Route} from 'react-router-dom';
import { Home } from './components/home';
import { Posts } from './components/posts';
import { Profile } from './components/profile'
import {Register} from './components/register'
import { fetchAllPosts, createNewUser, logIn } from './api';


const App = () => {
  const [token, setToken] = useState();
  return (
    <BrowserRouter >
      <header>
        <h1 id="header-title"><img id="logo" src='https://cdn-icons-png.flaticon.com/512/2880/2880403.png'></img> Stranger's Things </h1>
        <div>
          <NavLink exact to='/'> Home </NavLink>
          <NavLink to='/posts'> Posts </NavLink>
          <NavLink to='/profile'> Profile </NavLink>
        </div>
      </header>

      <Switch>
        <Route exact path='/'> <Home /> </Route>
        <Route path='/posts'> <Posts /></Route>
        <Route path='/profile'> <Profile /> </Route>
        <Route path='/register'> <Register /> </Route>
      </Switch>
      <footer>
        <div> Project by: Natoshia Dumont </div>
        <a href="https://www.flaticon.com/free-icons/eco-tag" title="eco-tag icons">Eco-tag icons created by srip - Flaticon</a>
      </footer>
    </BrowserRouter>
  )
}







ReactDOM.render(
  <App />,
  document.getElementById('app'),
)