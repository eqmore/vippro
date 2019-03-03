import React, { Component } from 'react';
import {Consumer} from './index';

import PathExp from 'path-to-regexp';
class Route extends Component {
    render() {
        return (
            <Consumer>
                {state=>{
                    let {path,component:Component,exact} = this.props;
                    let pathname = state.location.path;
                    let reg = PathExp(path,[],{end:exact});
                    // console.log(path,state.location.path);
                    if(reg.test(pathname)){
                        return <Component/>;
                    }else{
                        return null;
                    }
                }}
            </Consumer>
        );
    }
}

export default Route;