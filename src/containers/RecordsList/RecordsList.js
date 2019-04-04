import React, { Component } from 'react';
import BudgetRecord from '../../components/BudgetRecord/BudgetRecord';
import classes from './RecordsList.module.css';

class RecordsList extends Component {
    render() {

    let type = this.props.type;
    // console.log(el.value); 
    let recordlist = this.props.dataset.map( (el, index) => {
        let key = type + '-' + index;
        // console.log(el.value);
        return <BudgetRecord 
                type={type}
                key={key} 
                id={el.id}
                value={el.value}
                description={el.description}
                percentage={el.percentage}
                removeItem={this.props.removeItem}
                >  </BudgetRecord>
    });
    return (<div className={classes.RecList}>
                {recordlist}
            </div>);

    // return <div><BudgetRecord type="income"></BudgetRecord></div>

}   
    }

export default RecordsList;