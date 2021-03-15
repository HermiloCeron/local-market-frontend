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
        <div>
            <div>
                Edit your information:
            </div>
            <form onSubmit={(e)=>{requestUpdate(e)}}>
                Username: <input type='text' name='username' defaultValue={profile.username}/> <br/>
                Password: <input type='text' name='password' defaultValue={profile.password}/> <br/>
                Email: <input type='text' name='eMail' defaultValue={profile.eMail}/> <br/>
                Location: <input type='text' name='location' defaultValue={profile.location}/> <br/>
                <input type='submit' value='Update'/>
            </form>
        </div>
    )
}

export default withRouter(EditProfile);