import React from 'react';
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={value:'coconut'};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value})
    }
    handleSubmit(event){
        alert('choice:'+this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="">
                    pick your item
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">grapefruit</option>
                        <option value="lime">lime</option>
                        <option value="coconut">coconut</option>
                        <option value="mango">mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Form;



