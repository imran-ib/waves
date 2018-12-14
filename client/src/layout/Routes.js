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

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/user/dashboard" component={UserDashboard} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/register_login" component={RegiserLogin} />
        <Route exact path="/" component={Home} />
        hello
      </Switch>
    </Layout>
  );
}

export default Routes;
