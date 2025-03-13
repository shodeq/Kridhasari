// import React, { useState, useEffect } from 'react';
// import HeaderBar from '../../components/HeaderBar/HeaderBar';
// import Header from '../../components/Header/Header';
// import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
// import Footer from '../../components/Footer/Footer';
// import ProductPageCard from '../../components/ProductCards/ProductPageCard';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProductId } from '../../redux/getProductId';


// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import '../../../node_modules/react-loading-skeleton/dist/skeleton.css'

// const ProductDetails = () => {
//     const { id } = useParams();

//     const dispacth = useDispatch()
//     const products = useSelector((state) => state.getProductId)

//     const [productTab, setProductTab] = useState([
//         {
//             title: "Description",
//             text: "xx",
//             statusCheck: true,
//         }, {
//             title: "Additional Info",
//             text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi veritatis aut cum minus debitis, facilis iusto fugiat enim fugit quod.",
//             statusCheck: false,
//         }, {
//             title: "Reviews",
//             text: "Necessitatibus nam cum, alias possimus reiciendis cupiditate ex provident quo odit.",
//             statusCheck: false,
//         }, {
//             title: "Video",
//             text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptates provident numquam saepe! Repellat, maxime tempore voluptatibus rem animi cum saepe veniam pariatur voluptas alias dicta vel nulla beatae amet accusantium. Numquam facere distinctio tempore placeat, voluptates voluptatem repudiandae quibusdam deserunt provident maiores atque natus necessitatibus dolor modi, laudantium doloremque est? Dicta quos obcaecati dignissimos illo ipsam sapiente eos quidem.",
//             statusCheck: false,
//         },
//     ]);
//     const tabClick = (index) => {
//         const updatedTabs = productTab.map((tab, i) => {
//             if (i === index) {
//                 return { ...tab, statusCheck: true };
//             } else {
//                 return { ...tab, statusCheck: false };
//             }
//         });
//         setProductTab(updatedTabs);
//     };
//     useEffect(() => {
//         dispacth(getProductId(id))
//     }, [])

    

//     return (
//         <div>
//             <HeaderBar />
//             <Header />
//             <Breadcrumbs title="Product Details" />

//             <div className='container mx-auto'>
//                 {
//                     products.loading ? <SkeletonTheme baseColor="#dfdede" highlightColor="#6b6b6b" >
//                         <p className='py-24'>
//                             <Skeleton count={5} className='my-2' />
//                         </p>
//                     </SkeletonTheme> : <ProductPageCard product={products.data} loading={products.loading} details={products.data} />
//                 }
//             </div>

//             <div className='bg-[#F9F8FE]'>
//                 <div className='container mx-auto py-36'>
//                     <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 pb-4 md:pb-12'>
//                         {productTab.map((item, index) => (
//                             <div key={index} className={`cursor-pointer border-b-2 border-transparent ${item.statusCheck && "border-b-2 border-my-pink"}`}>
//                                 <div onClick={() => tabClick(index)}>
//                                     <h2 className='fnt text-textBlue text-2xl font-semibold'>{item.title}</h2>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div>
//                         {productTab.map((item, index) => (
//                             <div key={index} className=''>
//                                 {item.statusCheck && <div><p>{index == 0 ? products.data.description : item.text}</p></div>}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// }

// export default ProductDetails;




import React, { useState, useEffect } from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Footer from '../../components/Footer/Footer';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductId } from '../../redux/getProductId';
import { addItemCart } from '../../redux/addToCart';
import { addToFav } from '../../redux/favoriteSlice';
import { convertCurrency } from '../../utils/convert-currency';

// Icons
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FiArrowLeft, FiShare2 } from 'react-icons/fi';
import { LuShoppingCart, LuShoppingBag, LuPackage, LuInfo, LuStar, LuVideo } from "react-icons/lu";

// Skeleton Loading
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import '../../../node_modules/react-loading-skeleton/dist/skeleton.css';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.getProductId);
    const favArray = useSelector((state) => state.favorite.favoriteArray);
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    
    // State untuk tab produk
    const [productTab, setProductTab] = useState([
        {
            title: "Deskripsi",
            icon: <LuPackage size={18} />,
            text: "xx",
            statusCheck: true,
        }, {
            title: "Informasi Tambahan",
            icon: <LuInfo size={18} />,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi veritatis aut cum minus debitis, facilis iusto fugiat enim fugit quod.",
            statusCheck: false,
        }, {
            title: "Ulasan",
            icon: <LuStar size={18} />,
            text: "Necessitatibus nam cum, alias possimus reiciendis cupiditate ex provident quo odit.",
            statusCheck: false,
        }, {
            title: "Video",
            icon: <LuVideo size={18} />,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptates provident numquam saepe! Repellat, maxime tempore voluptatibus rem animi cum saepe veniam pariatur voluptas alias dicta vel nulla beatae amet accusantium.",
            statusCheck: false,
        },
    ]);

    // Handler untuk mengklik tab
    const tabClick = (index) => {
        const updatedTabs = productTab.map((tab, i) => {
            return { ...tab, statusCheck: i === index };
        });
        setProductTab(updatedTabs);
    };

    // Fungsi untuk menambah/mengurangi quantity
    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    // Handler untuk menambahkan ke keranjang
    const addToCart = () => {
        if (products.data) {
            dispatch(addItemCart({
                id: products.data.id,
                title: products.data.title,
                description: products.data.description,
                category: products.data.category,
                price: products.data.price,
                image: products.data.image,
                adet: quantity,
            }));
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 1500);
        }
    };

    // Handler untuk menambahkan ke favorit
    const handleAddToFav = () => {
        if (products.data) {
            dispatch(addToFav({
                id: products.data.id,
                title: products.data.title,
                image: products.data.image,
                price: products.data.price
            }));
        }
    };

    // Cek apakah produk ada di favorit
    const isFavorite = products.data && favArray.find((item) => item.id === products.data.id);

    useEffect(() => {
        dispatch(getProductId(id));
        // Reset quantity saat produk berubah
        setQuantity(1);
        // Scroll ke atas saat halaman dimuat
        window.scrollTo(0, 0);
    }, [dispatch, id]);

    // Generate rating stars
    const renderRatingStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<span key={i} className="text-yellow-400">★</span>);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<span key={i} className="text-yellow-400">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300">★</span>);
            }
        }
        
        return stars;
    };

    // Menghasilkan tag warna untuk kategori
    const getCategoryColorClass = (category) => {
        const categoryMap = {
            "men's clothing": "bg-[#EEEFFB] text-[#151875]",
            "women's clothing": "bg-[#FFECEE] text-[#FB2E86]",
            "jewelery": "bg-[#FFF6DA] text-[#FF9900]",
            "electronics": "bg-[#E6F8F3] text-[#2EC1AC]"
        };
        
        return categoryMap[category] || "bg-[#EEEFFB] text-[#151875]";
    };

    return (
        <div className="bg-[#F6F7FB] min-h-screen">
            <HeaderBar />
            <Header />
            <Breadcrumbs title="Detail Produk" />

            {products.loading ? (
                <div className="container mx-auto px-4 py-8">
                    <SkeletonTheme baseColor="#dfdede" highlightColor="#f5f5f5">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-2/5">
                                    <Skeleton height={400} className="mb-4" />
                                    <div className="grid grid-cols-4 gap-2">
                                        <Skeleton height={80} />
                                        <Skeleton height={80} />
                                        <Skeleton height={80} />
                                        <Skeleton height={80} />
                                    </div>
                                </div>
                                <div className="md:w-3/5">
                                    <Skeleton height={36} width="70%" className="mb-4" />
                                    <Skeleton height={24} width="40%" className="mb-3" />
                                    <Skeleton height={24} width="30%" className="mb-4" />
                                    <Skeleton height={80} className="mb-4" />
                                    <Skeleton height={24} width="60%" className="mb-3" />
                                    <Skeleton height={50} width="40%" className="mb-4" />
                                    <div className="flex gap-3">
                                        <Skeleton height={46} width={120} />
                                        <Skeleton height={46} width={46} circle={true} />
                                        <Skeleton height={46} width={46} circle={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SkeletonTheme>
                </div>
            ) : products.data ? (
                <div className="container mx-auto px-4 py-8">
                    {/* Back to Products Link */}
                    <div className="mb-6">
                        <Link to="/products" className="flex items-center text-[#151875] hover:text-[#FB2E86] transition-colors">
                            <FiArrowLeft className="mr-2" />
                            <span>Kembali ke Daftar Produk</span>
                        </Link>
                    </div>
                    
                    {/* Product Details Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                        <div className="flex flex-col md:flex-row">
                            {/* Product Image Section */}
                            <div className="md:w-2/5 p-6 bg-[#F6F7FB]">
                                <div className="mb-4 flex items-center justify-center bg-white rounded-lg p-4 h-[400px] relative group">
                                    <span className={`absolute top-3 left-3 px-3 py-1 ${getCategoryColorClass(products.data.category)} text-xs font-medium rounded-full z-10`}>
                                        {products.data.category}
                                    </span>
                                    
                                    <img 
                                        src={products.data.image} 
                                        alt={products.data.title}
                                        className="max-h-full object-contain transition-all duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Thumbnail images */}
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="border border-[#FB2E86] rounded-md p-2 bg-white cursor-pointer hover:border-[#FB2E86] transition-colors">
                                        <img 
                                            src={products.data.image} 
                                            alt={products.data.title}
                                            className="h-16 w-full object-contain"
                                        />
                                    </div>
                                    {/* Additional thumbnails would go here */}
                                </div>
                            </div>
                            
                            {/* Product Info Section */}
                            <div className="md:w-3/5 p-6">
                                <h1 className="text-2xl font-bold text-[#151875] mb-2">{products.data.title}</h1>
                                
                                <div className="flex items-center mb-4">
                                    <div className="flex mr-2">
                                        {renderRatingStars(products.data.rating?.rate || 4.5)}
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        {products.data.rating?.rate || 4.5} ({products.data.rating?.count || 120} ulasan)
                                    </span>
                                </div>
                                
                                <div className="text-2xl font-bold text-[#FB2E86] mb-4">
                                    {convertCurrency(products.data.price)}
                                </div>
                                
                                <div className="text-gray-600 mb-6">
                                    <p>{products.data.description}</p>
                                </div>
                                
                                {/* Quantity Selector */}
                                <div className="mb-6">
                                    <h3 className="text-[#151875] font-medium mb-2">Jumlah</h3>
                                    <div className="flex items-center">
                                        <button 
                                            onClick={decrementQuantity} 
                                            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md bg-[#F6F7FB] hover:bg-[#EEEFFB] text-[#151875] transition-colors"
                                        >
                                            -
                                        </button>
                                        <input 
                                            type="number" 
                                            value={quantity} 
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="w-16 h-10 text-center border-t border-b border-gray-300 outline-none text-[#151875]"
                                        />
                                        <button 
                                            onClick={incrementQuantity}
                                            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md bg-[#F6F7FB] hover:bg-[#EEEFFB] text-[#151875] transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    <button 
                                        onClick={addToCart}
                                        className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-6 rounded-md transition-all duration-300 ${
                                            addedToCart 
                                            ? 'bg-green-500 text-white' 
                                            : 'bg-[#FB2E86] hover:bg-[#e01b73] text-white'
                                        }`}
                                    >
                                        {addedToCart 
                                            ? <><LuShoppingBag size={18} /> <span>Ditambahkan!</span></>
                                            : <><LuShoppingCart size={18} /> <span>Tambahkan ke Keranjang</span></>
                                        }
                                    </button>
                                    
                                    <button 
                                        onClick={handleAddToFav}
                                        className={`w-12 h-12 flex items-center justify-center rounded-md transition-all duration-300 ${
                                            isFavorite 
                                            ? 'bg-[#FB2E86] text-white' 
                                            : 'bg-white text-[#FB2E86] border border-[#FB2E86] hover:bg-[#FB2E86] hover:text-white'
                                        }`}
                                    >
                                        {isFavorite 
                                            ? <IoMdHeart size={22} /> 
                                            : <IoMdHeartEmpty size={22} />
                                        }
                                    </button>
                                    
                                    <button className="w-12 h-12 flex items-center justify-center bg-white hover:bg-[#EEEFFB] text-[#151875] rounded-md border border-gray-300 transition-colors">
                                        <FiShare2 size={18} />
                                    </button>
                                </div>
                                
                                {/* Additional Info */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="text-sm text-gray-500">Kode Produk</h4>
                                            <p className="font-medium text-[#151875]">SKU-{products.data.id}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-gray-500">Ketersediaan</h4>
                                            <p className="font-medium text-green-600">Tersedia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Product Details Tabs */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Tab Headers */}
                        <div className="flex overflow-x-auto scrollbar-hide border-b">
                            {productTab.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => tabClick(index)}
                                    className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap transition-colors ${
                                        item.statusCheck 
                                        ? 'text-[#FB2E86] border-b-2 border-[#FB2E86] font-medium' 
                                        : 'text-[#151875] hover:text-[#FB2E86] hover:bg-[#F6F7FB]'
                                    }`}
                                >
                                    {item.icon}
                                    {item.title}
                                </button>
                            ))}
                        </div>
                        
                        {/* Tab Content */}
                        <div className="p-6">
                            {productTab.map((item, index) => (
                                <div key={index} className={item.statusCheck ? 'block' : 'hidden'}>
                                    <div className="prose max-w-none">
                                        <p className="text-gray-700 leading-relaxed">
                                            {index === 0 ? products.data.description : item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Related Products Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-[#151875] mb-6">Produk Terkait</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {/* This would be filled with actual related products */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
                                <div className="relative bg-[#F6F7FB] p-4">
                                    <span className={`absolute top-3 left-3 px-2 py-1 bg-[#EEEFFB] text-[#151875] text-xs font-medium rounded-full z-10`}>
                                        {products.data.category}
                                    </span>
                                    <div className="h-40 flex items-center justify-center">
                                        <img 
                                            src={products.data.image} 
                                            alt="Related Product" 
                                            className="max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-[#151875] mb-2 line-clamp-1 hover:text-[#FB2E86] transition-colors">Produk Serupa</h3>
                                    <p className="text-[#FB2E86] font-bold">Rp 150.000</p>
                                </div>
                            </div>
                            {/* Additional related products would go here */}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto px-4 py-16 text-center">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-[#151875] mb-4">Produk Tidak Ditemukan</h2>
                        <p className="text-gray-600 mb-6">Maaf, produk yang Anda cari tidak tersedia.</p>
                        <Link 
                            to="/products" 
                            className="inline-flex items-center justify-center gap-2 bg-[#FB2E86] hover:bg-[#e01b73] text-white py-2 px-6 rounded-md transition-colors"
                        >
                            <FiArrowLeft size={18} />
                            Kembali ke Daftar Produk
                        </Link>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default ProductDetails;