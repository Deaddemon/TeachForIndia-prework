import { VOLUNTEER_LIST_SUCCESS, 
    VOLUNTEER_LIST_REQUEST, 
    VOLUNTEER_LIST_FAIL, 
    VOLUNTEER_CREATE_FAIL,
     VOLUNTEER_CREATE_REQUEST, 
     VOLUNTEER_CREATE_SUCCESS }
     from "../constants/volunteersConstant.js";

export const volunteerListReducer = ( 
    state = { volunteers: []} , action
) => {
    switch ( action.type ){
        case VOLUNTEER_LIST_REQUEST:
            return { loading : true };
        case VOLUNTEER_LIST_SUCCESS:
            return { loading : false , volunteers: action.payload };
        case VOLUNTEER_LIST_FAIL:
            return { loading : false , error: action.payload};
        
        
        default:
            return state;
    }
};



export const volunteerCreateReducer = ( 
    state = { } , action
) => {
    switch ( action.type ){
        case VOLUNTEER_CREATE_REQUEST:
            return { loading : true };
        case VOLUNTEER_CREATE_SUCCESS:
            return { loading : false , success: true };
        case VOLUNTEER_CREATE_FAIL:
            return { loading : false , error: action.payload};
        
        
        default:
            return state;
    }
};

 