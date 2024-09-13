import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import MainImage from "../assets/image 14.png"
import Image1 from "../assets/Rectangle 1.png"
import Image2 from "../assets/Rectangle 2.png"
import Profile from "../assets/Ellipse 1.png"
import Image4 from "../assets/image 38.png"
import DefaultProfile from "../assets/defaultProfile.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom'
import CarouselProduct from '../components/CarouselProduct'
const Home = () => {
    const dataReview = [
        {
            id: 1,
            name: "Ridhwan",
            description: "I highly recommend shopping from kicks",
            profile: Profile,
            image: Image4
        },
        {
            id: 2,
            name: "Ridhwan",
            description: "I highly recommend shopping from kicks",
            profile: Profile,
            image: Image4
        },
        {
            id: 3,
            name: "Ridhwan",
            description: "I highly recommend shopping from kicks",
            image: Image4
        },
        {
            id: 4,
            name: "Ridhwan",
            description: "I highly recommend shopping from kicks",
            profile: Profile,
            image: Image4
        },
    ]
    document.title = "Home | Kicks";
    return (
        <MainLayout>
            <div className='px-5'>
                <div>
                    <span className='fw-bold' style={{ fontSize: "302px" }}>DO IT</span>
                    <span className=' ms-2 text-custom fw-bold' style={{ fontSize: "302px" }}> RIGHT</span>
                </div>
                <div className='mb-5 position-relative'>
                    <img src={MainImage} style={{ width: "100%" }} />
                    <div className='position-absolute text-white px-5' style={{ top: 650 }}>
                        <div className='d-flex'>
                            <div className='w-100'>
                                <h1 className='fw-bold' style={{ fontSize: "100px" }}>NIKE AIR MAX</h1>
                                <h1 className='fw-bold' style={{ fontSize: "50px" }}>Nike introducing the new air max for</h1>
                                <h1 className='fw-bold' style={{ fontSize: "50px" }}> everyone's comfort</h1>
                                <Link to="/list">
                                    <button className='btn mt-3' style={{ backgroundColor: "#4a69e2", color: "white" }}>SHOP NOW</button>
                                </Link>
                            </div>
                            <div className='flex-shrink-1' style={{ marginLeft: "650px" }}>
                                <div className='d-flex flex-column'>
                                    <img src={Image2} className='mb-3 border border-2 border-white' style={{ borderRadius: "30px" }} />
                                    <img src={Image1} className='border border-2 border-white' style={{ borderRadius: "30px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex mb-4'>
                    <span className='fs-1 fw-bold me-auto'>Don’t miss out new drops</span>
                    {/* <button className='btn' style={{ backgroundColor: "#4a69e2", color: "white" }}>SHOP NEW DROPS</button> */}
                </div>
                <div className='mb-4'>
                    <CarouselProduct />
                </div>
            </div>
            <div className='bg-dark px-5 py-4'>
                <div className='d-flex'>
                    <div className='me-auto'>
                        <h1 className='text-warning'>Review</h1>
                    </div>
                    <div className='mt-2'>
                        <button className='btn btn-warning'>See All</button>
                    </div>
                </div>
                <div className='row mt-5 mb-5'>
                    {(dataReview || []).map((review, reviewIdx) => {
                        return (
                            <div key={`review-` + reviewIdx} className='col-3'>
                                <div className="card p-0 shadow-sm" style={{ borderRadius: '20px', maxWidth: '400px' }}>
                                    <div className="d-flex p-3">
                                        <div className='me-auto'>
                                            <h5 className="mb-0">{review.name}</h5>
                                            <small className="text-muted">{review.description}</small>
                                        </div>
                                        <img src={review.profile ? review.profile : DefaultProfile} alt="Profile" className="rounded-circle" style={{ width: '50px', height: '50px' }} />
                                    </div>
                                    {review.image ? (
                                        <img src={review.image} alt="Shoes" className="w-100" style={{ height: '300px', objectFit: 'cover', borderRadius: '0px 0px 20px 20px' }} />
                                    ) : null}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </MainLayout >
    )
}

export default Home