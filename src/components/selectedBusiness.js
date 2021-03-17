import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {manageFlag} from '../actions';

function SelectedBusiness(props){
    const dispatch=useDispatch();
    const business=useSelector(state=>state.localBusiness.currentBusiness);
    const clientId=useSelector(state=>state.profile.clientId);
    const controlFlag=useSelector(state=>state.flag);
    let flag=0;
    const flagChange=(e,num)=>{
        e.preventDefault();
        flag=num;
        dispatch(manageFlag(flag));
    }
    console.log(flag)
    return(
        <div>
            <div> {business.name} </div>
            <br></br>
            <div> 
                <img src={business.photo}/>
            </div>
            <div> {business.description} </div>
            <div> {business.address} </div>
            <div> {business.webpage} </div>
            <div> {business.facebook} </div>
            <div> {business.instagram} </div>
            <div> {business.whatsapp} </div>
            <div> {business.telephone} </div>
            { clientId==business.ownerId 
                ?
                    <div>
                        <Link to='/profile/editBusiness'>
                            <div>Edit</div>
                        </Link>
                        <div onClick={(e)=>{flagChange(e,1)}}>Delete</div>
                    </div>
                : ""
            }
            { controlFlag===1
                ?
                    <div>
                        <div>Are you sure?</div>
                        <div>Yes</div>
                        <div onClick={(e)=>{flagChange(e,0)}}>
                            No
                        </div>
                    </div>
                : ""
            }
        </div>
    )
}

export default withRouter(SelectedBusiness);