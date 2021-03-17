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
        <div id='selected-business-container'>
            <div>
                Edit the bussiness information:
            </div>
            <form onSubmit={(e)=>{requestUpdate(e)}}>
                <div className='form-line'>
                    <div className='form-text'>Name: </div>
                    <input type='text' name='name' defaultValue={business.name} className='form-input'/> 
                </div>
                <div className='form-line'>
                    <div className='form-text'>Description: </div>
                    <input type='text' name='description' defaultValue={business.description} className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Address: </div>
                    <input type='text' name='address' defaultValue={business.address} className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Webpage </div>
                    <input type='text' name='webpage' defaultValue={business.webpage} className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Facebook: </div>
                    <input type='text' name='facebook' defaultValue={business.facebook} className='form-input'/> 
                </div>
                <div className='form-line'>
                    <div className='form-text'>Instagram: </div>
                    <input type='text' name='instagram' defaultValue={business.instagram} className='form-input'/> 
                </div>
                <div className='form-line'>
                    <div className='form-text'>Whatsapp: </div>
                    <input type='text' name='whatsapp' defaultValue={business.whatsapp} className='form-input'/> 
                </div>
                <div className='form-line'>
                    <div className='form-text'>Photo: </div>
                    <input type='text' name='photo' defaultValue={business.photo} className='form-input'/> 
                </div>
                <div className='form-line'>
                    <div className='form-text'>Phone: </div>
                    <input type='text' name='telephone' defaultValue={business.telephone} className='form-input'/> 
                </div>
                <div className='form-line'>
                    <div className='form-text'>Food category: </div>
                    <input type='text' name='foodCategory' defaultValue={business.foodCategory} className='form-input'/> 
                </div>
                <div className='form-line'>
                    <div className='form-text'>Location: </div>
                    <input type='text' name='location' defaultValue={business.location} className='form-input'/> 
                </div>
                <input type='submit' value='Update' className='homepage-button'/>
            </form>
        </div>
    )
}

export default withRouter(EditBusiness);