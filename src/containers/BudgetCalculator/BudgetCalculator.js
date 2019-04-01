import React, { Component } from 'react';
import classes from './BudgetCalculator.module.css';
import RecordsList from '../RecordsList/RecordsList';

class BudgetCalculator extends Component {

    state = {
        incomes: [],
        expenses: [],
        totalBudget: 0,
        percantage: 0
    }
render() {
    incomesList = null;
    expenseList = null;
    return (
        <div>
            {incomesList}
            {expenseList}
        </div>
    );
}

}

export default BudgetCalculator;