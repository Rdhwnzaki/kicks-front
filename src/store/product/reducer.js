import {
    PRODUCT_LOADING,
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    PRODUCT_RESET,
    GET_PRODUCT_ONE,
} from "./actionType";

const INIT_STATE = {
    products: [],
    error: {},
    productOnes: []
};

const Product = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            switch (action.payload.actionType) {
                case GET_PRODUCT:
                    return {
                        ...state,
                        products: action.payload.data,
                        isProductCreated: false,
                        isProductSuccess: true,
                        loading: false,
                    };

                case GET_PRODUCT_ONE:
                    return {
                        ...state,
                        productOnes: action.payload.data,
                        isProductSuccess: true,
                        loading: false,
                    };

                default:
                    return { ...state };
            }
        case GET_PRODUCT_FAIL:
            switch (action.payload.actionType) {
                case GET_PRODUCT_FAIL:
                    return {
                        ...state,
                        error: action.payload.error,
                        isProductCreated: false,
                        isProductSuccess: false,
                        loading: false,
                    };
                default:
                    return { ...state };
            }

        case GET_PRODUCT: {
            return {
                ...state,
                isProductCreated: false,
                loading: true,
            };
        }

        case GET_PRODUCT_ONE: {
            return {
                ...state,
                loading: true,
            };
        }

        case PRODUCT_LOADING: {
            return {
                ...state,
                isProductCreated: false,
                loading: true,
            };
        }

        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isProductCreated: true,
                loading: false,
                products: [...state.products, action.payload.data],
            };

        case ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.filter(
                    (product) => product.id.toString() !== action.payload.id.toString()
                ),
            };

        case DELETE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.map((product) =>
                    product.id.toString() === action.payload.data.id.toString()
                        ? { ...product, ...action.payload.data }
                        : product
                ),
            };

        case UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case PRODUCT_RESET:
            return INIT_STATE;

        default:
            return { ...state };
    }
};

export default Product;
