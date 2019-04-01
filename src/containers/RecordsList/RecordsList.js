import React, { Component } from 'react';
import BudgetRecord from '../../components/BudgetRecord/BudgetRecord';
import classes from './RecordsList.module.css';

class RecordsList extends Component {
    render() {

    const type = this.props.type;
    let recordlist = this.props[type].map();
}
    }

export default RecordsList;