import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {clientLogin} from '../actions';


function Login(props){
    const dispatch=useDispatch();
    const requestLogin=(e)=>{
        e.preventDefault();
        const data={
            username: e.target.username.value,
            password: e.target.password.value
        }
        console.log(data);
        dispatch(clientLogin(data));
        console.log("After dispatch");
        props.history.push('/profile');
    }
    return(
        <div>
            <form onSubmit={(e)=>{requestLogin(e)}} >
                Username: <input type='text' name='username'/> <br/>
                Password: <input type='text' name='password'/> <br/>
                <input type='submit' value='Login'/>
            </form> 
        </div>
    )  
}

export default withRouter(Login);