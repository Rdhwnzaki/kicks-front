import {
    GET_CART,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    DELETE_CART,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAIL,
    UPDATE_CART,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAIL,
    ADD_NEW_CART,
    ADD_CART_SUCCESS,
    ADD_CART_FAIL,
    CART_LOADING,
    CART_RESET,
    GET_CART_ONE,
} from "./actionType";

export const resetCartState = (actionType) => ({
    type: CART_RESET,
    payload: { actionType },
});

export const getCartSuccess = (actionType, data) => ({
    type: GET_CART_SUCCESS,
    payload: { actionType, data },
});

export const getCartFail = (actionType, error) => ({
    type: GET_CART_FAIL,
    payload: { actionType, error },
});

export const getCart = (data) => ({
    type: GET_CART,
    payload: data,
});

export const getCartLoading = () => ({
    type: CART_LOADING,
});

export const deleteCart = (data) => ({
    type: DELETE_CART,
    payload: data,
});

export const deleteCartSuccess = (data) => ({
    type: DELETE_CART_SUCCESS,
    payload: data,
});

export const deleteCartFail = (error) => ({
    type: DELETE_CART_FAIL,
    payload: error,
});

export const updateCart = (data) => ({
    type: UPDATE_CART,
    payload: data,
});

export const updateCartFail = (error) => ({
    type: UPDATE_CART_FAIL,
    payload: error,
});

export const updateCartSuccess = (data) => ({
    type: UPDATE_CART_SUCCESS,
    payload: data,
});

export const addNewCart = (data) => ({
    type: ADD_NEW_CART,
    payload: data,
});

export const addCartSuccess = (data) => ({
    type: ADD_CART_SUCCESS,
    payload: data,
});

export const addCartFail = (error) => ({
    type: ADD_CART_FAIL,
    payload: error,
});

export const getCartOne = (data) => ({
    type: GET_CART_ONE,
    payload: data,
});
