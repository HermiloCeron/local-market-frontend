import axios from 'axios';

export const increment=(num)=>{
    return{
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement=()=>{
    return{
        type: 'DECREMENT'
    }
}


// export const loadColor=()=>(dispatch)=>{
//     return axios.get('https://www.colr.org/json/color/random')
//     .then(response=>{
//         console.log(response)
//         dispatch(changeColor('#'+response.data.new_color));
//     })
// }

export const changeColor=()=>{
    return async dispatch=>{
        const response=await axios.post('https://randomuser.me/api/');
        dispatch({
            type: 'CHANGE_COLOR',
            payload: response.data.results[0].name.first
        })
    }
}

export const clientLogin=(body)=>{
    return async dispatch=>{
        console.log("http://localhost:3000/")
        console.log(body)
        // axios.post('http://localhost:3000/clients/login',
        axios.post('https://local-market-backend-heroku.herokuapp.com/clients/login',
            body,
            {
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error.response);
            console.log("HOLA")
        })
        
        // dispatch({
        //     type: 'SIGN_IN',
        //     payload: response.data
        // })
    }
}

export const clientSignup=(body)=>{
    return async dispatch=>{
        console.log(body)
        axios.post('https://local-market-backend-heroku.herokuapp.com/clients/signup',
            body,
            {
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error.response);
        })
        
        // dispatch({
        //     type: 'SIGN_IN',
        //     payload: response.data
        // })
    }
}