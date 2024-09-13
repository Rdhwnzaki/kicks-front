import React from 'react'
import Logo from "../assets/Group 1.png"
import Logo2 from "../assets/Group.png"
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Form, Row, Col, Input, Button } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='px-5'>
            <div className='pt-4'>
                <div className='py-5 px-5 text-white z-1' style={{ backgroundColor: "#4a69e2", borderRadius: "30px 30px 1px 1px" }}>
                    <div className='row'>
                        <div className='col-7'>
                            <h1 className='fw-bold'>Join our KicksPlus</h1>
                            <h1 className='fw-bold mb-3'> Club & get 15% off</h1>
                            <h6>Sign up for free! Join the community.</h6>
                            <Form>
                                <Row className="row-cols-lg-auto g-3 align-items-center my-3">
                                    <Col>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Email address"
                                            type="email"
                                            className='bg-transparent border-white text-white'
                                        />
                                    </Col>
                                    <Col>
                                        <Button color='dark'>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className='col-5'>
                            <img src={Logo} alt='logo' style={{ width: "500px" }} />
                        </div>
                    </div>
                </div>
                <div className='rounded-5 pt-5 px-5 text-white z-0 mb-4' style={{ backgroundColor: "black", marginTop: "-40px" }}>
                    <div className='d-flex justify-content-between'>
                        <div className='col-3'>
                            <h3 className='fw-bold text-warning'>About us</h3>
                            <p>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
                        </div>
                        <div className='col-3'>
                            <h3 className='fw-bold text-warning'>Categories</h3>
                            <p>Runners</p>
                            <p>Sneakers</p>
                            <p>Basketball</p>
                            <p>Outdoor</p>
                            <p>Golf</p>
                            <p>Hiking</p>
                        </div>
                        <div className='col-3'>
                            <h3 className='fw-bold text-warning'>Company</h3>
                            <p>About</p>
                            <p>Contact</p>
                            <p>Blogs</p>
                        </div>
                        <div className='col-2'>
                            <h3 className='fw-bold text-warning'>Follow us</h3>
                            <FaFacebook className='me-4' />
                            <FaInstagram className='me-4' />
                            <FaTwitter className='me-4' />
                            <FaTiktok />
                        </div>
                    </div>
                    <img src={Logo2} alt='logo' style={{ width: "1750px" }} />
                </div>
                <div className='pb-2'>
                    <p className='text-center'>© 2023 - kicks</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer