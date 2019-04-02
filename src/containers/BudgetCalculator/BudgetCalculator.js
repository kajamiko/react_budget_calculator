import React, { Component } from 'react';
import classes from './BudgetCalculator.module.css';
import RecordsList from '../RecordsList/RecordsList';
import RecordForm from '../RecordForm/RecordForm';

class BudgetCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            income: [
                {
                    description: "Salary",
                    value: "1800" 
                }
            ],
            expenses: [
                {
                    description: "some expense",
                    value: "500",
                    percentage: -1
                }
            ],
            totalBudget: 0,
            percentage: 0
        }
        this.handleClick = this.handleClick.bind(this);

    }
    

    handleClick(event) {
        // creating new object needed, after validation passing to parent state
        let newObject = {
             type: nevent.target.type.value,
                         description: event.target.description.value,
                          value:  event.target.description.value}
        if (type && description && value) {
            console.log("worked");
            if (type === "income") {

            }
        }
        // console.log(event.target.value.value);
        // console.log(event.target.description.value);
        // console.log(event.target.description.value);
        event.preventDefault();
      };

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