import React, { Component } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { compose } from "redux";
import { auth } from "./../../components/Auth/User/userActions";

//
// ─── WE WILL USE A COMPOSE function ────────────────────────────────────────────
// which is a function which returns a function
export default function(ComposedClass, reload, admin = null) {
  class AuthChek extends Component {
    state = {
      loader: false
    };
    componentDidMount() {
      this.props.auth().then(res => {
        let user = this.props.user.userData;

        if (!user.isAuth) {
          if (reload) {
            this.props.history.push("/register_login");
          }
        } else {
          if (admin && !user.isAdmin) {
            this.props.history.push("/user/dashboard");
          } else {
            if (reload === false) {
              this.props.history.push("/user/dashboard");
            }
          }
        }
        this.setState({ loading: false });
      });
    }
    render() {
      if (this.state.loader) {
        return (
          <div className="main_loader">
            <CircularProgress thickness={5} />
          </div>
        );
      }
      return (
        <div>
          <ComposedClass {...this.props} user={this.props.user} />
        </div>
      );
    }
  }

  const actions = {
    auth
  };

  const mapState = state => ({
    user: state.user
  });

  return compose(
    connect(
      mapState,
      actions
    )
  )(AuthChek);
}
