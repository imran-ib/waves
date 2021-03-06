import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import userReducers from "../components/Auth/User/userReducers";
import productReducer from "../components/Home/Products/ProductReducer";
import BrandReducers from "../components/Shop/ShopReducer";

const rootReducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  user: userReducers,
  product: productReducer,
  brand: BrandReducers
});

export default rootReducer;
