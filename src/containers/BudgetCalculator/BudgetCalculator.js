import React, { Component } from 'react';
import classes from './BudgetCalculator.module.css';
import RecordsList from '../RecordsList/RecordsList';
import RecordForm from '../RecordForm/RecordForm';
import BudgetOutput from '../../components/BudgetOutput/BudgetOutput';

class BudgetCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            income: [],
            expenses: [],
            totalBudget: 0,
            percentage: 0,
            totals: {income: null, expenses: null}
        }
        this.handleClick = this.handleClick.bind(this);

    }
    

    handleClick(event) {
        // creating new object needed, after validation passing to parent state
        let type, nobj, ID;
        type =  event.target.type.value;
        nobj = {
                         description: event.target.description.value,
                          value:  parseInt(event.target.value.value)}
        if (type && nobj.description && nobj.value) {
            if(this.state[type].length > 0)
                {
                   ID = this.state[type][this.state[type].length - 1].id + 1;  
                }else {
                    ID = 0;
                }
            nobj.id = ID;
            this.addItem(nobj, type);
        }
        event.preventDefault();
      };

calculateTotal = (type) => {
    let total, _copy;
    total = 0;
    _copy = this.state;
    _copy[type].forEach(function(elem) {
        total += elem.value;
    });
    
    // // copy and update the state
    _copy.totals[type] = total;
    this.setState(_copy);
    console.log(this.state.totals);
    }
  
calculateBudget = () => {
    let budget = this.state.totals.income + this.state.totals.expenses;
    console.log(budget);
    let newState = this.state;
    newState.totalBudget = budget;
    this.setState(newState);
    console.log(this.state);
}


calculateOverallPercentage = () => {
    let newState, newPerc;
    newState = this.state;
    newPerc = (newState.totals.income / newState.totals.expenses) * 100;
    newState.percentage = newPerc;
    this.setState(newState);
}

addItem = (obj, type) => {
    let newState = this.state;
    if(type === "expenses"){
        obj = this.sortOutExpense(obj);
    }
    newState[type].push(obj);
    this.setState(newState);
    // recalculate total of each array
   
    this.calculateTotal(type);
    this.calculateBudget();
}

sortOutExpense = (obj) => {
    //function is about to give a minus sign to a value and later on,
    // to calculate the percentage
    let val = obj.value;
    obj.value = val / -1;
    obj.percentage = -1;
    return obj;
}


render() {
    let income = <RecordsList type="income" dataset={this.state.income}></RecordsList>;
    let expenseList = <RecordsList type="expenses" dataset={this.state.expenses}></RecordsList>;
    return (
        <div>
            <BudgetOutput 
            budget={this.state.totalBudget}
            percentage={this.state.percentage}
            />
            <RecordForm handleClick={this.handleClick.bind(this)} />
            <div className={classes.ListsContainer}>
                {income}
                {expenseList}
            </div>
        </div>
    );
}

}

export default BudgetCalculator;