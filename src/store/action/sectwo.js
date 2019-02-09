import * as Types from '../action-types';

let actions ={
    playaudio(src){
        return {type:Types.SET_AUDIO,src};
    }
}

export default actions;