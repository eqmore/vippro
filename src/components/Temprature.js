import React, { Component } from 'react';



class Temprature1 extends Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}


class Temprature extends Component {
    constructor(){
        super();
        this.state ={
            value:"",
            hvalue:""
        }
    }
    handleC=(ev)=>{
        this.setState({
            value:parseFloat(ev.target.value),
            hvalue:parseFloat(ev.target.value/2)
        })
    }
    handleH=(ev)=>{
        this.setState({
            value:parseFloat(ev.target.value*2),
            hvalue:parseFloat(ev.target.value)
        }
        )
    }
    render() {
        return (
            <div>
                <form>
                    <input type="number" value={this.state.value}
                    onChange = {this.handleC}/>
                    <input type="number" value={this.state.hvalue}
                    onChange = {this.handleH}
                    />
                    <Temprature1 value={this.state.value} />
                </form>
            </div>
        );
    }
}

export default Temprature;