import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { addToFav } from '../../redux/favoriteSlice';
import { addItemCart } from '../../redux/addToCart';
import { convertCurrency } from '../../utils/convert-currency';

const LeatesProductCard = (props) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addItemCart({
            id: props.leatesData.id,
            title: props.leatesData.title,
            description: props.leatesData.description,
            category: props.leatesData.category,
            price: props.leatesData.price,
            image: props.leatesData.image,
            adet: 1,
        }))
    }

    const handleAddToFav = () => {
        dispatch(addToFav({
            id: props.leatesData.id,
            title: props.leatesData.title,
            image: props.leatesData.image,
            price: props.leatesData.price
        }))
    }

    return (
        <div className='w-full bg-white rounded-xl overflow-hidden shadow-lg group hover:-translate-y-1 transition-all duration-300'>
            {/* Main Content Container */}
            <div className='relative bg-gradient-to-br from-gray-50 to-white p-6'>
                {/* Sale Badge */}
                <div className='absolute -right-2 -top-2 bg-indigo-600 text-white px-4 py-1 transform rotate-6 z-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Sale!
                </div>

                {/* Category Tag */}
                <span className='absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 text-xs font-medium rounded-full'>
                    {props.leatesData.category}
                </span>

                {/* Image Container */}
                <div className='relative aspect-square flex items-center justify-center p-4'>
                    <img 
                        src={props.leatesData.image} 
                        className='w-48 h-48 object-contain transition-transform duration-500 group-hover:scale-110'
                        alt={props.leatesData.title}
                    />
                    
                    {/* Action Buttons */}
                    <div className='absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-full group-hover:translate-x-0'>
                        <button 
                            onClick={handleAddToCart}
                            className='bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transform hover:scale-110 transition-all duration-300'
                        >
                            <LuShoppingCart className='w-5 h-5 text-indigo-600' />
                        </button>
                        <button 
                            onClick={handleAddToFav}
                            className='bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transform hover:scale-110 transition-all duration-300'
                        >
                            <IoMdHeartEmpty className='w-5 h-5 text-indigo-600' />
                        </button>
                        <Link 
                            to={`/product-details/${props.leatesData.id}`}
                            className='bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transform hover:scale-110 transition-all duration-300'
                        >
                            <IoMdSearch className='w-5 h-5 text-indigo-600' />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <div className='p-4 bg-white border-t border-gray-100'>
                <div className='flex flex-col gap-2'>
                    <Link 
                        to={`/product-details/${props.leatesData.id}`}
                        className='text-gray-800 font-semibold text-lg hover:text-indigo-600 transition-colors duration-300 line-clamp-1'
                    >
                        {props.leatesData.title}
                    </Link>
                    
                    <div className='flex items-center justify-between'>
                        <span className='text-lg font-bold text-indigo-600'>
                            {convertCurrency(props.leatesData.price)}
                        </span>
                        {/* Rating dapat ditambahkan di sini jika diperlukan */}
                        <div className='flex items-center gap-1'>
                            <div className='w-2 h-2 rounded-full bg-emerald-500'></div>
                            <span className='text-sm text-gray-600'>In stock</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeatesProductCard