/* eslint-disable */

import React, {Component} from 'react';
import Form from './components/form.jsx';
import List from './components/list.jsx'
import styles from './App.css'

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




class App extends React.Component {
//Constructor/////////////////////////////////////
  constructor(props) {
    super(props);
    this.state = {list:dataList,
                  id:"", 
                  name:"", 
                  amount:""};

this.add = this.add.bind(this);
this.onChange = this.onChange.bind(this);
this.select = this.select.bind(this);
  };

//**********************************//
//onChange input value///////create value //// updating//////////////////////////
onChange(e){
  var inp = e.target
  

    if(inp.name === "name"){
            this.setState({
                name: inp.value
            });
        }
        else if (inp.name === "amount"){
            this.setState({
                amount: inp.value
            });
        }
    };
  




//************************************//

//add/////////////////////////////////
add(e){

  var oldList = this.state.list;
  console.log(this.state);
  var obj =  [{name:this.state.name, amount:this.state.amount}];

this.setState ({
  list: oldList.concat(obj)
});

}




//********************************* */

//select////////////////////////////

select(e){
var sel = e.target.parentNode
console.log(sel)
var name = sel.children[0].textContent;
var amount = sel.children[1].textContent;
this.setState ({
  name: name,
  amount:amount
})




}


//********************************** */


  render(){
    return (
      <div className="App">

        <h1>Car Parts Inventory</h1>

        <br/>
        <List handleClick={this.select} dataList={this.state.list} changeListName={this.changeListName} changeListAmount={this.changeListAmount}/>
        <br/>
        <Form  addItem={this.add} handleChange={this.onChange} name={this.state.name} amount={this.state.amount}/>
        

      </div>
    );
  }
}

export default App;
