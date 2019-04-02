import React, {Component} from 'react';
import classes from './RecordForm.module.css';

class RecordForm extends Component {
  
constructor(props) {
    super(props);
this.state = {
                type: null,
               description: null,
               value: null
              };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

//   handleClick(event) {
      
//     console.log("Worked");
//     event.preventDefault();
//   };


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

  }
  render() {
    return (
      <form onSubmit={this.props.handleClick} className={classes.Form}>
        <select name="type" defaultValue="income" className={`${classes.Input} ${classes.FormType}`} onChange={this.handleInputChange}>
                     <option value="income" >+</option>
                     <option value="expenses">-</option>
                 </select>
            <input className={`${classes.Input} ${classes.Element} ${classes.TextOnes}`}
                name="description" 
                type="text" 
                placeholder="Description" 
                onChange={this.handleInputChange}/>

          <input className={`${classes.Input} ${classes.Element} ${classes.TextOnes}`}
            name="value"
            type="number"
            placeholder="Value"
            onChange={this.handleInputChange} />
        <input className={`${classes.Input} ${classes.Submit}`}
        type="submit" 
        value="Add"/>
      </form>
    );
  }
}

export default RecordForm;