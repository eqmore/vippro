import React, { Component } from 'react';
import Nav from '../components/Navbar';
import {withRouter} from 'react-router-dom';

import Clock from '../components/Clock';
import Form from '../components/Form';
import Temprature from '../components/Temprature';
import NumberIput from '../components/NumberIput';

class App extends Component {
    getvalue = (v,key)=>{
        console.log(v,key)
    }
    render() {
        return (
            <div>
                {this.props.children}
                <Nav />
                
                {/* <Clock date={new Date()} /> */}
                {/* <Form />
                <Temprature/> */}
                {/* <NumberIput getvalue={this.getvalue} style={{border:'solid 1px black'}} keyy={"input1"}></NumberIput>
                <NumberIput getvalue={this.getvalue} style={{border:'solid 1px black'}} keyy ={"input2"}></NumberIput> */}

            </div>
        );
    }
}

export default App;