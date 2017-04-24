/* eslint-disable */
import React, {Component} from 'react';
import List from './list';

class Form extends React.Component {




    render() {
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input name="name" onChange={this.props.handleChange} type="text" value={this.props.name}/>
                        <br/>
                        Amount:
                        <input name="amount" onChange={this.props.handleChange} type="text" value={this.props.amount}/>
                    </label>
                    <input type="button" onClick={this.props.addItem}  value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Form;