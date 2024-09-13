import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    GET_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    ADD_NEW_PRODUCT,
    GET_PRODUCT_ONE,
} from "./actionType";

import {
    getProductSuccess,
    getProductFail,
    deleteProductSuccess,
    deleteProductFail,
    updateProductSuccess,
    updateProductFail,
    addProductSuccess,
    addProductFail,
} from "./action";

//Include Both Helper File with needed methods
import {
    approveProductApi,
    getProductApi,
    updateProductApi,
    deleteProductApi,
    addNewProductApi,
    getOneProductApi,
} from "../../helpers/backend_helper";

function* getProduct({ payload: product }) {
    try {
        const response = yield call(getProductApi, product);
        yield put(getProductSuccess(GET_PRODUCT, response.data));
    } catch (error) {
        yield put(getProductFail(GET_PRODUCT, error));
    }
}

function* getProductOne({ payload: id }) {
    try {
        const response = yield call(getOneProductApi, id);
        yield put(getProductSuccess(GET_PRODUCT_ONE, response.data));
    } catch (error) {
        yield put(getProductFail(GET_PRODUCT_ONE, error));
    }
}

function* onUpdateProduct({ payload: product }) {
    try {
        if (product.setApprove) {
            const response = yield call(approveProductApi, product);
            yield put(updateProductSuccess(response));
            toast.success(response.message, { autoClose: 3000 });
        } else {
            const response = yield call(updateProductApi, product);
            yield put(updateProductSuccess(response));
            toast.success(response.message, { autoClose: 3000 });
        }
    } catch (error) {
        yield put(updateProductFail(error));
        toast.error(error.response.data.message, { autoClose: 3000 });
    }
}

function* onDeleteProduct({ payload: product }) {
    try {
        const response = yield call(deleteProductApi, product);
        yield put(deleteProductSuccess({ product, ...response }));
        toast.success(response.message, { autoClose: 3000 });
    } catch (error) {
        yield put(deleteProductFail(error));
        toast.error(error.response.data.message, { autoClose: 3000 });
    }
}

function* onAddNewProduct({ payload: product }) {
    try {
        const response = yield call(addNewProductApi, product);
        yield put(addProductSuccess(response));
        toast.success(response.message, { autoClose: 3000 });
    } catch (error) {
        yield put(addProductFail(error));
        toast.error(error.response.data.message, { autoClose: 3000 });
    }
}

export function* watchGetProduct() {
    yield takeEvery(GET_PRODUCT, getProduct);
}

export function* watchUpdateProduct() {
    yield takeEvery(UPDATE_PRODUCT, onUpdateProduct);
}

export function* watchDeleteProduct() {
    yield takeEvery(DELETE_PRODUCT, onDeleteProduct);
}

export function* watchAddNewProduct() {
    yield takeEvery(ADD_NEW_PRODUCT, onAddNewProduct);
}

export function* watchGetProductOne() {
    yield takeEvery(GET_PRODUCT_ONE, getProductOne);
}

function* productSaga() {
    yield all([
        fork(watchGetProduct),
        fork(watchDeleteProduct),
        fork(watchUpdateProduct),
        fork(watchAddNewProduct),
        fork(watchGetProductOne),
    ]);
}

export default productSaga;
