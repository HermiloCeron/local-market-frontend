const initialState={
    allLocal:[],
    businessRating: [],
    currentBusiness: {
        id: 0,
        businessId: 0,
        name: "Loading",
        description: "",
        address: "",
        webpage: "",
        facebook: "",
        instagram: "",
        whatsapp: "",
        photo: "",
        telephone: "",
        foodCategory: "",
        ownerId: 0,
        location: ""
      }
}

const allBusinessReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SAVE_BUSINESS': 
        const temporal=action.payload.map((business)=>{
            let businessRating=0.0;
            if(business.Ratings.length>0){
                let RatingsArray=business.Ratings.map(rate=>rate.rating)
                businessRating=RatingsArray.reduce((acc,curr)=>acc+curr,0);
                businessRating=parseFloat(businessRating)/parseFloat(business.Ratings.length);
            }
            else{
                businessRating="No rated"
            }
            return(businessRating);
        });       
            return {
                ...state,
                allLocal: action.payload,
                businessRating: temporal
            }
        case 'SAVE_CURRENT_BUSINESS': 
            return {
                ...state,
                currentBusiness: action.payload
            }
        default:
            return state
    }
}

export default allBusinessReducer;