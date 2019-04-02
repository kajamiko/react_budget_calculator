import React, { Component } from 'react';
import './App.css';
import BudgetCalculator from './containers/BudgetCalculator/BudgetCalculator';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BudgetCalculator></BudgetCalculator>
      </div>
    );
  }
}

export default App;
