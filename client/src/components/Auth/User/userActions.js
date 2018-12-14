import { SubmissionError } from "redux-form";
import { toastr } from "react-redux-toastr";

import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./UserConstants";
import { USER_SERVER } from "./../../../Utills/User/userRoutes";
import axios from "axios";

//
// ──────────────────────────────────────────────────────────── I ──────────
//   :::::: L O G I N   U S E R : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//
export const loginUser = dataToSubmit => async dispatch => {
  try {
    let user = await axios.post(`${USER_SERVER}/login`, dataToSubmit);
    await dispatch({
      type: LOGIN_USER,
      payload: user.data
    });
    if (user.data.loginSucces) {
      await toastr.success("Success", "You are Successfully Logedin");
    } else {
      toastr.error("Failed", "Please Check Your Credentials");
    }
  } catch (error) {
    throw new SubmissionError({
      username: "User does not exist",
      _error: "Login failed!"
    });
  }
};

//
// ────────────────────────────────────────────────────────────────── II ──────────
//   :::::: R E G I S T E R   U S E R : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//
export const registerUser = dataToSubmit => async dispatch => {
  // exclude confirm password
  let { confirmPassword, ...SubmitData } = dataToSubmit;
  try {
    let RegisterData = await axios.post(`${USER_SERVER}/register`, SubmitData);
    await dispatch({
      type: REGISTER_USER,
      payload: RegisterData.data
    });
    if (RegisterData.data.registerSuccess) {
      await toastr.success("Success", "You are Successfully Registered");
    } else {
      await toastr.error("Failed", "Looks like You are already Registered");
      throw new SubmissionError({
        username: "Something went wrong",
        error: "Register failed!"
      });
    }
  } catch (error) {
    throw new SubmissionError(error);
  }
};

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: A U T H   U S E R : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export const auth = () => async dispatch => {
  try {
    const userData = await axios.get(`${USER_SERVER}/auth`);
    dispatch({
      type: AUTH_USER,
      payload: userData.data
    });
  } catch (error) {
    console.log(error);
  }
};
