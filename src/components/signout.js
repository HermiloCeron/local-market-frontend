import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
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
        console.log(data);
        dispatch(clientDelete(data));
        props.history.push('/');
    }
    return(
        <div>
            <div>Are you sure?</div>
            <div onClick={(e)=>{requestDelete(e)}}>
                Yes
            </div>
            <Link to='/profile'>
                <div>
                    No
                </div>
            </Link>
        </div>
    )
}

export default withRouter(Signout);