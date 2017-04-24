/* eslint-disable */

import React, {Component} from 'react';
import Form from './components/form.jsx';
import List from './components/list.jsx'
import styles from './App.css'
import dataList from './components/form.jsx'

class App extends React.Component {
//Constructor/////////////////////////////////////
  constructor(props) {
    super(props);
    this.state = {list:dataList, 
                  id:"", 
                  name:"", 
                  amount:""};


this.onChange = this.onChange.bind(this);
  };

//**********************************//
//onChange input value/////////////////////////////////
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

//List/////////////////////////////////


//********************************* */


  render(){
    return (
      <div className="App">

        <h1>Car Parts Inventory</h1>

        <br/>
        <List changeListName={this.changeListName} changeListAmount={this.changeListAmount}/>
        <br/>
        <Form  handleChange={this.onChange} name={this.state.name} amount={this.state.amount}/>
        

      </div>
    );
  }
}

export default App;
