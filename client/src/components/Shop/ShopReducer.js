import { GET_WOOD, GET_BRANDS } from "./Constants";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BRANDS:
      console.log(payload);
      return { ...state, brands: payload };

    case GET_WOOD:
      console.log(payload);
      return { ...state, woods: payload };

    default:
      return state;
  }
};
