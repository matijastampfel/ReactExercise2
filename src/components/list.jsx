/* eslint-disable */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from './form';

//List//////////////////


class List extends React.Component {


    render() {
//does not function
      

        var newlist = this.props.dataList.map(item => <li  key={item.name}>
            <p>{item.name} </p> ,
            <p>{item.amount}</p> <button onClick ={this.props.handleClick}> Select </button></li>)

        return (
            <div>
                <ol>
                    {newlist}
                </ol>
            </div>
        );
    }
}

export default List;
