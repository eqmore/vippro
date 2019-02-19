import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {Route ,BrowserRouter as Router,Switch} from 'react-router-dom';

import App from './containers/App';
import Home from './containers/home/Home';
import Classlist from './containers/classlist/Classlist.js';

import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import store from './store';




ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/classlist' component={Classlist} />
                        {/* <Route exact path="/" render={()=>(<div>home</div>)} />
                        <Route exact path="/classlist" render={()=>(<div>list</div>)} /> */}
                    </Switch>
                
            </App>
        </Router>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
