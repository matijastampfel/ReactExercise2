/* eslint-disable */
import React, { Component } from 'react';
import List from './list';

class Form extends Component {

    

    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.state ={amount: ''}
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                         Name of part:
                        <input type="text" name="name" name={this.state.name} onChange={this.handleChange} />
                        Amount:
                        <input type="text" name="amount" amount={this.state.amount} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <br/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;