import React, { useState, useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'
import Image from "../../assets/Rectangle 5.png"
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    getCartOne as onGetCarts,
    addNewCart as onAddNewCart,
    updateCart as onUpdateCart,
    deleteCart as onDeleteCart,
    getCartLoading,
    resetCartState,
} from "../../store/cart/action";
import { isEmpty } from 'lodash';
import CarouselProduct from '../../components/CarouselProduct';

const Cart = () => {
    const [cart, setCart] = useState([])
    const [authUser, setAuthUser] = useState()

    const dispatch = useDispatch()
    const [isLoad, setIsLoad] = useState(false)

    const {
        isCartCreated,
        loading,
        cartOnes,
        isCartSuccess
    } = useSelector((state) => ({
        cartOnes: state.Cart.cartOnes,
        isCartCreated: state.Cart.isCartCreated,
        isCartSuccess: state.Cart.isCartSuccess,
        loading: state.Cart.loading,
        error: state.Cart.error,
    }));

    useEffect(() => {
        const obj = JSON.parse(sessionStorage.getItem("authUser"))
        if (obj && !isLoad) {
            setAuthUser(obj.data)
            dispatch(resetCartState())
            dispatch(onGetCarts(obj.data.id))
        }
    }, [dispatch, isLoad])

    useEffect(() => {
        if (!isEmpty(cartOnes)) {
            setCart(cartOnes)
        }
    }, [cartOnes])

    const curencyFormat = (number) => {
        const formattedAmount = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
        return formattedAmount

    }
    document.title = "Cart | Kicks";
    return (
        <MainLayout>
            <div className='px-5'>
                <div className='d-flex flex-column mb-4'>
                    <span className='fs-2 fw-bold'>Saving to celebrate </span>
                    <span className='fs-5'>Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.</span>
                    <span className='fs-5'>Join us  or Sign-in</span>
                </div>
                <div className='row mb-4'>
                    <div className='col-9'>
                        <div className='card rounded-4 border-0'>
                            <div className='card-body'>
                                <div className='d-flex flex-column mb-3'>
                                    <span className='fs-2 fw-bold'>Your Bag</span>
                                    <span className='fs-5 fw-light'>Items in your bag not reserved- check ouzt now to make them yours.</span>
                                </div>
                                {(cart || []).map((carts, cartIdx) => {
                                    return (
                                        <div className='d-flex mt-5' key={`cart-` + cartIdx}>
                                            <div className='flex-shrink-0 me-3'>
                                                <img src={`${process.env.REACT_APP_BASE_URL}/${carts.product?.images[0]}`} alt={`${carts.product?.name}`} className='rounded-4' style={{ width: "300px", height: "300px" }} />
                                            </div>
                                            <div className='flex-grow-1'>
                                                <div className='d-flex flex-column mb-3'>
                                                    <span className='fs-2 fw-bold'>{carts.product.name}</span>
                                                    <span className='fs-4 fw-normal'>{carts.product.brandName}</span>
                                                </div>
                                                <span className='fs-4 fw-normal'>Quantity :</span>
                                                <div className='d-flex flex-row mt-3 align-items-center mb-5'>
                                                    <div className='me-3'>
                                                        <button className='btn btn-sm btn-dark'>
                                                            <FaMinus />
                                                        </button>
                                                    </div>
                                                    <div className='me-3'>{carts.quantity}</div>
                                                    <div>
                                                        <button className='btn btn-sm btn-dark'>
                                                            <FaPlus />
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* <FaTrashCan className='fs-3' /> */}
                                            </div>
                                            <div className='flex-shrink-1'>
                                                <span className='fs-4 text-custom'>{curencyFormat(carts.product.regPrice)}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='d-flex flex-column'>
                            <span className='fs-2 fw-bold mb-4'>Order Summary</span>
                            <div className='d-flex justify-content-between'>
                                <p className='fs-4'>{`${cart.length} ITEM`}</p>
                                <p className='fs-4'>{`${curencyFormat(cart && cart[0] && parseInt(cart[0].product.regPrice) * cart[0].quantity)}`}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='fs-4'>Delivery</p>
                                <p className='fs-4'>Rp.25.000,00</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='fs-4 fw-bold'>Total</p>
                                <p className='fs-4'>{`${curencyFormat(cart && cart[0] && parseInt(cart[0].product.regPrice) * cart[0].quantity + 25000)}`}</p>
                            </div>
                            <Link to="/checkout">
                                <button className='btn btn-dark w-100'>CHECKOUT</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='d-flex mb-4'>
                    <span className='fs-1 fw-bold me-auto'>You may also like</span>
                </div>
                <div className='mb-4'>
                    <CarouselProduct />
                </div>
            </div>
        </MainLayout>
    )
}

export default Cart