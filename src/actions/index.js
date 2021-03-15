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
        const response=await axios.get('https://randomuser.me/api/');
        dispatch({
            type: 'CHANGE_COLOR',
            payload: response.data.results[0].name.first
        })
    }
}

