import { all, fork } from "redux-saga/effects";

import RegisterSaga from "./auth/register/saga";
import LoginSaga from "./auth/login/saga"
import ProductSaga from "./product/saga"
import CartSaga from "./cart/saga";

export default function* rootSaga() {
    yield all([
        fork(RegisterSaga),
        fork(LoginSaga),
        fork(ProductSaga),
        fork(CartSaga)
    ]);
}
