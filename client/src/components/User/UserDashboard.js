import React, { Component } from "react";
import { UserLayout } from "./../../HOC/User/UserLayout";
import MyButton from "./../../Utills/Button/MyButton";

export class UserDashboard extends Component {
  render() {
    return (
      <UserLayout>
        <div>
          <div className="user_nfo_panel">
            <h2>User Information</h2>
            <span>FirstName</span>
            <span>LastName</span>
            <span>Email</span>
            <MyButton
              type="default"
              title="Edit Account Info"
              linkTo="/user/user_profile"
            />
          </div>

          <div className="user_nfo_panel">
            <h1>Purchase History</h1>

            <div className="user_product_block_wrapper">History</div>
          </div>
        </div>
      </UserLayout>
    );
  }
}

export default UserDashboard;
