import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {businessUpdate} from '../actions';

function EditBusiness(props){
    const dispatch=useDispatch();
    const business=useSelector(state=>state.localBusiness.currentBusiness);
    const requestUpdate=(e)=>{
        e.preventDefault();
        const data={
            businessId: business.businessId,
            name: e.target.name.value,
            description: e.target.description.value,
            address: e.target.address.value,
            webpage: e.target.webpage.value,
            facebook: e.target.facebook.value,
            instagram: e.target.instagram.value,
            whatsapp: e.target.whatsapp.value,
            photo: e.target.photo.value,
            telephone: e.target.telephone.value,
            foodCategory: e.target.foodCategory.value,
            ownerId: business.ownerId,
            location: e.target.location.value
          }
          console.log(data);
        dispatch(businessUpdate(data));
        props.history.push('/profile/selectedBusiness');
    }
    return(
        <div>
            <div>
                Edit the bussiness information:
            </div>
            <form onSubmit={(e)=>{requestUpdate(e)}}>
                Name: <input type='text' name='name' defaultValue={business.name}/> <br/>
                Description: <input type='text' name='description' defaultValue={business.description}/> <br/>
                Address: <input type='text' name='address' defaultValue={business.address}/> <br/>
                Webpage <input type='text' name='webpage' defaultValue={business.webpage}/> <br/>
                Facebook: <input type='text' name='facebook' defaultValue={business.facebook}/> <br/>
                Instagram: <input type='text' name='instagram' defaultValue={business.instagram}/> <br/>
                Whatsapp: <input type='text' name='whatsapp' defaultValue={business.whatsapp}/> <br/>
                Photo: <input type='text' name='photo' defaultValue={business.photo}/> <br/>
                Phone: <input type='text' name='telephone' defaultValue={business.telephone}/> <br/>
                Food category: <input type='text' name='foodCategory' defaultValue={business.foodCategory}/> <br/>
                Location: <input type='text' name='location' defaultValue={business.location}/> <br/>

                <input type='submit' value='Update'/>
            </form>
        </div>
    )
}

export default withRouter(EditBusiness);