import * as Types from '../action-types.js';
import {getSlidersAPI} from '../../api/home';
let actions = {
    getSliders(){
        return function(dispatch,getState){
            console.log(1);
            // console.log(getSlidersAPI().then);
            if(getSlidersAPI().then){
            dispatch({type:Types.GET_SLIDER,payload:getSlidersAPI()});
            }
        }
    }
}

export default actions;