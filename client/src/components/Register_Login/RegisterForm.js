import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

import TextInputField from "./../../Utills/form/TextInputField";
import { connect } from "react-redux";
import {
  createValidator,
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan,
  matchesField
} from "revalidate";

// Actions
import { registerUser } from "../Auth/User/userActions";

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
  firstName: isRequired("FirstName"),
  lastName: isRequired("LastName"),
  email: composeValidators(
    isRequired({ message: "Email is Required" }),
    isValidEmail
  )(),
  password: composeValidators(
    isRequired({ message: "password is Reguired" }),
    hasLengthGreaterThan(5)({
      message: "password must be atleast 6 characters"
    })
  )(),
  confirmPassword: matchesField("password")({
    message: "Passwords do not match"
  })
});

class RegisterForm extends Component {
  onFormSubmit = async values => {
    await this.props.registerUser(values);
    if (this.props.Succes.registerSuccess) {
      this.props.history.push("/register_login");
    } else {
      this.props.history.push("/register");
    }
  };
  render() {
    const { handleSubmit, pristine, submitting, reset, invalid } = this.props;
    return (
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <h2>Personal Information</h2>
                <div className="form_block_two">
                  <div className="block">
                    <label>First Name</label>
                    <Field
                      name="firstName"
                      component={TextInputField}
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="block">
                    <label>Last Name</label>
                    <Field
                      name="lastName"
                      component={TextInputField}
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <label>Email</label>

                <Field
                  name="email"
                  component={TextInputField}
                  type="text"
                  placeholder="Email Address"
                />
                <h1>Password</h1>
                <div className="form_block_two">
                  <div className="block">
                    <label>Password</label>
                    <Field
                      name="password"
                      component={TextInputField}
                      type="password"
                      placeholder="password"
                    />
                  </div>
                  <div className="block">
                    <label>Confirm Password</label>
                    <Field
                      name="confirmPassword"
                      component={TextInputField}
                      type="password"
                      placeholder="confirm Password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={pristine || submitting || invalid}
                >
                  Submit
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
          </div>
        </div>
      </div>
    );
  }
}

const actions = {
  registerUser
};

const mapState = state => ({
  Succes: state.user.registerSuccess
});

RegisterForm = connect(
  mapState,
  actions
)(RegisterForm);

export default reduxForm({
  form: "RegisterForm",
  validate
})(withRouter(RegisterForm));
