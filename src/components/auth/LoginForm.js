import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from '../../actions';
import $ from 'jquery';
import {Validation} from './FormErrorsHelper'

const form = reduxForm({
  form: 'login'
});
//<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
class LoginForm extends Component {
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  formSubmit(e) {
    e.preventDefault();

    var form = e.target
    var sendData = {
      email: form.email.value,
      password: form.password.value
    }
    this.props.loginUser(sendData, loginSuccess, loginError);

    function deleteInsered(className) {
      $('.' + className + '').remove();
    }

    function loginSuccess() {             //
      deleteInsered("created")
      console.log("udalo sie zalogowac")
    }

    function loginError(error) {          //
      deleteInsered("created")

      createNonFieldErrors();
      createFieldErrors();
      function createNonFieldErrors() {
        if (!error.non_field_errors) return
        var nonFieldErrors = error.non_field_errors;

        var errDiv = document.createElement("div");
        errDiv.className = "alert alert-danger created";
        errDiv.setAttribute("role", "alert");
        for (var i in nonFieldErrors) {
          var err = nonFieldErrors[i]

          var div = document.createElement("div")
          div.className = "created"
          div.innerText = err
          errDiv.append(div)

        }
        form.insertBefore(errDiv, form.firstChild)
      }

      function createFieldErrors() {


        var inputs = form.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; ++i) {
          var input = inputs[i]
          var myErrors = error[input.name]
          input.classList.remove('is-valid')
          input.classList.remove('is-invalid')

          if (!myErrors) {
            input.className += " is-valid"
          } else {
            input.className += " is-invalid"
            for (var j in myErrors) {
              var myError = myErrors[j]
              var errDiv = document.createElement("div");
              errDiv.className = "invalid-feedback created";
              errDiv.innerText = myError;
              input.parentElement.append(errDiv)
            }
          }
        }

      }


    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit.bind(this)}>

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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, { loginUser })(form(LoginForm));  