import React, { Component } from 'react';
import Nav from '../components/Navbar';

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