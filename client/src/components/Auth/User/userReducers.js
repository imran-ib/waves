import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER
} from "./UserConstants";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return { ...state, registerSuccess: payload };

    case LOGIN_USER:
      return { ...state, loginSuccess: payload };

    case AUTH_USER:
      return { ...state, userData: payload };

    case LOGOUT_USER:
      return { ...state };
    default:
      return state;
  }
};
