import React, { useEffect, useState } from 'react'
import Logo from "../assets/Logo.png"
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [authUser, setAuthUser] = useState()

    useEffect(() => {
        const obj = JSON.parse(sessionStorage.getItem("authUser"))
        if (obj) {
            setAuthUser(obj.data)
        }
    }, [])

    return (
        <div className='px-5'>
            <div className='pt-4 pb-5'>
                <div className='bg-white d-flex rounded-4 align-items-center py-4 px-4'>
                    <div className='flex-grow-1 d-flex justify-content-start'>
                        <img src={Logo} style={{ width: "150px" }} alt="Logo" />
                    </div>
                    <div className='flex-shrink-0 d-flex mt-1'>
                        <Link to={authUser && authUser ? "/list" : "/login"}>
                            <FaSearch className='me-5 fs-4 mt-1 text-dark' />
                        </Link>
                        <Link to={authUser && authUser ? "/cart" : "/login"}>
                            <FaShoppingCart className='me-5 fs-4 mt-1 text-dark' />
                        </Link>
                        {authUser && authUser ? (
                            <div
                                className="rounded-circle bg-primary d-flex justify-content-center align-items-center"
                                style={{
                                    width: '35px',
                                    height: '35px',
                                    color: 'white',
                                    fontSize: '14px',
                                }}
                            >
                                {authUser.firstName.charAt(0)}
                            </div>
                        ) : <Link to="/login">
                            <FaUser className='me-5 fs-4 mt-1 text-dark' />
                        </Link>}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar