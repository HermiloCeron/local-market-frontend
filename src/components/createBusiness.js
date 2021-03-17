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
        <div id='selected-business-container'>
            <div>
                Fill the bussiness information:
            </div>
            <div>
                <form onSubmit={(e)=>{requestCreation(e)}}>
                <div className='form-line'>
                    <div className='form-text'>Name: </div>
                    <input type='text' name='name' className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Description: </div>
                    <input type='text' name='description' className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Address: </div>
                    <input type='text' name='address' className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Webpage </div>
                    <input type='text' name='webpage' className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Facebook: </div>
                    <input type='text' name='facebook' className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Instagram: </div>
                    <input type='text' name='instagram' className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Whatsapp: </div>
                    <input type='text' name='whatsapp' className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Photo: </div>
                    <input type='text' name='photo' className='form-input'/>
                </div>
                <div className='form-line'>
                    <div className='form-text'>Phone: </div>
                    <input type='text' name='telephone' className='form-input'/>
                </div>         
                <div className='form-line'>
                    <div className='form-text'>Food category: </div>
                    <input type='text' name='foodCategory' className='form-input'/>
                </div>                
                <div className='form-line'>
                    <div className='form-text'>Location: </div>
                    <input type='text' name='location' className='form-input'/>
                </div>
                <input type='submit' value='Create' className='homepage-button'/>
            </form>
            </div>
            
        </div>
    )
}

export default withRouter(CreateBusiness);