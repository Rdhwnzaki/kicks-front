import { combineReducers } from "redux";
import Register from "./auth/register/reducer";
import Login from "./auth/login/reducer"
import Product from "./product/reducer"
import Cart from "./cart/reducer";

const rootReducer = combineReducers({
    Register,
    Login,
    Product,
    Cart
});

export default rootReducer;
