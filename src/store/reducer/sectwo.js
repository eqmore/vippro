import * as Types from '../action-types';
let initialState = {
        display:"none",
        src:""
}
function reducer(state=initialState,action){
    switch(action.type){
        case Types.SET_AUDIO:
            return {
                ...state,display:action.payload
            }
        
    }
    return state;
}

export default reducer;