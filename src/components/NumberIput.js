import React, { Component } from 'react';

class NumberIput extends Component {
    constructor(){
        super();

    }
    
    input=(ev)=>{
        // console.log(ev.target.value);
        ev.target.value = ev.target.value.replace(/[^1-9]/g,'');
        this.props.getvalue(ev.target.value,this.props.keyy);
    }//可以把value定义在父级组件上,onChange时候调用getvalue 在父组件getValue中setstate,把key 传出去
    render() {
        return (
            <input type="text" onChange={this.input}></input>
        );
    }
}

export default NumberIput;