import './App.css';
import axios from 'axios';
import React,{Component} from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {increment,decrement,changeColor} from './actions';
import HomePage from './components/homepage';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  const counter=useSelector(state=>state.counter)
  const isLogged=useSelector(state=>state.isLogged)
  const backColor=useSelector(state=>state.color.backColor)
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



        Counter {counter}
        <button onClick={()=>dispatch(increment(5))}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(changeColor())}>Change color</button>
        
        Color: {backColor}
        {isLogged ? "Valuable information" : ""}
      </div>
    );
}

export default App;
