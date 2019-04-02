import React from 'react';
import classes from './BudgetRecordInput.module.css';

const BudgetRecordInput = (props) => {

    
    // return (
    //     <div className={classes.Form}>
    //         <select defaultValue="income" className={classes.FormType}>
    //             <option value="income" >+</option>
    //             <option value="expenses">-</option>
    //         </select>
    //         <input name="description" className={classes.FormInput} type="text" placeholder="Description" />
    //         <input name="value" className={classes.FormInput} type="number" placeholder="Value" />
    //         <input type="submit" onClick={() => this.props.added() } value="submit" className={classes.Button}/>
    //     </div>
    // );
    let input = null;
    switch(props.type){
    case('type'):
        input =  <select defaultValue="income" className={classes.FormType}>
                     <option value="income" >+</option>
                     <option value="expenses">-</option>
                 </select>
                 break;
    case('description'):
        input =  <input name="description" className={classes.FormInput} type="text" placeholder="Description" />
        break;
    case('value'):
        input = <input name="value" className={classes.FormInput} type="number" placeholder="Value" />
        break;
    default: 
        input = null;
        break;
    }
    return input;
   
}
export default BudgetRecordInput;