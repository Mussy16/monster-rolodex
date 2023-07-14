import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      name: {firstName:"Tafadzwa",lastNme:"Musianchirevo"},
      company: "Glow"
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Hello {this.state.name.firstName},
           {this.state.name.lastNme},
           I work at {this.state.company}
          </p>   
          <button onClick={()=>{
            this.setState({name :"Aphonso"})
          }}>Click me</button>
        </header>
      </div>
    );
  }  
 }
export default App;
