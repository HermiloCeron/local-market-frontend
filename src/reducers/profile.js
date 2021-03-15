const initialState={
    clientId: 0,
    username: "",
    password: "",
    eMail:"",
    location:""
}

const profileReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SAVE_PROFILE':          
            return {
                ...state,
                clientId: action.payload.clientId,
                username: action.payload.username,
                password: action.payload.password,
                eMail: action.payload.eMail,
                location: action.payload.location
            }
        default:
            return state
    }
}

export default profileReducer;