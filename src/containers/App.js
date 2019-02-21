import React, { Component } from 'react';
import Nav from '../components/Navbar';
import {withRouter} from 'react-router-dom';

import Clock from '../components/Clock';
import Form from '../components/Form';
import Temprature from '../components/Temprature';

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                {/* <Nav /> */}
                <Clock date={new Date()} />
                <Form />
                <Temprature/>
            </div>
        );
    }
}

export default App;