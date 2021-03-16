import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import EditProfile from './editProfile';
import Signout from './signout';

function Profile(){
    const profile=useSelector(state=>state.profile);
    return(
        <div>
            <div>
                <div>
                    Welcome {profile.username}
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
            </div>
        </div>
    )
}

export default Profile;