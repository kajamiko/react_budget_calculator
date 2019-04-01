import React, { Component } from 'react';
import classes from './BudgetRecord.module.css';

class BudgetRecord extends Component {

    render() {

        let record = null;

        switch(this.props.type){
            case('income'):
            record = <div>
            <h4>Salary<span>1500</span></h4>
        </div>
            case('expense'):
            record = <div>
            <h4>Holidays<span>1500</span> <span>{this.props.percentage}</span></h4>
        </div>
        }
        return record;
    }
}

export default BudgetRecord;