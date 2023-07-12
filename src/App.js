import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      name:"Mbizi"
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Hello {this.state.name}
          </p>   
          <button>Click me</button>
        </header>
      </div>
    );
  }  
 }
export default App;
