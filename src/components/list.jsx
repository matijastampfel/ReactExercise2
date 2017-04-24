/* eslint-disable */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
//List//////////////////
var dataList = [
    {
        name: "Tire",
        amount: 5426
    }, {
        name: "Front sensor",
        amount: 45845
    }, {
        name: "mirror",
        amount: 6465432
    }
]

class List extends React.Component {
    render() {
//does not function
        

        var newlist = dataList.map(item => <li key={item.name}>
            {item.name}
            {item.amount}</li>)

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
