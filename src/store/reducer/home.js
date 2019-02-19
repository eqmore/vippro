import * as Types from '../action-types';
let init ={
    lists:[]
}
function home(state=init,action){
    switch(action.type){
        case Types.GET_SLIDER:
            return {...state,lists:action.payload};
        
    }
    return state;
}

export default home;