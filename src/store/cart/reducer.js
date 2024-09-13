import {
    CART_LOADING,
    GET_CART,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    ADD_CART_SUCCESS,
    ADD_CART_FAIL,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAIL,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAIL,
    CART_RESET,
    GET_CART_ONE,
} from "./actionType";

const INIT_STATE = {
    carts: [],
    error: {},
    cartOnes: []
};

const Cart = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CART_SUCCESS:
            switch (action.payload.actionType) {
                case GET_CART:
                    return {
                        ...state,
                        carts: action.payload.data,
                        isCartCreated: false,
                        isCartSuccess: true,
                        loading: false,
                    };

                case GET_CART_ONE:
                    return {
                        ...state,
                        cartOnes: action.payload.data,
                        isCartSuccess: true,
                        loading: false,
                    };

                default:
                    return { ...state };
            }
        case GET_CART_FAIL:
            switch (action.payload.actionType) {
                case GET_CART_FAIL:
                    return {
                        ...state,
                        error: action.payload.error,
                        isCartCreated: false,
                        isCartSuccess: false,
                        loading: false,
                    };
                default:
                    return { ...state };
            }

        case GET_CART: {
            return {
                ...state,
                isCartCreated: false,
                loading: true,
            };
        }

        case GET_CART_ONE: {
            return {
                ...state,
                loading: true,
            };
        }

        case CART_LOADING: {
            return {
                ...state,
                isCartCreated: false,
                loading: true,
            };
        }

        case ADD_CART_SUCCESS:
            return {
                ...state,
                isCartCreated: true,
                loading: false,
                carts: [...state.carts, action.payload.data],
            };

        case ADD_CART_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case DELETE_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                carts: state.carts.filter(
                    (cart) => cart.id.toString() !== action.payload.id.toString()
                ),
            };

        case DELETE_CART_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case UPDATE_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                carts: state.carts.map((cart) =>
                    cart.id.toString() === action.payload.data.id.toString()
                        ? { ...cart, ...action.payload.data }
                        : cart
                ),
            };

        case UPDATE_CART_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CART_RESET:
            return INIT_STATE;

        default:
            return { ...state };
    }
};

export default Cart;
