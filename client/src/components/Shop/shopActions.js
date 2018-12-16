import { GET_WOOD, GET_BRANDS } from "./Constants";
import axios from "axios";
import { PRODUCT_SERVER } from "../../Utills/User/userRoutes";

export const getBrand = () => async dispatch => {
  try {
    const BrandData = await axios.get(`${PRODUCT_SERVER}/brands`);
    dispatch({
      type: GET_BRANDS,
      payload: BrandData.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getWood = () => async dispatch => {
  try {
    const WoodData = await axios.get(`${PRODUCT_SERVER}/brands`);
    dispatch({
      type: GET_WOOD,
      payload: WoodData.data
    });
  } catch (error) {
    console.log(error);
  }
};
