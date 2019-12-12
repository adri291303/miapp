import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.slim';
import 'popper.js';
import './App.css';

//components

import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Form from './Components/Form';

class App extends Component {
  constructor(){
    super()
    this.state = {
      message: "Bienvenido a mi App de React"
    }
  }
  componentDidMount(){
    console.log("Este es el DidMount");
    this.setState ({
      message: "Bienvenido a mi App de React"
    });
  }

  render () {
  return (
    <div className="App">
      <Navbar />
      <div>
      <h2>{this.state.message}</h2>
      </div>
      <Card />
      <Form />
    </div>
  );
 }
};

export default App;
