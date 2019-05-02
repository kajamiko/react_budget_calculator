import React from 'react';
import classes from './BudgetOutput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDizzy } from '@fortawesome/free-solid-svg-icons'

const BudgetOutput = (props) => {

   let perc;
   if (typeof props.percentage == "number") {
       perc = <h3>{props.percentage}%</h3>;
   }else{
       perc = <h3><FontAwesomeIcon icon={faDizzy} /></h3>
   }
    console.log();
    return (
        <div className={classes.InfoDiv}>
            <div><h3>Your budget for {props.date[0]}  {props.date[1]} </h3></div>
                <div className={classes.BudgetDiv}>
                    <div className={classes.BudgetBox}><h2>{props.budget}</h2></div>
                    <div className={`${classes.PerBox} ${classes.BudgetBox}`}>
                {perc}
                </div> 
            </div>    
        </div>
    );
}

export default BudgetOutput;