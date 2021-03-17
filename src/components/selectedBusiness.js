import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {manageFlag, businessDelete,updateRating} from '../actions';

function SelectedBusiness(props){
    const dispatch=useDispatch();
    const business=useSelector(state=>state.localBusiness.currentBusiness);
    const clientId=useSelector(state=>state.profile.clientId);
    const controlFlag=useSelector(state=>state.flag);
    let ratingClassName1="unselected";
    let ratingClassName2="unselected";
    let ratingClassName3="unselected";
    let ratingClassName4="unselected";
    let ratingClassName5="unselected";
    if(business.requesterRating===1){
        ratingClassName1="selected"
    }else if(business.requesterRating===2){
        ratingClassName2="selected"
    }else if(business.requesterRating===3){
        ratingClassName3="selected"
    }else if(business.requesterRating===4){
        ratingClassName4="selected"
    }else if(business.requesterRating===5){
        ratingClassName5="selected"
    }
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
    const requestRatingUpdate=(e,value)=>{
        e.preventDefault();
        const data={
            rating: value,
            businessId: business.businessId,
            clientId: clientId,
            business: business
        }
        dispatch(updateRating(data));
        props.history.push('/profile/selectedBusiness');
    }
    return(
        <div id='selected-business-container'>
            <div id='selected-business-title'> {business.name} </div>
            <br/>
            <div className='rate-container'>
                <div>Rate me: </div>
                <div className={ratingClassName1} onClick={(e)=>{requestRatingUpdate(e,1)}}>
                    1
                </div>
                <div className={ratingClassName2} onClick={(e)=>{requestRatingUpdate(e,2)}}>
                    2
                </div>
                <div className={ratingClassName3} onClick={(e)=>{requestRatingUpdate(e,3)}}>
                    3
                </div>
                <div className={ratingClassName4} onClick={(e)=>{requestRatingUpdate(e,4)}}>
                    4
                </div>
                <div className={ratingClassName5} onClick={(e)=>{requestRatingUpdate(e,5)}}>
                    5
                </div>
            </div>
            <br/>
            <div> 
                <img src={business.photo}/>
            </div>
            <div> {business.description} </div>
            <div> {business.address} </div>
            <div> {business.webpage} </div>
            <div> {business.facebook} </div>
            <div> {business.instagram} </div>
            <div> {business.whatsapp} </div>
            <div> {business.telephone} </div><br/>
            { clientId==business.ownerId 
                ?
                    <div>
                        <Link to='/profile/editBusiness' className='homepage-button'>
                            Edit
                        </Link>
                        <div onClick={(e)=>{flagChange(e,1)}}>
                            <button className='homepage-button'>
                                Delete
                            </button>
                        </div>
                    </div>
                : ""
            }
            { controlFlag===1
                ?
                    <div>
                        <div>Are you sure?</div>
                        <div onClick={(e)=>{requestDelete(e,0)}} className='yes-button'>
                            Yes
                        </div>
                        <div onClick={(e)=>{flagChange(e,0)}} className='no-button'>
                            No
                        </div>
                    </div>
                : ""
            }
        </div>
    )
}

export default withRouter(SelectedBusiness);