/* eslint-disable */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
//List//////////////////
let dataList = [
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

class List extends Component {
    render() {

        var newlist = dataList.map(item => <li>
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