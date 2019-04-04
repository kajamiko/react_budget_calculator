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
        this.handleAddClick = this.handleAddClick.bind(this);

    }
    

    handleAddClick(event) {
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
    }
  
calculateBudget = () => {
    let budget = this.state.totals.income + this.state.totals.expenses;
    let newState = this.state;
    newState.totalBudget = budget;
    this.setState(newState);
    console.log(this.state);
}


// calculateOverallPercentage = () => {
//     let newState, newPerc;
//     newState = this.state;
//     newPerc = (newState.totals.income / newState.totals.expenses) * 100;
//     newState.percentage = newPerc;
//     this.setState(newState);
// }

calculatePercentages = () => {
    let newState = this.state;
    if(newState.totals.expenses > 0 && newState.totals.income > 0) {
        newState.percentage = Math.floor(newState.totals.expenses/  newState.totals.income  * 100);

        this.setState(newState);
    }
     
 }

calculateItemPercentages = () => {
    let newState = this.state;
    newState.expenses.forEach( (elem) => {
        elem.percentage = Math.floor( elem.value / newState.totalBudget * 100);
        console.log(newState.totalBudget);
    });
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
    this.updateBudget();
}



removeItem = (ID, type) => {
    let newState = this.state;
    var ids, index;
            // id = 3
            // ids = [1 4 6 8]
            // because it is not an array of ids but an array of objects. COuld do it the hard way but why
            ids = newState[type].map(function(current) {
                return current.id;
            });
            index = ids.indexOf(parseInt(ID));
            if(index !== -1) {
              newState[type].splice(index, 1);  
            }
    this.setState(newState);
    this.calculateTotal(type);
    this.updateBudget();
}

sortOutExpense = (obj) => {
    //function is about to give a minus sign to a value and later on,
    // to calculate the percentage
    obj.percentage = -1;
    return obj;
}
updateBudget = () => {
    this.calculateBudget();
    this.calculatePercentages();

    this.calculateItemPercentages();
}

render() {
    let income = <RecordsList removeItem={this.removeItem} type="income" dataset={this.state.income}></RecordsList>;
    let expenseList = <RecordsList removeItem={this.removeItem}  type="expenses" dataset={this.state.expenses}></RecordsList>;
    return (
        <div>
            <BudgetOutput 
            budget={this.state.totalBudget}
            percentage={this.state.percentage}
            />
            <RecordForm handleClick={this.handleAddClick.bind(this)} />
            <div className={classes.ListsContainer}>
                {income}
                {expenseList}
            </div>
        </div>
    );
}

}

export default BudgetCalculator;