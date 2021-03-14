import './App.css';
import axios from 'axios';
import React,{Component} from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {increment,decrement} from './actions';

function App() {
  const counter=useSelector(state=>state.counter)
  const isLogged=useSelector(state=>state.isLogged)
  const dispatch=useDispatch();
    return (
      <div className="App">
        Counter {counter}
        <button onClick={()=>dispatch(increment(5))}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        {isLogged ? "Valuable information" : ""}
      </div>
    );
}

export default App;
