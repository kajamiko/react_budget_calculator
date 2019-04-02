import React, { Component } from 'react';
import classes from './BudgetCalculator.module.css';
import RecordsList from '../RecordsList/RecordsList';
import RecordForm from '../RecordForm/RecordForm';

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
        let type =  event.target.type.value;
        let nobj = {
                         description: event.target.description.value,
                          value:  event.target.value.value}
        if (type && nobj.description && nobj.value) {
            console.log("worked");
            this.addItem(nobj, type);
        }
        event.preventDefault();
      };

addItem = (obj, type) => {
    let newState = this.state;
    if(type === "expenses"){
        obj = this.sortOutExpense(obj);
    }
    newState[type].push(obj);
    console.log(newState);
    this.setState(newState);
}

sortOutExpense = (obj) => {
    //function is about to give a minus sign to a value and later on,
    // to calculate the percentage
    let val = parseInt(obj.value);
    obj.value = val / -1;
    obj.percentage = -1;
    return obj;
}


render() {
    let income = <RecordsList type="income" dataset={this.state.income}></RecordsList>;
    let expenseList = <RecordsList type="expenses" dataset={this.state.expenses}></RecordsList>;
    return (
        <div>
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