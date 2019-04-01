import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';


import Input from '../components/UI/Input/Input';
import form from '../assets/formConfig.json';

class Authentication extends Component {
  state = {
    formData: this.props.location.pathname === '/register' ?  {...form.register} : {...form.signIn},
    formIsValid: false,
    formSubmission: false
  }

  sendForm = ( event ) => {
    this.setState({
      formSubmission: true
    })
    console.log(this.state);
    event.preventDefault();
    //   const formData = {};
    //
    //   for (let formElementIdentifirer in this.state.formData) {
    //   formData[formElementIdentifirer] = this.state.formData[formElementIdentifirer].value
    //   }
    //
    //   const order = {
    //     ingredients: this.props.ings,
    //     price: this.props.price,
    //     orderData: formData
    //   }
    //
    //   this.props.onOrderBurger(order);
  }

  checkValidity(value, rules) {
    console.log('checkValidity');
    let isValid = true;

    if(!rules) {
      return true
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid
  }


  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.formData
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }

    updatedFormElement.value = event.target.value; // change value
    updatedOrderForm[inputIdentifier] = updatedFormElement; //store in new object


    updatedFormElement.touched = true; // input has been touched

    if(this.state.formSubmission && updatedFormElement[inputIdentifier] !== 'password') {
      updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation); //validate input
    }

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    this.setState ({
      formData: updatedOrderForm,
      formIsValid: formIsValid
    })
  }


  render() {
    const formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      })
    }
    let formInputs = (
      <div>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            valid={formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
        ))}
      </div>
    )
    let form = (
      <form onSubmit={this.sendForm}>
        {formInputs}
        <button type="submit">Submit</button>
      </form>
    );

    return(
      <div >
        {form}

      </div>
    )
  }
}

export default Authentication;
