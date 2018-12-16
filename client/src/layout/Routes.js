import React from "react";
import { Switch, Route } from "react-router-dom";
// ──────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
import Home from "./../components/Home/Home";
import Layout from "./../HOC/Layout/Layout";
import RegiserLogin from "./../components/Register_Login/RegiserLogin";
import RegisterForm from "./../components/Register_Login/RegisterForm";
import UserDashboard from "./../components/User/UserDashboard";
import Auth from "../HOC/Auth/User";
import ShopDashboard from "./../components/Shop/ShopDashboard";

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route
          exact
          path="/user/dashboard"
          component={Auth(UserDashboard, true)}
        />
        <Route exact path="/register" component={Auth(RegisterForm, false)} />
        <Route
          exact
          path="/register_login"
          component={Auth(RegiserLogin, false)}
        />
        <Route exact path="/" component={Auth(Home)} />
        <Route exact path="/shop" component={Auth(ShopDashboard)} />
        hello
      </Switch>
    </Layout>
  );
}

export default Routes;
