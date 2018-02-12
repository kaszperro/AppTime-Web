import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from '../../../actions';
import $ from 'jquery';
import {makeFormErrors} from './FormErrorsHelper'

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

    function deleteInsered(className) {
      $('.' + className + '').remove();
    }

    function loginSuccess() {             //
      deleteInsered("created")
      if(this.props.loginSuccess) {
        this.props.loginSuccess()
      }
      
    }

    function loginError(error) {          //
      makeFormErrors(error, form)
    }
  }

  render() {
    return (
        <form onSubmit={this.formSubmit}>

          <div className="form-group">
            <label>Email</label>
            <Field placeholder="email" name="email" className="form-control" component="input" type="text" />
          </div>

          <div className="form-group">
            <label>Hasło</label>
            <Field name="password" className="form-control" component="input" type="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
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