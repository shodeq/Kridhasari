import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { LuShoppingCart, LuShoppingBag } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { addItemCart } from '../../redux/addToCart';
import { addToFav } from '../../redux/favoriteSlice';
import { convertCurrency } from '../../utils/convert-currency';

const ListProduct = ({ details, viewMode = 'grid' }) => {
    const dispatch = useDispatch();
    const favArray = useSelector((state) => state.favorite.favoriteArray);
    const isFavorite = favArray.find((item) => item.id === details.id);
    const [isHovered, setIsHovered] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);

    const addToCart = () => {
        dispatch(addItemCart({
            id: details.id,
            title: details.title,
            description: details.description,
            category: details.category,
            price: details.price,
            image: details.image,
            adet: 1,
        }));
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 1500);
    };

    const handleAddToFav = () => {
        dispatch(addToFav({
            id: details.id,
            title: details.title,
            image: details.image,
            price: details.price
        }));
    };

    // Fungsi untuk memotong teks yang terlalu panjang
    const truncateText = (text, maxLength = 100) => {
        if (!text) return '';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    // Grid View Component
    if (viewMode === 'grid') {
        return (
            <div 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Category Tag */}
                <div className="relative overflow-hidden bg-[#F6F7FB]">
                    <span className="absolute top-3 left-3 px-2 py-1 bg-[#EEEFFB] text-[#151875] text-xs font-medium rounded-full z-10">
                        {details.category}
                    </span>
                    
                    {/* Favorite Button */}
                    <button 
                        onClick={handleAddToFav}
                        className={`absolute top-3 right-3 p-2 rounded-full shadow-sm z-10 ${
                            isFavorite 
                            ? 'bg-[#FB2E86] text-white' 
                            : 'bg-white text-[#FB2E86] hover:bg-[#FB2E86] hover:text-white'
                        } transition-all duration-300`}
                    >
                        {isFavorite 
                            ? <IoMdHeart size={18} /> 
                            : <IoMdHeartEmpty size={18} />
                        }
                    </button>
                    
                    {/* Product Image */}
                    <Link to={`/product-details/${details.id}`}>
                        <div className="p-6 h-48 flex items-center justify-center">
                            <img 
                                src={details.image} 
                                alt={details.title} 
                                className={`h-full object-contain transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                            />
                        </div>
                    </Link>
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                    <Link to={`/product-details/${details.id}`}>
                        <h3 className="font-semibold text-[#151875] text-lg hover:text-[#FB2E86] transition-colors line-clamp-1">
                            {details.title}
                        </h3>
                    </Link>
                    
                    <div className="mt-2">
                        <span className="font-bold text-[#FB2E86] text-lg">
                            {convertCurrency(details.price)}
                        </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mt-2 mb-4 line-clamp-2 h-10">
                        {truncateText(details.description, 80)}
                    </p>
                    
                    {/* Add to Cart Button */}
                    <button 
                        onClick={addToCart}
                        className={`w-full flex items-center justify-center gap-2 rounded-md py-2 px-4 transition-all duration-300 ${
                            addedToCart 
                                ? 'bg-green-500 text-white' 
                                : 'bg-[#FB2E86] hover:bg-[#e01b73] text-white'
                        }`}
                    >
                        {addedToCart 
                            ? <><LuShoppingBag size={16} /> <span>Ditambahkan!</span></>
                            : <><LuShoppingCart size={16} /> <span>Tambahkan ke Keranjang</span></>
                        }
                    </button>
                </div>
            </div>
        );
    } 
    // List View Component
    else {
        return (
            <div 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="relative md:w-1/4 bg-[#F6F7FB]">
                        <span className="absolute top-3 left-3 px-2 py-1 bg-[#EEEFFB] text-[#151875] text-xs font-medium rounded-full z-10">
                            {details.category}
                        </span>
                        
                        <Link to={`/product-details/${details.id}`}>
                            <div className="p-6 h-48 md:h-full flex items-center justify-center">
                                <img 
                                    src={details.image} 
                                    alt={details.title} 
                                    className={`max-h-40 object-contain transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                                />
                            </div>
                        </Link>
                    </div>
                    
                    {/* Info Section */}
                    <div className="md:w-3/4 p-4 md:p-6 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            <Link to={`/product-details/${details.id}`}>
                                <h3 className="font-semibold text-[#151875] text-xl hover:text-[#FB2E86] transition-colors pr-10">
                                    {details.title}
                                </h3>
                            </Link>
                            
                            <button 
                                onClick={handleAddToFav}
                                className={`p-2 rounded-full shadow-sm ${
                                    isFavorite 
                                        ? 'bg-[#FB2E86] text-white' 
                                        : 'bg-white text-[#FB2E86] hover:bg-[#FB2E86] hover:text-white'
                                } transition-all duration-300`}
                            >
                                {isFavorite 
                                    ? <IoMdHeart size={18} /> 
                                    : <IoMdHeartEmpty size={18} />
                                }
                            </button>
                        </div>
                        
                        <span className="font-bold text-[#FB2E86] text-xl mb-3">
                            {convertCurrency(details.price)}
                        </span>
                        
                        <p className="text-gray-600 mb-4 flex-grow">
                            {details.description}
                        </p>
                        
                        <div className="mt-auto">
                            <button 
                                onClick={addToCart}
                                className={`flex items-center justify-center gap-2 rounded-md py-2 px-6 transition-all duration-300 ${
                                    addedToCart 
                                        ? 'bg-green-500 text-white' 
                                        : 'bg-[#FB2E86] hover:bg-[#e01b73] text-white'
                                }`}
                            >
                                {addedToCart 
                                    ? <><LuShoppingBag size={16} /> <span>Ditambahkan!</span></>
                                    : <><LuShoppingCart size={16} /> <span>Tambahkan ke Keranjang</span></>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ListProduct;