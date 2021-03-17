import axios from 'axios';

export const clientLogin=(body)=>{
    return async dispatch=>{
        console.log("http://localhost:3000/")
        console.log(body)
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
            dispatch({
                type: 'SIGN_IN'
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
            dispatch({
                type: 'SIGN_IN'
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
            dispatch({
                type: 'CLEAN_PROFILE'
            })
        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data);
        })
    }
}

export const requestBusiness=(body)=>{
    return async dispatch=>{
        console.log(body);
        axios.get('https://local-market-backend-heroku.herokuapp.com/business/show/'+body.location)
        .then(response=>{
            console.log(response);
            dispatch({
                type: 'SAVE_BUSINESS',
                payload: response.data
            })
        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data);
        })
    }
}

export const requestOneBusiness=(body)=>{
    return async dispatch=>{
        axios.get('https://local-market-backend-heroku.herokuapp.com/business/'+body.clientId+'/showOne/'+body.businessIndex)
        .then(response=>{
            dispatch({
                type: 'SAVE_CURRENT_BUSINESS',
                payload: response.data
            })
        })
        .catch(error=>{
            alert(error.response.data);
        })
    }
}

export const manageFlag=(flag)=>{
    if(flag==1){
        return{
            type: 'SET',
        }
    }else{
        return{
            type: 'RESET',
        }
    }
    
}

export const businessUpdate=(body)=>{
    return async dispatch=>{
        console.log(body);
        axios.put('https://local-market-backend-heroku.herokuapp.com/business/'+body.ownerId+'/edit/'+body.businessId,
            body,
            {
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response=>{
            console.log(response);
            dispatch({
                type: 'SAVE_CURRENT_BUSINESS',
                payload: response.data
            })
        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data);
        })
    }
}

export const businessCreate=(body)=>{
    return async dispatch=>{
        console.log(body);
        axios.post('https://local-market-backend-heroku.herokuapp.com/business/'+body.ownerId+'/new/',
            body,
            {
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response=>{
            console.log(response);
            dispatch({
                type: 'SAVE_CURRENT_BUSINESS',
                payload: response.data
            })
        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data);
        })
    }
}

export const businessDelete=(body)=>{
    return async dispatch=>{
        console.log(body);
        axios.delete('https://local-market-backend-heroku.herokuapp.com/business/'+body.ownerId+'/delete/'+body.businessId,
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

export const requestLuckyBusiness=(body)=>{
    return async dispatch=>{
        axios.get('https://local-market-backend-heroku.herokuapp.com/business/'+body.clientId+'/lucky')
        .then(response=>{
            dispatch({
                type: 'SAVE_CURRENT_BUSINESS',
                payload: response.data
            })
        })
        .catch(error=>{
            alert(error.response.data);
        })
    }
}

export const updateRating=(body)=>{
    return async dispatch=>{
        console.log(body);
        axios.put('https://local-market-backend-heroku.herokuapp.com/business/'+body.clientId+'/editRating/'+body.businessId,
            body,
            {
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response=>{
            // let modifiedBusiness=body.business;
            // modifiedBusiness.requesterRating=response.data.rating;
            const modifiedBusiness={...body.business,requesterRating:response.data.rating}
            console.log(response);
            console.log(modifiedBusiness)
            dispatch({
                type: 'SAVE_CURRENT_BUSINESS',
                payload: modifiedBusiness
            })
        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data);
        })
    }
}