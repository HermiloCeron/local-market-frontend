import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import EditProfile from './editProfile';
import Signout from './signout';
import AllLocal from './allLocal';
import {requestBusiness} from '../actions';

function Profile(props){
    const dispatch=useDispatch();
    const profile=useSelector(state=>state.profile);
    const requestLocalBusiness=(e)=>{
        e.preventDefault();
        const data={
            location: profile.location
        }
        console.log(data);
        dispatch(requestBusiness(data));
        props.history.push('/profile/local');
    }
    return(
        <div>
            <div>
                <div>
                    Welcome {profile.username}
                </div>
                <div onClick={(e)=>{requestLocalBusiness(e)}}>
                    Local business
                </div>
                <Link to='/profile/edit'>
                    <div>
                        Edit profile
                    </div>
                </Link>
                <Link to='/profile/delete'>
                <div>
                    Sign out
                </div>
                </Link>
                <div>
                    Log out
                </div>         
            </div>
            <div>
                <Route path='/profile/edit' render={()=>(
                    <EditProfile />
                )} />
                <Route path='/profile/delete' render={()=>(
                    <Signout />
                )} />
                <Route path='/profile/local' render={()=>(
                    <AllLocal />
                )} />
            </div>
        </div>
    )
}

export default withRouter(Profile);