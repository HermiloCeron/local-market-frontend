const initialState={
    allLocal:[],
    businessRating: []
}

const allBusinessReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SAVE_BUSINESS': 
        const temporal=action.payload.map((business)=>{
            let businessRating=0.0;
            if(business.Ratings.length>0){
                let RatingsArray=business.Ratings.map(rate=>rate.rating)
                console.log(RatingsArray)
                businessRating=RatingsArray.reduce((acc,curr)=>acc+curr,0);
                console.log(business.Ratings.length)
                businessRating=parseFloat(businessRating)/parseFloat(business.Ratings.length);
                console.log(businessRating)
            }
            else{
                businessRating="No rated"
            }
            return(businessRating);
        });
        console.log(temporal)       
            return {
                ...state,
                allLocal: action.payload,
                businessRating: temporal
            }
        default:
            return state
    }
}

export default allBusinessReducer;