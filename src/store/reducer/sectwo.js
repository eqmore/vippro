import * as Types from '../action-types';
let initialState = {
        display:"none",
        src:""
}
function reducer(state=initialState,action){
    switch(action.type){
        case Types.SET_AUDIO:
        console.log(2)
            return {
                ...state,display:"block"
            }
        
    }
    return state;
}

export default reducer;