import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reactPromise from 'redux-promise';
import logger from 'redux-logger'
import reducer from './reducer';

let store = createStore(reducer,applyMiddleware(thunk,logger));
window.__store = store;
export default store;