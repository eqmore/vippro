import React, { Component } from 'react';
import Nav from '../components/Navbar';
import {withRouter} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Nav />
            </div>
        );
    }
}

export default App;