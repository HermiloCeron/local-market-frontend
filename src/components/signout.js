import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {clientDelete} from '../actions';

function Signout(props){
    const dispatch=useDispatch();
    const profile=useSelector(state=>state.profile);
    const requestDelete=(e)=>{
        e.preventDefault();
        const data={
            clientId: profile.clientId,
        }
        dispatch(clientDelete(data));
        props.history.push('/');
    }
    return(
        <div id='signout-container'>
            <div>Are you sure?</div>
            <div onClick={(e)=>{requestDelete(e)}} className='yes-button'>
                Yes
            </div>
            <Link to='/profile' className='no-button'>
                    No
            </Link>
        </div>
    )
}

export default withRouter(Signout);