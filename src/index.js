import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
// import {Route ,BrowserRouter as Router,Switch} from 'react-router-dom';
import {Route,Router} from './common/ky/router/react-router-dom';

import App from './containers/App';
import Home from './containers/home/Home';
import Classlist from './containers/classlist/Classlist.js';

import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import store from './store';


import Try from './containers/routertry/Try';
import ScrollToTop from './components/ScrollToTop';

/* 
ReactDOM.render(
    <Provider store={store}>
        <Router>
        <ScrollToTop>
            <App>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/classlist' component={Classlist} />
                        <Route path='/try' component={Try} />
                    </Switch>
                
            </App>
            </ScrollToTop>
        </Router>
    </Provider>

    , document.getElementById('root')); */
function Home1(){
    return (<div>home</div>)
}
function List1(){
    return (<div>list</div>)
}
    ReactDOM.render(<Router><Route path='/' exact component={Home1}/>
                            <Route path='/list' exact component={List1}/>
            </Router>,window.root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
