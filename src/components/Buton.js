import React, { Component } from 'react';
import './buton.css';
class Buton extends Component {
    render() {
        return (
            <div className="buton">
                {this.props.children}
            </div>
        );
    }
}

export default Buton;