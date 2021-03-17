import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {manageFlag, businessDelete} from '../actions';

function SelectedBusiness(props){
    const dispatch=useDispatch();
    const business=useSelector(state=>state.localBusiness.currentBusiness);
    const clientId=useSelector(state=>state.profile.clientId);
    const controlFlag=useSelector(state=>state.flag);
    const ratingClassName1="selected";
    const ratingClassName2="unselected";
    let flag=0;
    const flagChange=(e,num)=>{
        e.preventDefault();
        flag=num;
        dispatch(manageFlag(flag));
    }
    const requestDelete=(e)=>{
        e.preventDefault();
        const data={
            businessId: business.businessId,
            ownerId: business.ownerId
          }
        dispatch(businessDelete(data));
        dispatch(manageFlag(0));
        props.history.push('/profile');
    }
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
                        <div onClick={(e)=>{requestDelete(e,0)}}>
                            Yes
                        </div>
                        <div onClick={(e)=>{flagChange(e,0)}}>
                            No
                        </div>
                    </div>
                : ""
            }
            <div>
                <div className={ratingClassName1}>
                    1
                </div>
                <div className={ratingClassName2}>
                    2
                </div>
                <div>
                    3
                </div>
                <div>
                    4
                </div>
                <div>
                    5
                </div>
            </div>
        </div>
    )
}

export default withRouter(SelectedBusiness);