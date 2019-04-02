import React from 'react';
import classes from './BudgetRecordInput.module.css';

const BudgetRecordInput = (props) => {

    return (
        <div className={classes.Form}>
            <select defaultValue="income" className={classes.FormType}>
                <option value="income" >+</option>
                <option value="expenses">-</option>
            </select>
            <input className={classes.FormInput} type="text" placeholder="Description" />
            <input className={classes.FormInput} type="number" placeholder="Value" />
        </div>
    );

}
export default BudgetRecordInput;