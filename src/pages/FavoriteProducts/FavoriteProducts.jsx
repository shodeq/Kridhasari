// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import Header from '../../components/Header/Header'
// import HeaderBar from '../../components/HeaderBar/HeaderBar'
// import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
// import { Link } from 'react-router-dom'
// import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
// import { addToFav, removeToFav } from '../../redux/favoriteSlice'


// const FavoriteProducts = (props) => {

//     const allFavItem = useSelector(state => state.favorite.favoriteArray)
//     const dispacth = useDispatch()


//     const handleDeleteToFav = (id) => {
//         dispacth(removeToFav(id))
//     }



//     return (
//         <div className=''>
//             <HeaderBar />
//             <Header />
//             <Breadcrumbs
//                 title="Favorite Products" />

//             <div className='container mx-auto'>
//                 {
//                     allFavItem.length === 0 &&
//                     <div className='mt-12'>
//                         <h2 className='text-textBlue font-semibold fnt text-4xl mb-4'>Your Favorite List is Empty</h2>
//                         <h6 className=''>Browse <Link to="/products"><span className='text-my-pink fnt font-semibold'>Products</span></Link> to Shop</h6>
//                     </div>
//                 }
//                 <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-12'>
//                     {
//                         allFavItem.map((item, index) => {
//                             return (
//                                 <div key={index} className='flex flex-col items-start justify-center shadow p-4 rounded-xl'>
//                                     <Link to={`/product-details/${item.id}`}><img src={item.image} alt="" className='w-64 h-64 object-contain  ' /></Link>
//                                     <Link to={`/product-details/${item.id}`}><h2 className='fnt font-semibold line-clamp-1 w-52 mt-4'>{item.title}</h2></Link>
//                                     <div className='flex items-center justify-between w-full text-xl mt-2'>
//                                         <span>${item.price || 0}</span>
//                                         <div onClick={() => handleDeleteToFav(item.id)}><IoMdHeart className='text-my-pink cursor-pointer' size="20px" /></div>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default FavoriteProducts



import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FiShoppingCart, FiTrash2, FiX, FiChevronLeft } from "react-icons/fi";
import { addToFav, removeToFav } from '../../redux/favoriteSlice';
import { addItemCart } from '../../redux/addToCart';
import { convertCurrency } from '../../utils/convert-currency';
import toast from 'react-hot-toast';

const FavoriteProducts = () => {
    const allFavItem = useSelector(state => state.favorite.favoriteArray);
    const dispatch = useDispatch();
    const [showUndo, setShowUndo] = useState(false);
    const [removedItem, setRemovedItem] = useState(null);
    const [isGridView, setIsGridView] = useState(true);
    const [animation, setAnimation] = useState({});

    // Fungsi untuk menghapus dari favorit
    const handleDeleteFromFav = (id, item) => {
        // Simpan item yang dihapus untuk keperluan undo
        setRemovedItem(item);
        
        // Animasi penghapusan
        setAnimation({
            id: id,
            action: 'remove'
        });
        
        // Tunda penghapusan sebenarnya untuk menampilkan animasi
        setTimeout(() => {
            dispatch(removeToFav(id));
            
            // Tampilkan toast untuk notifikasi
            setShowUndo(true);
            toast.success("Produk dihapus dari favorit!");
            
            // Otomatis sembunyikan toast undo setelah 5 detik
            setTimeout(() => {
                setShowUndo(false);
            }, 5000);
        }, 300);
    };

    // Fungsi untuk mengembalikan item yang dihapus
    const handleUndoDelete = () => {
        if (removedItem) {
            // Tambahkan kembali ke favorit
            dispatch(addToFav(removedItem));
            toast.success("Produk dikembalikan ke favorit!");
            setShowUndo(false);
        }
    };

    // Fungsi untuk menambahkan ke keranjang
    const handleAddToCart = (item) => {
        dispatch(addItemCart({
            id: item.id,
            title: item.title,
            description: item.description || '',
            category: item.category || '',
            price: item.price,
            image: item.image,
            adet: 1,
        }));
        
        // Animasi penambahan
        setAnimation({
            id: item.id,
            action: 'add'
        });
        
        // Reset animasi setelah selesai
        setTimeout(() => {
            setAnimation({});
        }, 1000);
        
        toast.success("Produk ditambahkan ke keranjang!");
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeaderBar />
            <Header />
            <Breadcrumbs title="Produk Favorit" />
            
            {/* Toast Notifikasi Undo */}
            {showUndo && (
                <div className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-lg p-4 max-w-xs flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <IoMdHeart className="text-[#FB2E86]" size={20} />
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">Dihapus dari favorit</p>
                            <button 
                                onClick={handleUndoDelete}
                                className="text-[#151875] hover:text-[#FB2E86] text-sm font-medium"
                            >
                                Batalkan
                            </button>
                        </div>
                    </div>
                    <button 
                        onClick={() => setShowUndo(false)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <FiX size={18} />
                    </button>
                </div>
            )}

            <div className="container mx-auto px-4 py-8">
                {/* Header dan Kontrol Tampilan */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <h2 className="text-[#151875] font-bold text-2xl mb-1">Daftar Favorit Saya</h2>
                        <p className="text-gray-600">{allFavItem.length} item dalam daftar</p>
                    </div>
                    
                    <div className="flex items-center mt-4 md:mt-0">
                        <Link 
                            to="/products" 
                            className="mr-4 flex items-center text-[#151875] hover:text-[#FB2E86] transition-colors"
                        >
                            <FiChevronLeft className="mr-1" />
                            <span>Lanjut Belanja</span>
                        </Link>
                        
                        <div className="flex border border-gray-300 rounded-md overflow-hidden">
                            <button 
                                onClick={() => setIsGridView(true)}
                                className={`px-3 py-2 ${isGridView ? 'bg-[#FB2E86] text-white' : 'bg-white text-gray-600'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                            </button>
                            <button 
                                onClick={() => setIsGridView(false)}
                                className={`px-3 py-2 ${!isGridView ? 'bg-[#FB2E86] text-white' : 'bg-white text-gray-600'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Daftar Kosong */}
                {allFavItem.length === 0 && (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <div className="w-24 h-24 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-6">
                            <IoMdHeartEmpty className="text-[#FB2E86]" size={48} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#151875] mb-3">Daftar Favorit Anda Kosong</h2>
                        <p className="text-gray-600 mb-6">Jelajahi produk kami dan tambahkan ke favorit untuk melihat di sini.</p>
                        <Link 
                            to="/products"
                            className="inline-flex items-center justify-center bg-[#FB2E86] hover:bg-[#e01b73] text-white py-3 px-6 rounded-md transition-colors"
                        >
                            Jelajahi Produk
                        </Link>
                    </div>
                )}
                
                {/* Daftar Produk */}
                {allFavItem.length > 0 && (
                    isGridView ? (
                        // Grid View
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {allFavItem.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                                        animation.id === item.id && animation.action === 'remove' 
                                            ? 'transform scale-0 opacity-0' 
                                            : animation.id === item.id && animation.action === 'add'
                                            ? 'transform scale-105 shadow-lg' 
                                            : 'hover:shadow-lg'
                                    }`}
                                >
                                    {/* Badge "Favorit" */}
                                    <div className="absolute top-3 left-3 z-10">
                                        <span className="bg-[#EEEFFB] text-[#151875] text-xs px-2 py-1 rounded-full font-medium">
                                            Favorit
                                        </span>
                                    </div>
                                    
                                    {/* Gambar Produk */}
                                    <div className="relative group">
                                        <Link to={`/product-details/${item.id}`}>
                                            <div className="p-6 flex items-center justify-center bg-[#F6F7FB] h-[220px]">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title}
                                                    className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                        </Link>
                                        
                                        {/* Quick Action Buttons */}
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                            <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button 
                                                    onClick={() => handleAddToCart(item)}
                                                    className="p-2 bg-white rounded-full shadow-md hover:bg-[#FB2E86] hover:text-white transition-colors"
                                                    title="Tambahkan ke keranjang"
                                                >
                                                    <FiShoppingCart size={18} />
                                                </button>
                                                <button 
                                                    onClick={() => handleDeleteFromFav(item.id, item)}
                                                    className="p-2 bg-white rounded-full shadow-md hover:bg-[#EF4444] hover:text-white transition-colors"
                                                    title="Hapus dari favorit"
                                                >
                                                    <FiTrash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Info Produk */}
                                    <div className="p-4">
                                        <Link to={`/product-details/${item.id}`}>
                                            <h3 className="font-semibold text-[#151875] mb-2 line-clamp-2 hover:text-[#FB2E86] transition-colors">
                                                {item.title}
                                            </h3>
                                        </Link>
                                        
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="font-bold text-[#FB2E86]">
                                                {convertCurrency ? convertCurrency(item.price) : `Rp ${item.price}`}
                                            </span>
                                            <button 
                                                onClick={() => handleDeleteFromFav(item.id, item)}
                                                className="text-[#FB2E86] hover:text-[#e01b73] transition-colors"
                                            >
                                                <IoMdHeart size={22} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // List View
                        <div className="space-y-4">
                            {allFavItem.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                                        animation.id === item.id && animation.action === 'remove' 
                                            ? 'transform translate-x-full opacity-0' 
                                            : animation.id === item.id && animation.action === 'add'
                                            ? 'transform scale-[1.02] shadow-lg' 
                                            : 'hover:shadow-lg'
                                    }`}
                                >
                                    <div className="flex flex-col sm:flex-row">
                                        {/* Gambar Produk */}
                                        <div className="relative sm:w-[180px] sm:min-w-[180px] sm:h-[180px]">
                                            <div className="absolute top-2 left-2 z-10">
                                                <span className="bg-[#EEEFFB] text-[#151875] text-xs px-2 py-1 rounded-full font-medium">
                                                    Favorit
                                                </span>
                                            </div>
                                            <Link to={`/product-details/${item.id}`}>
                                                <div className="p-4 flex items-center justify-center bg-[#F6F7FB] h-full">
                                                    <img 
                                                        src={item.image} 
                                                        alt={item.title}
                                                        className="max-h-full object-contain transition-transform duration-300 hover:scale-110"
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        {/* Info Produk */}
                                        <div className="flex-1 p-4 flex flex-col justify-between">
                                            <div>
                                                <Link to={`/product-details/${item.id}`}>
                                                    <h3 className="font-semibold text-[#151875] text-lg mb-2 hover:text-[#FB2E86] transition-colors">
                                                        {item.title}
                                                    </h3>
                                                </Link>
                                                
                                                <p className="text-[#FB2E86] font-bold text-lg mb-2">
                                                    {convertCurrency ? convertCurrency(item.price) : `Rp ${item.price}`}
                                                </p>
                                                
                                                {item.description && (
                                                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                            
                                            <div className="flex items-center gap-3 mt-auto">
                                                <button 
                                                    onClick={() => handleAddToCart(item)}
                                                    className="flex items-center gap-2 bg-[#FB2E86] hover:bg-[#e01b73] text-white py-2 px-4 rounded-md transition-colors"
                                                >
                                                    <FiShoppingCart size={16} />
                                                    <span>Tambahkan ke Keranjang</span>
                                                </button>
                                                
                                                <button 
                                                    onClick={() => handleDeleteFromFav(item.id, item)}
                                                    className="flex items-center gap-2 border border-red-300 text-[#EF4444] hover:bg-red-50 py-2 px-4 rounded-md transition-colors"
                                                >
                                                    <FiTrash2 size={16} />
                                                    <span>Hapus</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>
            
            <Footer />
        </div>
    );
};

export default FavoriteProducts;