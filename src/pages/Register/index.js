import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { GrLinkNext } from "react-icons/gr";
import { Input, Form, FormFeedback } from 'reactstrap';
import * as Yup from "yup";
import { useFormik } from "formik";
import { registerUser, resetRegisterFlag } from "../../store/auth/register/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Please Enter Your First Name"),
            lastName: Yup.string().required("Please Enter Your Last Name"),
            gender: Yup.string().required("Please Enter Your Gender"),
            email: Yup.string().email("Invalid email format").required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            const newRegister = {
                firstName: values.firstName,
                lastName: values.lastName,
                gender: values.gender,
                email: values.email,
                password: values.password,
            };
            console.log(newRegister);

            dispatch(registerUser(newRegister));
        }
    });

    const { error, registrationError, success } = useSelector(state => ({
        success: state.Register.success,
        error: state.Register.error,
        registrationError: state.Register.registrationError,
    }));

    useEffect(() => {
        if (success) {
            setTimeout(() => navigate("/login"), 3000);
        }

        return () => {
            dispatch(resetRegisterFlag());
        };

    }, [dispatch, success, navigate]);

    document.title = "Register | Kicks";

    return (
        <MainLayout>
            <div className='px-5'>
                <div className='row'>
                    <div className='col-5'>
                        <div>
                            <h3 className='mb-4'>Register</h3>
                            <h4 className='mb-4'>Your Name</h4>
                            <Form onSubmit={validation.handleSubmit}>
                                <div className='mb-3'>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        type="text"
                                        className='bg-transparent border-black'
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.firstName || ""}
                                        invalid={validation.touched.firstName && validation.errors.firstName ? true : false}
                                    />
                                    {validation.touched.firstName && validation.errors.firstName ? (
                                        <FormFeedback type="invalid">{validation.errors.firstName}</FormFeedback>
                                    ) : null}
                                </div>
                                <div className='mb-4'>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        type="text"
                                        className='bg-transparent border-black'
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.lastName || ""}
                                        invalid={validation.touched.lastName && validation.errors.lastName ? true : false}
                                    />
                                    {validation.touched.lastName && validation.errors.lastName ? (
                                        <FormFeedback type="invalid">{validation.errors.lastName}</FormFeedback>
                                    ) : null}
                                </div>
                                <h4 className='mb-4'>Gender</h4>
                                <div className="form-check form-check-inline">
                                    <Input
                                        className="form-check-input bg-black"
                                        type="radio"
                                        name="gender"
                                        id="inlineRadio1"
                                        value="Male"
                                        onChange={validation.handleChange}
                                        checked={validation.values.gender === 'Male'}
                                    />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline mb-4">
                                    <Input
                                        className="form-check-input bg-black"
                                        type="radio"
                                        name="gender"
                                        id="inlineRadio2"
                                        value="Female"
                                        onChange={validation.handleChange}
                                        checked={validation.values.gender === 'Female'}
                                    />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                </div>
                                <h4 className='mb-4'>Login Details</h4>
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
                                <div className='d-flex flex-column'>
                                    <div className='mb-3 d-flex flex-row'>
                                        <Input className="form-check-input bg-black mb-3 me-3" type="checkbox" value="" id="flexCheckDefault" />
                                        <span>Keep me logged in - applies to all log in options below. More info</span>
                                    </div>
                                    <div className='mb-3 d-flex flex-row'>
                                        <Input className="form-check-input bg-black mb-3 me-3" type="checkbox" value="" id="flexCheckDefault2" />
                                        <span>By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</span>
                                    </div>
                                </div>
                                <button className='btn btn-dark w-100 mb-3' type='submit'>
                                    <div className='d-flex justify-content-between pt-2'>
                                        <h6 className='fw-bold'>REGISTER</h6>
                                        <GrLinkNext className='fs-4' />
                                    </div>
                                </button>
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
    );
};

export default Register;
