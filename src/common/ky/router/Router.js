import React, { Component } from 'react';
import {Provider} from './index';
class Router extends Component {
    constructor(){
        super();
        this.state ={
            location:{
                path:''
            }
        }
    }

    componentDidMount(){
        window.location.hash = window.location.hash || '/';
        window.addEventListener('hashchange',()=>{
            this.setState({
                ...this.state,
                location:{
                    ...this.state.location,
                    path:window.location.hash.slice(1)
                }
            })
        })
    }
    render() {
        let value = {location:this.state.location};
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        );
    }
}

export default Router;