import {Route,Link,withRouter} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {businessCreate} from '../actions';

function CreateBusiness(props){
    const dispatch=useDispatch();
    const profile=useSelector(state=>state.profile);
    const requestCreation=(e)=>{
        e.preventDefault();
        const data={
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
            ownerId: profile.clientId,
            location: e.target.location.value
          }
          console.log(data);
        dispatch(businessCreate(data));
        props.history.push('/profile/selectedBusiness');
    }
    return(
        <div>
            <div>
                Edit the bussiness information:
            </div>
            <form onSubmit={(e)=>{requestCreation(e)}}>
                Name: <input type='text' name='name'/> <br/>
                Description: <input type='text' name='description'/> <br/>
                Address: <input type='text' name='address'/> <br/>
                Webpage <input type='text' name='webpage'/> <br/>
                Facebook: <input type='text' name='facebook'/> <br/>
                Instagram: <input type='text' name='instagram'/> <br/>
                Whatsapp: <input type='text' name='whatsapp'/> <br/>
                Photo: <input type='text' name='photo'/> <br/>
                Phone: <input type='text' name='telephone'/> <br/>
                Food category: <input type='text' name='foodCategory'/> <br/>
                Location: <input type='text' name='location'/> <br/>

                <input type='submit' value='Create'/>
            </form>
        </div>
    )
}

export default withRouter(CreateBusiness);