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
            dispatch({
                type: 'SAVE_PROFILE',
                payload: response.data
            })
        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data);
            console.log("HOLA")
        })
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
            dispatch({
                type: 'SAVE_PROFILE',
                payload: response.data
            })
        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data);
        })
    }
}

export const clientUpdate=(body)=>{
    return async dispatch=>{
        console.log(body);
        console.log('https://local-market-backend-heroku.herokuapp.com/clients/edit/'+body.clientId)
        axios.put('https://local-market-backend-heroku.herokuapp.com/clients/edit/'+body.clientId,
            body,
            {
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response=>{
            console.log(response);
            dispatch({
                type: 'SAVE_PROFILE',
                payload: response.data
            })
        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data);
        })
    }
}

export const clientDelete=(body)=>{
    return async dispatch=>{
        console.log(body);
        axios.delete('https://local-market-backend-heroku.herokuapp.com/clients/delete/'+body.clientId,
            body,
            {
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response=>{
            console.log(response);
            alert(response.data);
        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data);
        })
    }
}