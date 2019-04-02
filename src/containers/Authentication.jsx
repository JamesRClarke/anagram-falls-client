import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';


import Input from '../components/UI/Input/Input';
import Divider from '../components/UI/Divider/Divider';
import Button from '../components/UI/Button/Button';
import Oauth from '../components/Oauth/Oauth';
import form from '../assets/formConfig.json';

class Authentication extends Component {

  checkForPage = () => {
    return this.props.location.pathname.slice(1);
  }

  state = {
    formData: this.checkForPage() === 'register' ?  {...form.register} : {...form.signIn},
    formIsValid: false,
    formSubmission: false
  }

  sendForm = ( event ) => {
    this.setState({
      formSubmission: true
    })
    event.preventDefault();
  }

  checkValidity(value, rules) {
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
    const path = this.checkForPage();
    let formClass = path === 'register' ? 'register' : 'login';

    const authTitles = {
      register: 'Register an',
      login: 'Login to your'
    }

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
      <form onSubmit={this.sendForm} className="w-100">
        {formInputs}
        <Button class="btn basic" >{authTitles[path].replace(/ .*/,'')}</Button>
      </form>
    );

    return(
      <div className="container">
        <div className="row" >
          <div className={`d-flex align-items-center justify-content-between flex-column col-12 col-md-5 ${formClass} text-center`}>
            <h5 className="mb-4">{authTitles[path]} account...</h5>
            {form}
          </div>

          <div className="my-3 my-md-0 py-3 px-4 p-md-0 col-12 col-md-2">
            <Divider/>
          </div>

          <div className="col-12 col-md-5 d-flex align-items-center flex-column text-center">
            <div className="w-100 ">
              <h5 className="mb-4">{authTitles[path]} account with...</h5>
              <Oauth />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Authentication;
