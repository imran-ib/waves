import { GET_PRODUCT_BY_SOLD, GET_PRODUCT_BY_ARRIVAL } from "./constants";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_BY_SOLD:
      return { ...state, bySell: payload };
    case GET_PRODUCT_BY_ARRIVAL:
      return { ...state, byArrival: payload };

    default:
      return state;
  }
};
