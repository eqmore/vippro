import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import {Route ,BrowserRouter as Router,Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Home from './containers/home/Home';
import Classlist from './containers/classlist/Classlist.js';

ReactDOM.render(<App>
    <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/classlist' component={Classlist} />
        </Switch>
    </Router>

</App>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
