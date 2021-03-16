const flagReducer=(state=0,action)=>{
    switch(action.type){
        case 'SET':
            return 1
        case 'RESET':
            return 0
        default:
            return state
    }
}

export default flagReducer;