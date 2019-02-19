import {combineReducers} from 'redux';

import sectwo from './sectwo';
import home from './home';

let reducer = combineReducers({
    sectwo,
    home
})

export default reducer;