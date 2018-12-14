import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import TextInputField from "./../../Utills/form/TextInputField";
import {
  createValidator,
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import { loginUser } from "./../Auth/User/userActions";
import { withRouter } from "react-router-dom";

//
// ──────────────────────────────────────────────────────────── I ──────────
//   :::::: V A L I D A T I O N : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//

const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  "Invalid email address"
);

const validate = combineValidators({
  email: composeValidators(
    isRequired({ message: "Email is Required" }),
    isValidEmail
  )(),
  password: composeValidators(
    isRequired({ message: "password is Reguired" }),
    hasLengthGreaterThan(5)({
      message: "password must be atleast 6 characters"
    })
  )()
});
// ────────────────────────────────────────────────────── II ──────────
//   :::::: A C T I O N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
const actions = {
  loginUser
};

class LoginForm extends Component {
  onFormSubmit = values => {
    this.props.loginUser(values).then(user => {
      if (this.props.loginSuccess.loginSuccess.loginSucces) {
        this.props.history.push("/user/dashboard");
      } else {
        this.props.history.push("/register_login");
      }
    });
  };
  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      reset,
      invalid,
      error
    } = this.props;
    return (
      <div className="sigin_wrapper">
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <label>Email</label>

          <Field
            name="email"
            component={TextInputField}
            type="text"
            placeholder="Email Address"
          />
          <Field
            name="password"
            component={TextInputField}
            type="password"
            placeholder="password"
          />
          {error && error}
          <button type="submit" disabled={pristine || submitting || invalid}>
            Login
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
        </form>
      </div>
    );
  }
}

const mapState = state => ({
  loginSuccess: state.user
});

LoginForm = connect(
  mapState,
  actions
)(LoginForm);

export default reduxForm({
  form: "loginForm",
  validate
})(withRouter(LoginForm));
