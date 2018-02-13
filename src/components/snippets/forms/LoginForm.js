import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from '../../../actions';
import { makeFormErrors, removeElementsByClass } from './FormErrorsHelper'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const form = reduxForm({
  form: 'login'
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    var form = e.target
    var sendData = {
      email: form.email.value,
      password: form.password.value
    }
    this.props.loginUser(sendData, loginSuccess.bind(this), loginError);

    function loginSuccess() {             //
      removeElementsByClass("created")
      if (this.props.loginSuccess) {
        this.props.loginSuccess()
      }

    }

    function loginError(error) {          //
      makeFormErrors(error, form)
    }
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <FormGroup>
          <Label for="formEmail">Email</Label>
          <Input type="email" name="email" id="formEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Hasło</Label>
          <Input type="password" name="password" id="formPassword" placeholder="Hasło" />
        </FormGroup>
        <Button>Zaloguj!</Button>
      </Form>




    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

//export default form(LoginForm)

export default connect(mapStateToProps, { loginUser })(form(LoginForm));  