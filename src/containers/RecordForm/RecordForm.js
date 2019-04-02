import React, {Component} from 'react';
import BudgetRecordInput from '../../components/BudgetRecordInput/BudgetRecordInput';
import classes from './RecordForm.module.css';

class RecordForm extends Component {
    render() {
        return (
            <div>
            <BudgetRecordInput type="type"/>
            <BudgetRecordInput type="description"/>
            <BudgetRecordInput type="value"/>
            </div>
        );
    }
}

export default RecordForm;