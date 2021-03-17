import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {clientUpdate} from '../actions';

function EditProfile(props){
    const dispatch=useDispatch();
    const profile=useSelector(state=>state.profile);
    const requestUpdate=(e)=>{
        e.preventDefault();
        const data={
            clientId: profile.clientId,
            username: e.target.username.value,
            password: e.target.password.value,
            eMail: e.target.eMail.value,
            location: e.target.location.value
        }
        console.log(data);
        dispatch(clientUpdate(data));
        props.history.push('/profile');
    }
    return(
        <div id='selected-business-container'>
            <div>
                Edit your information:
            </div>
            <form onSubmit={(e)=>{requestUpdate(e)}}>
                <div className='form-line'>
                    <div className='form-text'>Username: </div>
                    <input type='text' name='username' defaultValue={profile.username}/> 
                </div>           
                <div className='form-line'>
                    <div className='form-text'>Password: </div>
                    <input type='text' name='password' defaultValue={profile.password}/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Email: </div>
                    <input type='text' name='eMail' defaultValue={profile.eMail}/> 
                </div>                
                <div className='form-line'>
                    <div className='form-text'>Location: </div>
                    <input type='text' name='location' defaultValue={profile.location}/> 
                </div>
                <input type='submit' value='Update' className='homepage-button'/>
            </form>
        </div>
    )
}

export default withRouter(EditProfile);