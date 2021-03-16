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
            businessIndex: businessIndex
        }
        console.log(data);
        dispatch(requestOneBusiness(data));
        props.history.push('/profile/local');
    }
    return(
        <div>
            <h3>All the local business in your area:</h3>
            <br></br>
            {localBusiness.map((business,index)=>{
                return(
                    <div key={'local'+business.businessId} onClick={(e)=>{requestABusiness(e,business.businessId)}}>
                        <img src={business.photo}/>
                        <div>
                            {business.name}
                        </div>
                        <div>
                            {ratings[index]}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default withRouter(AllLocal);