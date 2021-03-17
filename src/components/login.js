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
        <div id='homepage-subcontainer'>
            <form onSubmit={(e)=>{requestLogin(e)}} >
                <div className='form-line'>
                    <div className='form-text'>Username:</div>
                    <input type='text' name='username' className='form-input'/> 
                </div>
                <div className='form-line'>
                    <div className='form-text'>Password:</div>
                    <input type='text' name='password' className='form-input'/> <br/>
                </div>
                <input type='submit' value='Login' className='homepage-button'/>
            </form> 
        </div>
    )  
}

export default withRouter(Login);