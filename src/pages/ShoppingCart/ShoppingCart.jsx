import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Footer from '../../components/Footer/Footer'
import CartTotal from '../../components/CartTotal/CartTotal'
import { useDispatch, useSelector } from 'react-redux'
import { allClearCart, removeItemCart, urunArttir, urunAzalt } from '../../redux/addToCart'

import { IoCloseOutline } from "react-icons/io5";
import { FaPlus, FaMinus, FaRegTrashAlt } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom'
import { convertCurrency } from '../../utils/convert-currency'

const ShoppingCart = () => {
    const dispacth = useDispatch()
    const allCartItems = useSelector((state) => state.cart)
    const [animatedItems, setAnimatedItems] = useState({});

    const removeItem = (itemId) => {
        // Start removal animation
        setAnimatedItems(prev => ({
            ...prev,
            [itemId]: true
        }));
        
        // Delay actual removal to allow animation to complete
        setTimeout(() => {
            dispacth(removeItemCart(itemId));
        }, 300);
    }

    const handleAllClear = () => {
        dispacth(allClearCart())
    }

    const handleArttir = (id) => {
        dispacth(urunArttir(id))
    }
    
    const handleAzalt = (id) => {
        dispacth(urunAzalt(id))
    }

    let toplam = 0;

    allCartItems && allCartItems.cart.forEach(element => {
        toplam += element.adet * element.price;
    });

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeaderBar />
            <Header />
            <Breadcrumbs title="Keranjang Belanja" />

            <div className="container mx-auto py-8 px-4 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items Section */}
                    <div className='flex-1'>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className='text-[#151875] font-bold text-2xl'>Keranjang Saya</h2>
                                <span className="bg-[#EEEFFB] text-[#151875] px-3 py-1 rounded-full text-sm font-medium">
                                    {allCartItems.cart.length} Item
                                </span>
                            </div>

                            {/* Empty Cart State */}
                            {allCartItems.cart.length === 0 && (
                                <div className='flex flex-col items-center justify-center py-12 text-center'>
                                    <div className="w-24 h-24 bg-[#F6F7FB] rounded-full flex items-center justify-center mb-6">
                                        <LuShoppingCart className="text-[#FB2E86]" size={40} />
                                    </div>
                                    <h2 className='text-[#151875] font-semibold text-xl mb-4'>Keranjang Anda Kosong</h2>
                                    <p className='text-gray-500 mb-6'>Jelajahi produk kami dan tambahkan ke keranjang</p>
                                    <Link 
                                        to="/products"
                                        className="inline-flex items-center justify-center bg-[#FB2E86] hover:bg-[#e01b73] text-white py-3 px-6 rounded-md transition-colors shadow-md"
                                    >
                                        Jelajahi Produk
                                    </Link>
                                </div>
                            )}

                            {/* Cart Items */}
                            {allCartItems.loading === false && allCartItems.cart.length > 0 && (
                                <div className='space-y-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#FB2E86] scrollbar-track-gray-100 scrollbar-thumb-rounded'>
                                    {allCartItems.cart.map((item, index) => (
                                        <div 
                                            key={index} 
                                            className={`flex flex-col sm:flex-row items-start border-b border-gray-100 pb-6 transition-all duration-300 ${
                                                animatedItems[item.id] ? 'opacity-0 transform translate-x-full' : 'opacity-100'
                                            }`}
                                        >
                                            {/* Product Image */}
                                            <div className="sm:w-[120px] h-[120px] bg-[#F6F7FB] rounded-lg p-2 flex items-center justify-center mr-6 mb-4 sm:mb-0">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    className='max-h-full max-w-full object-contain' 
                                                />
                                            </div>
                                            
                                            {/* Product Details */}
                                            <div className='flex-1'>
                                                <div className='flex justify-between'>
                                                    <Link to={`/product-details/${item.id}`} className='text-[#151875] font-semibold text-lg mb-2 hover:text-[#FB2E86] transition-colors line-clamp-2'>
                                                        {item.title}
                                                    </Link>
                                                    <button 
                                                        className='text-[#FB2E86] hover:bg-[#FB2E86] hover:text-white p-1 rounded-full transition-colors' 
                                                        onClick={() => removeItem(item.id)}
                                                    >
                                                        <IoCloseOutline size={22} />
                                                    </button>
                                                </div>
                                                
                                                {/* Category */}
                                                <div className='text-gray-500 text-sm mb-3'>
                                                    Kategori: {item.category}
                                                </div>
                                                
                                                {/* Price & Quantity Controls */}
                                                <div className='flex flex-wrap justify-between items-end mt-2'>
                                                    <div className='font-bold text-[#FB2E86] text-lg'>
                                                        {convertCurrency(item.price * item.adet)}
                                                    </div>
                                                    
                                                    <div className='flex items-center gap-1 mt-2'>
                                                        <button 
                                                            className='flex justify-center items-center w-8 h-8 rounded-md border border-gray-300 hover:border-[#FB2E86] text-gray-700 hover:text-[#FB2E86] transition-colors'
                                                            onClick={() => handleAzalt(item.id)}
                                                        >
                                                            <FaMinus size={10} />
                                                        </button>
                                                        
                                                        <input 
                                                            type="text" 
                                                            value={item.adet} 
                                                            readOnly
                                                            className="border border-gray-300 w-12 h-8 text-center rounded-md focus:outline-none focus:border-[#FB2E86]" 
                                                        />
                                                        
                                                        <button 
                                                            className='flex justify-center items-center w-8 h-8 rounded-md border border-gray-300 hover:border-[#FB2E86] text-gray-700 hover:text-[#FB2E86] transition-colors'
                                                            onClick={() => handleArttir(item.id)}
                                                        >
                                                            <FaPlus size={10} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Cart Total Section */}
                    <div className='lg:w-[380px]'>
                        <CartTotal 
                            total={toplam.toFixed(2)} 
                            length={allCartItems.cart.length} 
                            onClear={handleAllClear} 
                            products={allCartItems.cart} 
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ShoppingCart