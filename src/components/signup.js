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
        <div id='homepage-subcontainer'>
            <form onSubmit={(e)=>{requestSignup(e)}} >
                <div className='form-line'>
                    <div className='form-text'>Username: </div>
                    <input type='text' name='username' className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Password: </div>
                    <input type='text' name='password' className='form-input'/> 
                </div>
                <div className='form-line'>
                    <div className='form-text'>Email:</div> 
                    <input type='text' name='eMail' className='form-input'/> 
                </div>
                <div className='form-line'>
                    <div className='form-text'>Location:</div> 
                    <input type='text' name='location' className='form-input'/> 
                </div>
                <input type='submit' value='Sign up' className='homepage-button'/>
            </form>
        </div>
    )
}

export default withRouter(Signup);