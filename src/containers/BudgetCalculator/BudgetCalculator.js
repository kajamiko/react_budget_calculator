import React, { Component } from 'react';
import classes from './BudgetCalculator.module.css';
import RecordsList from '../RecordsList/RecordsList';
import BudgetRecordInput from '../../components/BudgetRecordInput/BudgetRecordInput';

class BudgetCalculator extends Component {

    state = {
        income: [
            {
                description: "some desc",
                value: "1000"
            },
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
        percantage: 0
    }
render() {
    let income = <RecordsList type="income" dataset={this.state.income}></RecordsList>;
    let expenseList = <RecordsList type="expenses" dataset={this.state.expenses}></RecordsList>;
    return (
        <div>
            <BudgetRecordInput></BudgetRecordInput>
            <div className={classes.ListsContainer}>
                {income}
                {expenseList}
            </div>
        </div>
    );
}

}

export default BudgetCalculator;