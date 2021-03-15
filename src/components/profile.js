import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';

function Profile(){
    const profile=useSelector(state=>state.profile);
    return(
        <div>
            <div>
                <h3> Welcome {profile.username} </h3>
            </div>
            <h3>Welcome to the Local Market App</h3>
            <br></br>
            <div>Please login or sign up first</div>
            <br></br>
            <div>
                <Link to='/login'>
                    <button>Log in</button>
                </Link>
                <Link to='/signup'>
                    <button>Sign up</button>
                </Link>
            </div>
        </div>
    )
}

export default Profile;