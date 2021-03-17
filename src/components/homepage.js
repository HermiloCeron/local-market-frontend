import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';

function HomePage(){
    return(
        <div id='homepage-container'>
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
        </div>
    )
}

export default HomePage;