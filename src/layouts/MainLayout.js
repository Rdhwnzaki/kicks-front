import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = (props) => {
    return (
        <div style={{ backgroundColor: "#e7e7e3" }}>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}

export default MainLayout