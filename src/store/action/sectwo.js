import * as Types from '../action-types';

let actions ={
    playaudio(payload){
        return {type:Types.SET_AUDIO,payload};
    }
}

export default actions;