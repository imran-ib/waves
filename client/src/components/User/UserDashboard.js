import React, { Component } from "react";
import { UserLayout } from "./../../HOC/User/UserLayout";
import MyButton from "./../../Utills/Button/MyButton";
import { connect } from "react-redux";

export class UserDashboard extends Component {
  render() {
    const { user } = this.props;
    const logedinUser = user.userData;
    return (
      <UserLayout>
        <div>
          <div className="user_nfo_panel">
            <h2>User Information</h2>
            <span>{logedinUser && logedinUser.firstName}</span>
            <span>{logedinUser && logedinUser.lastName}</span>
            <span>{logedinUser && logedinUser.email}</span>
            <MyButton
              type="default"
              title="Edit Account Info"
              linkTo="/user/user_profile"
            />
          </div>

          <div className="user_nfo_panel">
            <h1>{logedinUser && logedinUser.history}</h1>

            <div className="user_product_block_wrapper">History</div>
          </div>
        </div>
      </UserLayout>
    );
  }
}

export default connect()(UserDashboard);
