import './App.css';
import axios from 'axios';
import React,{Component} from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { connect} from 'react-redux';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={

  //   }
  // }
  render(){
    return (
      <div className="App">
        Hello world
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {

  }
};
const mapDispachToProps=(dispach)=>{
  return {

  }
};

export default connect(mapStateToProps,mapDispachToProps)(App);
