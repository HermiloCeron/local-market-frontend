import React from 'react';
import {Link} from 'react-router-dom';

function HomePage(){
    return(
        <div id='homepage-subcontainer'>
            <div>Welcome to the Local Market App</div>
            <br></br>
            <div>Please login or sign up first</div>
            <br></br>
            <div>
                <Link to='/login'>
                    <button className='homepage-button'>Log in</button>
                </Link>
                <Link to='/signup'>
                    <button className='homepage-button'>Sign up</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;