import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getProduct as onGetProducts,
    addNewProduct as onAddNewProduct,
    updateProduct as onUpdateProduct,
    deleteProduct as onDeleteProduct,
    getProductLoading,
    resetProductState,
} from "../store/product/action";
import { isEmpty } from 'lodash';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const CarouselProduct = () => {
    const dispatch = useDispatch()
    const [isLoad, setIsLoad] = useState(false)
    const [productList, setProductList] = useState([])

    const {
        products,
        isProductCreated,
        loading,
    } = useSelector((state) => ({
        products: state.Product.products,
        isProductCreated: state.Product.isProductCreated,
        isProductSuccess: state.Product.isProductSuccess,
        loading: state.Product.loading,
        error: state.Product.error,
    }));

    useEffect(() => {
        if (!isLoad) {
            dispatch(resetProductState())
            dispatch(onGetProducts())
            setIsLoad(true)
        }
    }, [isLoad, dispatch])

    useEffect(() => {
        if (isProductCreated) {
            dispatch(resetProductState())
            dispatch(onGetProducts())
        }
    }, [isProductCreated, dispatch])

    useEffect(() => {
        if (!isEmpty(products)) {
            setProductList(products)
        }
    }, [products])

    const curencyFormat = (number) => {
        const formattedAmount = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
        return formattedAmount

    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
            {productList && productList.length > 0 ? (productList.map((product, productIdx) => {
                return (
                    <div key={`product-` + productIdx} className='d-flex flex-column me-3'>
                        <img src={`${process.env.REACT_APP_BASE_URL}/${product.images[0]}`} alt={`${product.name}`} className='border border-5 border-white mb-3 position-relative' style={{ borderRadius: "20px", width: "450px", height: "450px" }} />
                        <div className='bg-custom position-absolute' style={{ top: 5, left: 5, borderRadius: "20px 0px 20px 0px" }}>
                            <h6 className='text-white pt-2 px-3'>New</h6>
                        </div>
                        <h2 className='text-start fw-bold mb-3'>{product.name}</h2>
                        <Link to={`/detail/${product.id}`} className='text-decoration-none'>
                            <button className='btn btn-dark w-100 d-flex justify-content-center fw-bold'>
                                <div className='me-1'>
                                    <span>VIEW PRODUCT - </span>
                                </div>
                                <div>
                                    <span className='text-warning'>{curencyFormat(product.regPrice)}</span>
                                </div>
                            </button>
                        </Link>
                    </div>
                )
            })) : <p>Product not found</p>}
        </Carousel>
    )
}

export default CarouselProduct