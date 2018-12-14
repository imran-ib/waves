import React, { Component } from "react";
import MyButton from "./../../Utills/Button/MyButton";
import LoginForm from "./LoginForm";

class RegiserLogin extends Component {
  render() {
    return (
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              <h2>New Costumer</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                dolore. Ullam dolor quia eos incidunt corrupti eius itaque
                voluptas vero in voluptate nesciunt delectus, recusandae quas
                eum, ipsum repellendus facere.
              </p>
              <MyButton
                title="Create an Account"
                type="default"
                linkTo="/register"
                addStyles={{ margin: "10px 0 0 0 " }}
              />
            </div>
            <div className="right">
              <h2>Registered User Login</h2>
              <p>if you have an account please login</p>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegiserLogin;
