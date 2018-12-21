import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
  state = {
    numQuestions: 0,
    numCorrect: 0
  }
 
  updateResult = (isRight) => {
    console.log(isRight);
    this.setState((currentState) => ({
      numQuestions: (currentState.numQuestions + 1),
      numCorrect: isRight ? (currentState.numCorrect + 1) : (currentState.numCorrect)
    }))
    console.log(this.state);
  }
 
  render() {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick = {() => this.updateResult(value1 + value2 + value3 == proposedAnswer)}>True</button>
          <button onClick = {() => this.updateResult(value1 + value2 + value3 == proposedAnswer)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
