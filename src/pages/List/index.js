import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import Image from "../../assets/Image 90.png"
import Image3 from "../../assets/Rectangle 5.png"
import { Link } from 'react-router-dom'
// import InfiniteScroll from 'react-infinite-scroll-component';
// const [dataProduct, setDataProduct] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     // Memuat data awal produk
//     fetchMoreData();
//   }, []);

//   const fetchMoreData = async () => {
//     // Ganti URL dengan endpoint API yang sesuai untuk mengambil data produk
//     const response = await fetch(`https://api.example.com/products?page=${page}&limit=10`);
//     const newData = await response.json();

//     // Update data produk dan halaman
//     setDataProduct(prevData => [...prevData, ...newData]);
//     setPage(prevPage => prevPage + 1);

//     // Jika tidak ada lagi data yang bisa dimuat
//     if (newData.length === 0) {
//       setHasMore(false);
//     }
//   };

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const List = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);


    const dataProduct = [
        {
            id: 1,
            name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            image: Image3
        },
        {
            id: 2,
            name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            image: Image3
        },
        {
            id: 3,
            name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            image: Image3
        },
        {
            id: 4,
            name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            image: Image3
        },
    ]

    document.title = "List | Kicks";
    return (
        <MainLayout>
            <div className='px-5'>
                <div className='position-relative'>
                    <img src={Image} alt='image' className='w-100 mb-5' />
                </div>
                <div className='position-absolute' style={{ top: 300, left: 100 }}>
                    <p className='fs-3 text-white fw-bold'>Limited time only</p>
                    <p className='text-white fw-bold' style={{ fontSize: "55px" }}>Get 30% off</p>
                    <p className='fs-4 text-white fw-light'>Sneakers made with your comfort in mind so you</p>
                    <p className='fs-4 text-white fw-light'>can put all of your focus into your next session.</p>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='me-auto'>
                        <p className='fs-1 fw-bold'>Life Style Shoes</p>
                        <p className='fs-6 fw-normal'>100 Items</p>
                    </div>
                    <div>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="left">
                            <DropdownToggle caret color='light'>Categories</DropdownToggle>
                            <DropdownMenu dark>
                                <DropdownItem header>Categories</DropdownItem>
                                <DropdownItem>Some Action</DropdownItem>
                                <DropdownItem text>Dropdown Item Text</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div className='row'>
                    {(dataProduct || []).map((product, productIdx) => {
                        return (
                            <div key={`product-` + productIdx} className='col-3'>
                                <div key={`product-` + productIdx} className='d-flex flex-column me-3'>
                                    <img src={product.image} className='border border-5 border-white mb-3 position-relative' style={{ borderRadius: "20px", width: "450px", height: "450px" }} />
                                    <h2 className='text-start fw-bold mb-3'>{product.name}</h2>
                                    <Link to={`/detail/${product.id}`} className='text-decoration-none'>
                                        <button className='btn btn-dark w-100 d-flex justify-content-center fw-bold'>
                                            <div className='me-1'>
                                                <span>VIEW PRODUCT - </span>
                                            </div>
                                            <div>
                                                <span className='text-warning'>Rp.200.000</span>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </MainLayout>
    )
}

export default List