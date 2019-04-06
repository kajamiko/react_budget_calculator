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
        <div className={`${classes.Fieldset} ${classes.TypeWidth}`}>
        <label>Income or expense?</label>
            <select name="type" defaultValue="income" className={`${classes.Input} ${classes.FormType}`} onChange={this.handleInputChange}>
                        <option value="income" >+</option>
                        <option value="expenses">-</option>
            </select>
        </div>
        <div className={`${classes.Fieldset} ${classes.TextOnes}`}>
        <label>Describe it</label>
            <input className={`${classes.Input} ${classes.Element} `}
                name="description" 
                type="text" 
                placeholder="Description" 
                onChange={this.handleInputChange}/>
        </div>
        <div className={`${classes.Fieldset} ${classes.TextOnes}`}>
            <label> Enter the value:</label>
            <input className={`${classes.Input} ${classes.Element} `}
                name="value"
                type="number"
                placeholder="Value"
                onChange={this.handleInputChange} />
          </div>  
          <div className={`${classes.Fieldset} `}>
            <label>Click or hit enter</label>
            <input className={` ${classes.Submit}`}
            type="submit" 
            value="Add"/>
          </div>
      </form>
    );
  }
}

export default RecordForm;