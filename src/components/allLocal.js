import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';

function AllLocal(){
    const localBusiness=useSelector(state=>state.localBusiness.allLocal);
    const ratings=useSelector(state=>state.localBusiness.businessRating);
    return(
        <div>
            <h3>All the local business in your area:</h3>
            <br></br>
            {localBusiness.map((business,index)=>{
                console.log(business)
                return(
                    <div key={'local'+business.businessId}>
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

export default AllLocal;