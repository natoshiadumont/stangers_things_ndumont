import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, NavLink, Route, useHistory } from 'react-router-dom';
import { Home } from './components/home';
import { Posts } from './components/posts';
import { Profile } from './components/profile'
import { Register } from './components/register'
import { fetchAllPosts, createNewUser, logIn, newPost, getUser, deletePost, messageSeller } from './api';
//General Question: do these functions above that are grayed out here need to still be here in order for them to render in the app?
import { NewPost } from './components/new-post';


const App = () => {
  const [token, setToken] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    localStorage.getItem('myToken') !== null ? setAuthenticated(true) : setAuthenticated(false);
  })
  return (

    <BrowserRouter >
      <header>
        <h1 id="header-title"><img id="logo" src='https://cdn-icons-png.flaticon.com/512/2880/2880403.png'></img> Stranger's Things </h1>

        <div>
          <NavLink exact to='/'> Home </NavLink>
          <NavLink to='/posts'> Posts </NavLink>
          <NavLink to='/profile'> Profile </NavLink>


          {authenticated ?
            <a href="/">
              <img id="header-button"
                onClick={(event) => {
                event.preventDefault();
                setAuthenticated(false);
                localStorage.removeItem('myToken'); 
                }
                }
                src="https://cdn-icons-png.flaticon.com/512/6812/6812071.png"

              ></img></a> :

            <a href='/'>
              <img
              id='header-button'
              src="https://cdn-icons-png.flaticon.com/512/6811/6811882.png"
            ></img>
            </a>
          }

        </div>
      </header>

      <Switch>
        <Route exact path='/' authenticated={authenticated}> <Home
          setToken={setToken} token={token} setAuthenicated={setAuthenticated} /> </Route>
        <Route path='/posts'> 
        <Posts authenticated={authenticated} deletePost={deletePost} messageSeller={messageSeller} />
        </Route>
        <Route path='/profile'> <Profile authenticated={authenticated}/> </Route>
        <Route path='/register'> <Register
          setToken={setToken} token={token}/> </Route>
        <Route path='/new-post'> <NewPost /> </Route>

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