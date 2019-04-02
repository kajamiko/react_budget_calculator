import React, {Component} from 'react';
import classes from './RecordForm.module.css';

class RecordForm extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//         type: null,
//        description: null,
//        value: null
//       };

//     this.changeHandler = this.changeHandler .bind(this);
//   }

//   changeHandler (event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     console.log(event.target.name);
//     this.setState({
//       [name]: value
//     });
//   }
  
   
//     render() {
//         return (
//             <div>
//             <BudgetRecordInput name="type" type="type" onChange={this.changeHandler}/>
//             <BudgetRecordInput name="description" type="description" onChange={this.changeHandler}/>
//             <BudgetRecordInput name="value" type="value" onChange={this.changeHandler}/>
//             </div>
//         );
//     }

constructor(props) {
    super(props);
this.state = {
                type: null,
               description: null,
               value: null
              };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(event.target.name);
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form>
        <select name="type" defaultValue="income" className={classes.FormType} onChange={this.handleInputChange}>
                     <option value="income" >+</option>
                     <option value="expenses">-</option>
                 </select>
            <input 
                name="description" 
                className={classes.FormInput} 
                type="text" 
                placeholder="Description" 
                onChange={this.handleInputChange}/>

          <input
            name="value"
            type="number"
            // value={this.state.numberOfGuests}
            placeholder="Value"
            onChange={this.handleInputChange} />

      </form>
    );
  }
}

export default RecordForm;