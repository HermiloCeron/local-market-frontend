import './App.css';
import React,{Component} from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import HomePage from './components/homepage';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';

function App() {
  const dispatch=useDispatch();
  const isLogged=useSelector(state=>state.isLogged);
    return (
      <div className="App">
        <header id='main-header'>
          <Link to='/' id='app-title'>
            <h1>Local market</h1>
          </Link>
        </header>
        <main>
        <div id='homepage-container'>
          <Route exact path='/' render={()=>(
            <HomePage />
          )} />
          <Route path='/login' render={()=>(
            <Login />
          )}/>
          <Route path='/signup' render={()=>(
            <Signup />
          )}/>
        </div>
        {isLogged 
          ?
            <Route path='/profile' render={()=>(
              <Profile />
            )}/>
          : ""
        }
        </main>     
      </div>
    );
}

export default App;
