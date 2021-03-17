import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import EditProfile from './editProfile';
import Signout from './signout';
import AllLocal from './allLocal';
import SelectedBusiness from './selectedBusiness';
import EditBusiness from './editBusiness';
import CreateBusiness from './createBusiness';
import {requestBusiness,requestLuckyBusiness} from '../actions';

function Profile(props){
    const dispatch=useDispatch();
    const profile=useSelector(state=>state.profile);
    const requestLocalBusiness=(e)=>{
        e.preventDefault();
        const data={
            location: profile.location
        }
        dispatch(requestBusiness(data));
        props.history.push('/profile/local');
    }
    const refreshPage=(e)=>{
        props.history.push('/');
        window.location.reload();
    }
    const requestRecommendedBusiness=(e)=>{
        e.preventDefault();
        const data={
            clientId: profile.clientId
        }
        dispatch(requestLuckyBusiness(data));
        props.history.push('/profile/selectedBusiness');
    }
    return(
        <div id='profile-main-container'>
            <div>
                <div id='profile-menu-container'>
                    <div>
                        Welcome {profile.username}
                    </div>
                    <div onClick={(e)=>{requestLocalBusiness(e)}} className='profile-menu-button'>
                        Local business
                    </div>
                    <div onClick={(e)=>{requestRecommendedBusiness(e)}} className='profile-menu-button'>
                        Recomendation
                    </div>
                    <Link to='/profile/createBusiness' className='profile-menu-button'>
                            Create business
                    </Link>
                    <Link to='/profile/edit' className='profile-menu-button'>
                            Edit profile
                    </Link>
                    <Link to='/profile/delete' className='profile-menu-button'>
                        Sign out
                    </Link>
                    <div onClick={(e)=>{refreshPage()}} className='profile-menu-button'>
                        Log out
                    </div>         
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
                <Route path='/profile/selectedBusiness' render={()=>(
                    <SelectedBusiness />
                )} />
                <Route path='/profile/editBusiness' render={()=>(
                    <EditBusiness />
                )} />
                <Route path='/profile/createBusiness' render={()=>(
                    <CreateBusiness />
                )} />
            </div>
        </div>
    )
}

export default withRouter(Profile);