import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {clientSignup} from '../actions';


function Signup(props){
    const dispatch=useDispatch();
    const requestSignup=(e)=>{
        e.preventDefault();
        const data={
            username: e.target.username.value,
            password: e.target.password.value,
            eMail: e.target.eMail.value,
            location: e.target.location.value
        }
        console.log(data);
        dispatch(clientSignup(data));
        props.history.push('/profile');
    }
    return(
        <div>
            <form onSubmit={(e)=>{requestSignup(e)}}>
                Username: <input type='text' name='username'/> <br/>
                Password: <input type='text' name='password'/> <br/>
                Email: <input type='text' name='eMail'/> <br/>
                Location: <input type='text' name='location'/> <br/>
                <input type='submit' value='Sign up'/>
            </form>
        </div>
    )
}

export default withRouter(Signup);