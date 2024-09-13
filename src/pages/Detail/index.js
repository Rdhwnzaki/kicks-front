import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import Image1 from "../../assets/image 38.png"
import { FaRegHeart } from "react-icons/fa";
import CarouselProduct from '../../components/CarouselProduct';
import { useDispatch, useSelector } from 'react-redux'
import {
    getProductOne as onGetProducts,
    addNewProduct as onAddNewProduct,
    updateProduct as onUpdateProduct,
    deleteProduct as onDeleteProduct,
    getProductLoading,
    resetProductState,
} from "../../store/product/action";

import { addNewCart } from '../../store/actions';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [authUser, setAuthUser] = useState()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoad, setIsLoad] = useState(false)

    const {
        isProductCreated,
        loading,
        productOnes,
        isCartSuccess
    } = useSelector((state) => ({
        productOnes: state.Product.productOnes,
        isProductCreated: state.Product.isProductCreated,
        isProductSuccess: state.Product.isProductSuccess,
        loading: state.Product.loading,
        error: state.Product.error,
        isCartSuccess: state.Cart.isCartSuccess,
    }));

    useEffect(() => {
        const obj = JSON.parse(sessionStorage.getItem("authUser"))
        if (obj) {
            setAuthUser(obj.data)
        }
    }, [])

    useEffect(() => {
        if (!isLoad) {
            dispatch(resetProductState())
            dispatch(onGetProducts(id))
            setIsLoad(true)
        }
    }, [isLoad, dispatch])

    useEffect(() => {
        if (!isEmpty(productOnes)) {
            setProduct(productOnes)
        }
    }, [productOnes])

    const curencyFormat = (number) => {
        const formattedAmount = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
        return formattedAmount

    }

    const radiusImage = (idx) => {
        let styles
        switch (idx) {
            case 0:
                styles = { height: "450px", borderRadius: "30px 0px 0px 0px" }
                break
            case 1:
                styles = { height: "450px", borderRadius: "0px 30px 0px 0px" }
                break;
            case 2:
                styles = { height: "450px", borderRadius: "0px 0px 0px 30px" }
                break;
            case 3:
                styles = { height: "450px", borderRadius: "0px 0px 30px 0px" }
                break;
            default:
                break;
        }
        return styles
    }

    document.title = "Detail Product | Kicks";
    return (
        <MainLayout>
            <div className='px-5'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='row'>
                            {(product && product.images || []).map((img, imgIdx) => {
                                return (
                                    <div key={`image-` + imgIdx} className='col-6 mb-4'>
                                        <img src={`${process.env.REACT_APP_BASE_URL}/${img}`} alt='img product' className='w-100' style={radiusImage(imgIdx)} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='d-flex flex-column'>
                            <p className='fs-1 fw-bold'>{product && product.name}</p>
                            <p className='fs-3 fw-bold text-custom'>{curencyFormat(product && product.regPrice)}</p>
                            <p className='fs-3 fw-bold'>About the product</p>
                            <p className='fs-6'>{`${product && product.description}`}</p>
                        </div>
                        <div className='d-flex'>
                            <button className='btn btn-dark w-100 me-2' onClick={() => {
                                dispatch(addNewCart({
                                    userId: authUser.id,
                                    productId: productOnes.id,
                                    quantity: 1
                                }))
                                setTimeout(() => navigate("/cart"), 1000);
                            }}>ADD TO CART</button>
                            <button className='btn btn-dark'><FaRegHeart /></button>
                        </div>
                        <button className='btn w-100 mt-3' style={{ backgroundColor: "#4a69e2", color: "white" }}>BUY NOW</button>
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

export default Detail