import './App.css';
import React,{Component} from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {increment,decrement} from './actions';
import HomePage from './components/homepage';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';

function App() {
  const counter=useSelector(state=>state.counter);
  const dispatch=useDispatch();
    return (
      <div className="App">
        <header>
          <Link to='/'>
            <h1>Local market</h1>
          </Link>
        </header>
        <Route exact path='/' render={()=>(
          <HomePage />
        )} />
        <Route path='/login' render={()=>(
          <Login />
        )}/>
        <Route path='/signup' render={()=>(
          <Signup />
        )}/>
        <Route path='/profile' render={()=>(
          <Profile />
        )}/>



        Counter {counter}
        <button onClick={()=>dispatch(increment(5))}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        
      </div>
    );
}

export default App;
