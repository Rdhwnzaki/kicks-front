import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout'
import { GrLinkNext } from "react-icons/gr";
import { Input, Form, FormFeedback, FormGroup } from 'reactstrap';
import * as Yup from "yup";
import { useFormik } from "formik";
import { loginUser } from '../../store/auth/login/actions';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email format").required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            const newLogin = {
                email: values.email,
                password: values.password,
            };
            console.log(newLogin);

            dispatch(loginUser(newLogin));
        }
    });


    const { isLogin, error, success } = useSelector((state) => ({
        isLogin: state.Login.isLogin,
        error: state.Login.error,
        success: state.Login.success
    }));

    useEffect(() => {
        console.log(success);

        if (success) {
            setTimeout(() => navigate("/home"), 3000);
        }
    }, [success, navigate]);

    document.title = "Login | Kicks";
    return (
        <MainLayout>
            <div className='px-5'>
                <div className='row'>
                    <div className='col-5'>
                        <div>
                            <h3>Login</h3>
                            <Link to="/register">
                                <h6 className='text-decoration-underline mb-4 text-dark'>Don't have an account?</h6>
                            </Link>
                            <Form onSubmit={validation.handleSubmit}>
                                <div className='mb-3'>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        className='bg-transparent border-black'
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.email || ""}
                                        invalid={validation.touched.email && validation.errors.email ? true : false}
                                    />
                                    {validation.touched.email && validation.errors.email ? (
                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                    ) : null}
                                </div>
                                <div className='mb-3'>
                                    <Input
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                        className='bg-transparent border-black'
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.password || ""}
                                        invalid={validation.touched.password && validation.errors.password ? true : false}
                                    />
                                    {validation.touched.password && validation.errors.password ? (
                                        <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                    ) : null}
                                </div>
                                <input className="form-check-input bg-black mb-3 me-3" type="checkbox" value="" id="flexCheckDefault" />
                                <span>Keep me logged in - applies to all log in options below. More info</span>
                                <button className='btn btn-dark w-100 mb-3' type='submit'>
                                    <div className='d-flex justify-content-between pt-2'>
                                        <h6 className='fw-bold'>LOGIN</h6>
                                        <GrLinkNext className='fs-4' />
                                    </div>
                                </button>
                                <span>By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</span>
                            </Form>
                        </div>
                    </div>
                    <div className='col-7'>
                        <div className='card rounded-4'>
                            <div className='p-3'>
                                <div className='mb-3'>
                                    <h2 className='fw-bold'>Join Kicks Club Get Rewarded</h2>
                                    <h2 className='fw-bold'>Today.</h2>
                                </div>
                                <div className='mb-3'>
                                    <span>As kicks club member you get rewarded with what you love for doing what you love. Sign up today and receive immediate access to these Level 1 benefits:</span>
                                </div>
                                <div className='mb-3'>
                                    <ul>
                                        <li>Free shipping</li>
                                        <li>A 15% off voucher for your next purchase</li>
                                        <li>Access to Members Only products and sales</li>
                                        <li>Access to adidas Running and Training apps</li>
                                        <li>Special offers and promotions</li>
                                    </ul>
                                </div>
                                <div className='mb-5'>
                                    <span>Join now to start earning points, reach new levels and unlock more rewards and benefits from Club.​</span>
                                </div>
                                <div>
                                    <button className='btn btn-dark w-100'>
                                        <div className='d-flex justify-content-between pt-2'>
                                            <h6 className='fw-bold'>JOIN THE CLUB</h6>
                                            <GrLinkNext className='fs-4' />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer closeButton={false} />
        </MainLayout>
    )
}

export default Login