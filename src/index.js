import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, useParams, NavLink, Route } from 'react-router-dom';
import { Home } from './components/home';
import { Posts } from './components/posts';
import { Profile } from './components/profile'
import { fetchAllPosts } from './api';
const App = () => {
  
  
  return (
    <BrowserRouter >
      <header>
        <h1> Stranger's Things </h1>
        <div>
          <NavLink exact to='/'> Home </NavLink>
          <NavLink to='/posts'> Posts </NavLink>
          <NavLink to='/profile'> Profile </NavLink>
        </div>
        <button className="in-header">Log Out</button>
      </header>
      <Switch>
        <Route exact path='/'><Home /> </Route>
        <Route exact path='/posts'><Posts /> </Route>
        <Route exact path='/profile'><Profile /> </Route>
      </Switch>
      <footer>
        <div id="footer_text"> Project by: Natoshia Dumont </div>
        <a href="https://www.flaticon.com/free-icons/eco-tag" title="eco-tag icons">Eco-tag icons created by srip - Flaticon</a>
      </footer>
    </BrowserRouter>
  )
}







ReactDOM.render(
  <App />,
  document.getElementById('app'),
)