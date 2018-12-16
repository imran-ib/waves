import axios from "axios";

//import { GET_PRODUCT_BY_SOLD } from "./../../Products/ProductsConstants";
import { GET_PRODUCT_BY_SOLD, GET_PRODUCT_BY_ARRIVAL } from "./constants";

import { PRODUCT_SERVER } from "../../../Utills/User/userRoutes";

// ─── BY SOLD    WE HAVE THIS IS COLLECTION ──────────────────────────────────────
// article?sortBy=sold&order=desc&limit=4
//

export const getProductBySold = () => async dispatch => {
  try {
    let product = await axios.get(
      `${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`
    );
    dispatch({
      type: GET_PRODUCT_BY_SOLD,
      payload: product.data
    });
  } catch (error) {
    console.log(error);
  }
};
// ─── BY ARRIVAL  THIS WILL COME FROM TIMESTAMP ──────────────────────────────────
// article?sortBy=createdAt&order=desc&limit=4
export const getProductByArrival = () => async dispatch => {
  try {
    let product = await axios.get(
      `${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`
    );
    dispatch({
      type: GET_PRODUCT_BY_ARRIVAL,
      payload: product.data
    });
  } catch (error) {
    console.log(error);
  }
};
