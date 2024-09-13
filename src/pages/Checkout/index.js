import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Image from "../../assets/Rectangle 5.png"
import { Input } from 'reactstrap'

const Checkout = () => {
    document.title = "Checkout | Kicks";
    return (
        <MainLayout>
            <div className='px-5'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='d-flex flex-column'>
                            <div className='card border-0 rounded-4 mb-5'>
                                <div className='card-body'>
                                    <div className='d-flex flex-column'>
                                        <span className='fs-2 fw-bold mb-4'>Order Summary</span>
                                        <div className='d-flex justify-content-between'>
                                            <p className='fs-4'>1 ITEM</p>
                                            <p className='fs-4'>Rp.200.000</p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='fs-4'>Delivery</p>
                                            <p className='fs-4'>Rp.25.000</p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='fs-4'>Sales Tax</p>
                                            <p className='fs-4'>-</p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='fs-4 fw-bold'>Total</p>
                                            <p className='fs-4 fw-bols'>Rp.225.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card rounded-4 border-0'>
                                <div className='card-body'>
                                    <div className='d-flex flex-column mb-3'>
                                        <span className='fs-2 fw-bold'>Order Details</span>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='flex-shrink-0 me-3'>
                                            <img src={Image} className='rounded-4' style={{ width: "200px", height: "200px" }} />
                                        </div>
                                        <div className='flex-grow-1'>
                                            <div className='d-flex flex-column mb-3'>
                                                <span className='fs-4 fw-bold'>DROPSET TRAINER SHOES</span>
                                                <span className='fs-6 fw-normal'>Men’s Road Running Shoes </span>
                                                <span className='fs-6 fw-normal'>Enamel Blue/ University White</span>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span className='fs-6 fw-normal'>Quantity :1</span>
                                                <span className='fs-4 fw-bold text-custom'>Rp.250.000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='ms-5'>
                            <span className='fs-2 fw-bold'>Shipping Address</span>
                            <div className='d-flex flex-row mt-3'>
                                <div className='mb-3 w-50 me-2'>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name *"
                                        type="text"
                                        className='bg-transparent border-black'
                                    // onChange={validation.handleChange}
                                    // onBlur={validation.handleBlur}
                                    // value={validation.values.firstName || ""}
                                    // invalid={validation.touched.firstName && validation.errors.firstName ? true : false}
                                    />
                                    {/* {validation.touched.firstName && validation.errors.firstName ? (
                                        <FormFeedback type="invalid">{validation.errors.firstName}</FormFeedback>
                                    ) : null} */}
                                </div>
                                <div className='mb-3 w-50 ms-2'>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name *"
                                        type="text"
                                        className='bg-transparent border-black'
                                    // onChange={validation.handleChange}
                                    // onBlur={validation.handleBlur}
                                    // value={validation.values.lastName || ""}
                                    // invalid={validation.touched.lastName && validation.errors.lastName ? true : false}
                                    />
                                    {/* {validation.touched.lastName && validation.errors.lastName ? (
                                        <FormFeedback type="invalid">{validation.errors.lastName}</FormFeedback>
                                    ) : null} */}
                                </div>
                            </div>
                            <div className='d-flex flex-row mt-2'>
                                <div className='mb-3 w-100'>
                                    <Input
                                        id="address"
                                        name="address"
                                        placeholder="Find Delivery Address *"
                                        type="textarea"
                                        className='bg-transparent border-black'
                                    // onChange={validation.handleChange}
                                    // onBlur={validation.handleBlur}
                                    // value={validation.values.address || ""}
                                    // invalid={validation.touched.address && validation.errors.address ? true : false}
                                    />
                                    {/* {validation.touched.address && validation.errors.address ? (
                                        <FormFeedback type="invalid">{validation.errors.address}</FormFeedback>
                                    ) : null} */}
                                </div>
                            </div>
                            <div className='d-flex flex-row mt-2'>
                                <div className='mb-3 w-50'>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone Number *"
                                        type="text"
                                        className='bg-transparent border-black'
                                    // onChange={validation.handleChange}
                                    // onBlur={validation.handleBlur}
                                    // value={validation.values.phone || ""}
                                    // invalid={validation.touched.phone && validation.errors.phone ? true : false}
                                    />
                                    {/* {validation.touched.phone && validation.errors.phone ? (
                                        <FormFeedback type="invalid">{validation.errors.phone}</FormFeedback>
                                    ) : null} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-7'>
                        <div className='d-flex flex-column'>
                            <span className='fs-1 fw-bold mt-3 mb-3'>Delivery Options</span>
                            <div className='card border-0 rounded-4 p-1 mb-4'>
                                <div className='card-body'>
                                    <div className='d-flex justify-content-between align-align-items-baseline'>
                                        <div>
                                            <p className='fs-3 fw-bold mb-0'>Standart Delivery</p>
                                            <p className='fs-6 fw-normal'>Enter your address to see when you’ll get your order</p>
                                        </div>
                                        <div>
                                            <p className='fs-4 fw-bold mb-0 text-custom'>Rp.25.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card border-1 border-black rounded-4 p-1 bg-transparent mb-4'>
                                <div className='card-body'>
                                    <div className='d-flex justify-content-between align-align-items-baseline'>
                                        <div>
                                            <p className='fs-3 fw-bold mb-0'>Collect in store</p>
                                            <p className='fs-6 fw-normal'>Pay now, collect in store</p>
                                        </div>
                                        <div>
                                            <p className='fs-4 fw-bold mb-0 text-dark'>Free</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='d-flex flex-row'>
                                    <input className="form-check-input bg-black mb-3 me-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <span>My billing and delivery information are the same </span>
                                </div>
                                <div className='d-flex flex-row'>
                                    <input className="form-check-input bg-black mb-3 me-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <span>I’m 13+ year old</span>
                                </div>
                            </div>
                            <button className='btn btn-dark w-50'>REVIEW AND PAY</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Checkout