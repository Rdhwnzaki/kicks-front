import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    GET_CART,
    DELETE_CART,
    UPDATE_CART,
    ADD_NEW_CART,
    GET_CART_ONE,
} from "./actionType";

import {
    getCartSuccess,
    getCartFail,
    deleteCartSuccess,
    deleteCartFail,
    updateCartSuccess,
    updateCartFail,
    addCartSuccess,
    addCartFail,
} from "./action";

//Include Both Helper File with needed methods
import {
    approveCartApi,
    getCartApi,
    updateCartApi,
    deleteCartApi,
    addNewCartApi,
    getOneCartApi,
} from "../../helpers/backend_helper";

function* getCart({ payload: cart }) {
    try {
        const response = yield call(getCartApi, cart);
        yield put(getCartSuccess(GET_CART, response.data));
    } catch (error) {
        yield put(getCartFail(GET_CART, error));
    }
}

function* getCartOne({ payload: id }) {
    try {
        const response = yield call(getOneCartApi, id);
        yield put(getCartSuccess(GET_CART_ONE, response.data));
    } catch (error) {
        yield put(getCartFail(GET_CART_ONE, error));
    }
}

function* onUpdateCart({ payload: cart }) {
    try {
        if (cart.setApprove) {
            const response = yield call(approveCartApi, cart);
            yield put(updateCartSuccess(response));
            toast.success(response.message, { autoClose: 3000 });
        } else {
            const response = yield call(updateCartApi, cart);
            yield put(updateCartSuccess(response));
            toast.success(response.message, { autoClose: 3000 });
        }
    } catch (error) {
        yield put(updateCartFail(error));
        toast.error(error.response.data.message, { autoClose: 3000 });
    }
}

function* onDeleteCart({ payload: cart }) {
    try {
        const response = yield call(deleteCartApi, cart);
        yield put(deleteCartSuccess({ cart, ...response }));
        toast.success(response.message, { autoClose: 3000 });
    } catch (error) {
        yield put(deleteCartFail(error));
        toast.error(error.response.data.message, { autoClose: 3000 });
    }
}

function* onAddNewCart({ payload: cart }) {
    try {
        const response = yield call(addNewCartApi, cart);
        yield put(addCartSuccess(response));
        toast.success(response.message, { autoClose: 3000 });
    } catch (error) {
        yield put(addCartFail(error));
        toast.error(error.response.data.message, { autoClose: 3000 });
    }
}

export function* watchGetCart() {
    yield takeEvery(GET_CART, getCart);
}

export function* watchUpdateCart() {
    yield takeEvery(UPDATE_CART, onUpdateCart);
}

export function* watchDeleteCart() {
    yield takeEvery(DELETE_CART, onDeleteCart);
}

export function* watchAddNewCart() {
    yield takeEvery(ADD_NEW_CART, onAddNewCart);
}

export function* watchGetCartOne() {
    yield takeEvery(GET_CART_ONE, getCartOne);
}

function* cartSaga() {
    yield all([
        fork(watchGetCart),
        fork(watchDeleteCart),
        fork(watchUpdateCart),
        fork(watchAddNewCart),
        fork(watchGetCartOne),
    ]);
}

export default cartSaga;
