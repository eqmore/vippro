import React, { Component } from 'react';
import './butonorange.css';
class Buton extends Component {
    render() {
        return (
            <div className="orange">
                {this.props.children}
            </div>
        );
    }
}

export default Buton;