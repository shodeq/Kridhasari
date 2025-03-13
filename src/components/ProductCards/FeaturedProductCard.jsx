// import React from 'react'
// import Button from '../Button/Button'
// import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
// import { LuShoppingCart } from "react-icons/lu";
// import { Link } from 'react-router-dom'; 
// import { addItemCart } from '../../redux/addToCart';
// import { addToFav } from '../../redux/favoriteSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { convertCurrency } from '../../utils/convert-currency';

// const FeaturedProductCard = (props) => {

//     const dispacth = useDispatch()

//     const favArray = useSelector((state) => state.favorite.favoriteArray)


//     const addToCart = () => {
//         dispacth(addItemCart({
//             id: props.allProduct.id,
//             title: props.allProduct.title,
//             description: props.allProduct.description,
//             category: props.allProduct.category,
//             price: props.allProduct.price,
//             image: props.allProduct.image,
//             adet: 1,
//         }))
//     }

//     const handleAddToFav = () => {
//         dispacth(addToFav({
//             id: props.allProduct.id,
//             title: props.allProduct.title,
//             image: props.allProduct.image,
//             price: props.allProduct.price
//         }))
//     }


//     return (
//         <div key={props.allProduct.id} className='w-full shadow my-12 group hover:bg-productHover duration-150'>
//             <div className='flex flex-col justify-center items-center bg-white p-10 relative'>
//                 <div className='flex items-center gap-4 opacity-0 group-hover:opacity-100 duration-150 absolute top-4 left-4'>

//                     <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-my-purple' onClick={() => addToCart()}><LuShoppingCart size="22px" /></Link>
//                     <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-my-pink' onClick={() => handleAddToFav()}>
//                         {
//                             favArray.find((item) => item.id == props.allProduct.id) ? <IoMdHeart className="text-my-pink" size="22px" fontWeight="700" /> : <IoMdHeartEmpty size="22px" fontWeight="700" />
//                         }
//                     </Link>
//                 </div>
//                 <img src={props.allProduct.image} className=" w-[178px] h-[178px] object-cover mb-8" alt="" />
//                 <div>
//                     <Button
//                         className="bg-[#08D15F] rounded px-3 py-2 text-white opacity-0 group-hover:opacity-100 duration-150"
//                         title="View Details"
//                         link={`/product-details/${props.allProduct.id}`} />
//                 </div>
//             </div>
//             <div className='border-t border-gray-200 flex flex-col items-center py-4'>
//                 <Link to={`/product-details/${props.allProduct.id}`} className='font-bold text-xl -tracking-tight text-textBlue group-hover:text-white line-clamp-1 text-center px-2'>{props.allProduct.title}</Link>
//                 <h6 className='text-gray-500 text-lg font-[600] text-md group-hover:text-white'>{convertCurrency(props.allProduct.price)}</h6>
//             </div>
//         </div >
//     )
// }

// export default FeaturedProductCard


import React from 'react'
import Button from '../Button/Button'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom'; 
import { addItemCart } from '../../redux/addToCart';
import { addToFav } from '../../redux/favoriteSlice';
import { useDispatch, useSelector } from 'react-redux';
import { convertCurrency } from '../../utils/convert-currency';

const FeaturedProductCard = (props) => {
    const dispatch = useDispatch()
    const favArray = useSelector((state) => state.favorite.favoriteArray)

    const addToCart = () => {
        dispatch(addItemCart({
            id: props.allProduct.id,
            title: props.allProduct.title,
            description: props.allProduct.description,
            category: props.allProduct.category,
            price: props.allProduct.price,
            image: props.allProduct.image,
            adet: 1,
        }))
    }

    const handleAddToFav = () => {
        dispatch(addToFav({
            id: props.allProduct.id,
            title: props.allProduct.title,
            image: props.allProduct.image,
            price: props.allProduct.price
        }))
    }

    // Category-based gradient backgrounds
    const categoryStyles = {
        electronics: 'from-violet-100 to-fuchsia-100',
        jewelery: 'from-emerald-100 to-teal-100',
        "men's clothing": 'from-blue-100 to-cyan-100',
        "women's clothing": 'from-rose-100 to-pink-100',
        default: 'from-indigo-100 to-purple-100'
    }

    const getCategoryGradient = (category) => {
        return categoryStyles[category] || categoryStyles.default
    }

    return (
        <div key={props.allProduct.id} 
             className="group relative w-full bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            {/* Main Content Container with Dynamic Gradient */}
            <div className={`relative bg-gradient-to-br ${getCategoryGradient(props.allProduct.category)}`}>
                {/* Top Action Bar */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between z-10">
                    {/* Category Tag */}
                    <span className="px-4 py-1.5 bg-white/80 backdrop-blur-sm text-indigo-600 text-sm font-medium rounded-full flex items-center justify-center">
                        {props.allProduct.category}
                    </span>
                    
                    {/* Like Button */}
                    <button 
                        onClick={handleAddToFav}
                        className="p-2.5 bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white hover:scale-110"
                    >
                        {favArray.find((item) => item.id === props.allProduct.id) ? (
                            <IoMdHeart className="w-5 h-5 text-rose-500" />
                        ) : (
                            <IoMdHeartEmpty className="w-5 h-5 text-indigo-600" />
                        )}
                    </button>
                </div>

                {/* Image Container */}
                <div className="relative p-8 aspect-square">
                    <img 
                        src={props.allProduct.image} 
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                        alt={props.allProduct.title}
                    />
                </div>

                {/* Action Buttons Overlay */}
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-full p-4 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm">
                        <div className="flex gap-2">
                            <button
                                onClick={addToCart}
                                className="flex-1 bg-white/90 hover:bg-white text-indigo-600 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <LuShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </button>
                            <Button
                                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                                title="View Details"
                                link={`/product-details/${props.allProduct.id}`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Info Section */}
            <div className="p-6 bg-white">
                {/* Title */}
                <Link 
                    to={`/product-details/${props.allProduct.id}`}
                    className="block font-medium text-lg text-gray-900 hover:text-indigo-600 line-clamp-1 mb-2 transition-colors duration-300"
                >
                    {props.allProduct.title}
                </Link>

                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-semibold text-indigo-600">
                            {convertCurrency(props.allProduct.price)}
                        </span>
                        {props.allProduct.discount && (
                            <span className="text-sm text-rose-500 font-medium">-20%</span>
                        )}
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">(24)</span>
                    </div>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2 mt-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-gray-600">In stock</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProductCard