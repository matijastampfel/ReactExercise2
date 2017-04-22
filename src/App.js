/* eslint-disable */

import React, { Component } from 'react';
import Form from './components/form.jsx';
import List from './components/list.jsx'
import styles from './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">

      <h1>Car Parts Inventory</h1> 

      <br/>
      <List/>
      <br/>
      <Form/>
        
      </div>
    );
  }
}

export default App;
