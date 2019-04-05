import React from 'react';
import classes from './BudgetOutput.module.css';

const BudgetOutput = (props) => {

   
    console.log();
    return (
        <div className={classes.InfoDiv}>
            <div><h3>Your budget for {props.date[0]}  {props.date[1]} </h3></div>
                <div className={classes.BudgetDiv}>
                    <div><h2>{props.budget}</h2></div>
                    <div className={classes.PerBox}>
                <h3>{props.percentage}%</h3>
                </div> 
            </div>    
        </div>
    );
}

export default BudgetOutput;