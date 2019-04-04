import React, { Component } from 'react';
import classes from './BudgetRecord.module.css';

class BudgetRecord extends Component {

    clickRemove = () => {
        this.props.removeItem(this.props.id, this.props.type);
    }

    render() {

        let record = null;

        switch(this.props.type){
            case('income'):
            // console.log(this.props.value);
            record = (<div className={classes.BudgetRecord}>
                        <div>{this.props.description}</div>
                        <div>{this.props.value}
                        <button className={classes.RButton}
                        onClick={this.clickRemove}
                        >-</button></div>
                    </div>);
        break;
            case('expenses'):
            record = (<div className={classes.BudgetRecord}>
                        <div>{this.props.description}</div>
                        <div>{this.props.value}  
                        <span className={classes.Perc}>{this.props.percentage} %</span>
                        <button 
                        className={classes.RButton}
                        onClick={this.clickRemove}
                        >-</button>
                        </div>
                    </div>);
        break;
        default:
        record = null;
        break;
        }
        return record;
    }
}

export default BudgetRecord;