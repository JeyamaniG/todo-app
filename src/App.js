import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import CounterButton from './components/counter/CounterButton';

class App extends Component{
  render(){
    return (
    <div className="App">
      Todo Application 
      <Counter />
      <CounterButton />
      <First />
      <Third />
    </div>
  );
}
}

class First extends Component{
    render(){
      return(
        <div className="First">
          First
        </div>
      );
  }
}

function Third(){
  return(
    <div className="Third">
      Third
    </div>
  );
}

export default App;
