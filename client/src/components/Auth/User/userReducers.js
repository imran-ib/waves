import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./UserConstants";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return { ...state, registerSuccess: payload };

    case LOGIN_USER:
      return { ...state, loginSuccess: payload };

    case AUTH_USER:
      return { ...state, userData: payload };
    default:
      return state;
  }
};
