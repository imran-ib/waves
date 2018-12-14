import React, { Component } from "react";
import { Link } from "react-router-dom";

export class UserLayout extends Component {
  state = {
    Links: [
      {
        name: "My Account",
        linkTo: "/user/dashboard"
      },
      {
        name: "User Information",
        linkTo: "/user/user_profile"
      },
      {
        name: "My Cart",
        linkTo: "/user/cart"
      }
    ]
  };

  renderLinks = () =>
    this.state.Links.map((link, i) => (
      <Link key={i} to={link.linkTo}>
        {link.name}
      </Link>
    ));

  render() {
    return (
      <div className="container">
        <div className="user_container">
          <div className="user_left_nav">
            <h1>My Account</h1>
            <div className="links">{this.renderLinks()}</div>
          </div>
          <div className="user_right">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default UserLayout;
