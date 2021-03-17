import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {requestOneBusiness} from '../actions';

function AllLocal(props){
    const dispatch=useDispatch();
    const profile=useSelector(state=>state.profile);
    const localBusiness=useSelector(state=>state.localBusiness.allLocal);
    const ratings=useSelector(state=>state.localBusiness.businessRating);
    const requestABusiness=(e,businessIndex)=>{
        e.preventDefault();
        const data={
            businessIndex: businessIndex,
            clientId: profile.clientId
        }
        console.log(data);
        dispatch(requestOneBusiness(data));
        props.history.push('/profile/selectedBusiness');
    }
    return(
        <div id='all-business-container'>
            <div>All the local business in your area:</div>
            <br></br>
            <div id='business-grid-container'>
                {localBusiness.map((business,index)=>{
                    return(
                        <div 
                            className='individual-business-container' 
                            key={'local'+business.businessId} 
                            onClick={(e)=>{requestABusiness(e,business.businessId)}}
                        >
                            <img src={business.photo} className='individual-business-photo'/>
                            <div className='individual-business-name'>
                                {business.name}
                            </div>
                            <div className='individual-business-rate'>
                                Rating: {parseFloat(ratings[index]).toFixed(1)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default withRouter(AllLocal);