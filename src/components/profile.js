import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import EditProfile from './editProfile';

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
                <div>
                    Sign out
                </div>
                <div>
                    Log out
                </div>         
            </div>
            <div>
            <Route path='/profile/edit' render={()=>(
                <EditProfile />
            )} />
            </div>
        </div>
    )
}

export default Profile;