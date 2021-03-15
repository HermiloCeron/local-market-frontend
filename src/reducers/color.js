let defaultState={
    backColor: 'red'
}

const colorReducer=(state=defaultState,action)=>{
    if(action.type==='CHANGE_COLOR'){
        return{
            ...state,
            backColor: action.payload
        }
    }else{
        return{
            ...state
        }
    }
}

export default colorReducer;