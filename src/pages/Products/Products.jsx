// import React, { useEffect, useState } from 'react';
// import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
// import HeaderBar from '../../components/HeaderBar/HeaderBar'
// import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer'
// import Filter from '../../components/Filter/Filter'
// import ListProduct from '../../components/ProductCards/ListProduct'
// import Search from '../../components/Header/Search'

// import { getProducts } from '../../redux/getProducts'
// import { useDispatch, useSelector } from 'react-redux';


// const Products = () => {
//     const [searchValue, setSearchValue] = useState("");

//     const [selectedCategories, setSelectedCategories] = useState([]);

//     const handleCategoryToggle = (category) => {
//         if (selectedCategories.includes(category)) {
//             setSelectedCategories(selectedCategories.filter(item => item !== category))
//         } else {
//             const newS = [...selectedCategories, category]
//             setSelectedCategories(newS)
//         }
//     }

//     const [minPrice, setMinPrice] = useState(1);
//     const [maxPrice, setMaxPrice] = useState(999999);

//     const handleMin = (e) => {
//         setMinPrice(e.target.value)
//     }
//     const handleMax = (e) => {
//         setMaxPrice(e.target.value)
//     }



//     const handleSearchValue = (event) => {
//         setSearchValue(event.target.value)
//     }


//     const dispatch = useDispatch()
//     const allProducts = useSelector((state) => state.getProducts)


//     useEffect(() => {
//         dispatch(getProducts())
//     }, [])

//     return (
//         <div>
//             <HeaderBar />
//             <Header />
//             <Breadcrumbs
//                 title="Shop Grid Default" />

//             <div className='container mx-auto py-16'>
//                 <div className='py-8'>
//                     <h2 className='text-textBlue fnt font-bold text-2xl'>Ecommerce Acceories & Fashion item </h2>
//                     <h6 className='text-my-subText text-sm'>About 9,620 results (0.62 seconds)</h6>
//                 </div>
//                 <div className='grid grid-cols-8 gap-4'>
//                     <div className='col-span-8 md:col-span-2'>
//                         <div className='mb-4'>
//                             <Search onChange={handleSearchValue} text={searchValue} />
//                         </div>
//                         <div className='flex flex-col md:flex-row items-start gap-4 mb-4'>
//                             <div>
//                                 <h6 className='fnt text-textBlue'>Min.</h6>
//                                 <input onChange={(e) => handleMin(e)}
//                                     type="number" min="1" value={minPrice} className='border border-my-gray outline-none p-2 w-full' placeholder='min' />
//                             </div>
//                             <div>
//                                 <h6 className='fnt text-textBlue'>Max.</h6>
//                                 <input onChange={(e) => handleMax(e)}
//                                     type="number" min="2" value={maxPrice} className='border border-my-gray outline-none p-2 w-full' placeholder='max' />
//                             </div>
//                         </div>
//                         <h4 className='fnt text-textBlue text-lg'>Categories:</h4>
//                         <label className='flex ites-center gap-2 pt-2'>
//                             <input
//                                 onChange={() => handleCategoryToggle("men's clothing")} checked={selectedCategories.includes("men's clothing")}
//                                 type="checkbox" id="check" className="accent-[#ffdbe7] focus:accent-my-pink" />
//                             <span className='capitalize text-my-subText font-[400] '>men's clothing</span>
//                         </label>
//                         <label className='flex ites-center gap-2 pt-2'>
//                             <input
//                                 onChange={() => handleCategoryToggle("jewelery")} checked={selectedCategories.includes("jewelery")}
//                                 type="checkbox" id="check" className="accent-[#ffdbe7] focus:accent-my-pink" />
//                             <span className='capitalize text-my-subText font-[400] '>jewelery</span>
//                         </label>
//                         <label className='flex ites-center gap-2 pt-2'>
//                             <input
//                                 onChange={() => handleCategoryToggle("electronics")} checked={selectedCategories.includes("electronics")}
//                                 type="checkbox" id="check" className="accent-[#ffdbe7] focus:accent-my-pink" />
//                             <span className='capitalize text-my-subText font-[400] '>electronics</span>
//                         </label>
//                         <label className='flex ites-center gap-2 pt-2'>
//                             <input
//                                 onChange={() => handleCategoryToggle("women's clothing")} checked={selectedCategories.includes("women's clothing")}
//                                 type="checkbox" id="check" className="accent-[#ffdbe7] focus:accent-my-pink" />
//                             <span className='capitalize text-my-subText font-[400] '>women's clothing</span>
//                         </label>
//                     </div>
//                     <div className='col-span-8 md:col-span-6'>
//                         {
//                             allProducts.data &&
//                             allProducts.data
//                                 .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
//                                 .filter(item => item.price >= minPrice && item.price <= maxPrice)
//                                 .filter(item => selectedCategories.length == 0 || selectedCategories.includes(item.category))
//                                 .map((item, index) => {
//                                     return (
//                                         <ListProduct key={index} details={item} />
//                                     )
//                                 })
//                         }
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }

// export default Products




import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ListProduct from '../../components/ProductCards/ListProduct';
import { getProducts } from '../../redux/getProducts';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch, FiFilter, FiGrid, FiList, FiChevronDown } from 'react-icons/fi';
import { BiSortAlt2 } from 'react-icons/bi';

const Products = () => {
    const [searchValue, setSearchValue] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(999999);
    const [showFilters, setShowFilters] = useState(false);
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('default');

    const handleCategoryToggle = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            const newS = [...selectedCategories, category];
            setSelectedCategories(newS);
        }
    };

    const handleMin = (e) => {
        setMinPrice(e.target.value);
    };
    
    const handleMax = (e) => {
        setMaxPrice(e.target.value);
    };

    const handleSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setMinPrice(1);
        setMaxPrice(999999);
        setSearchValue("");
    };

    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.getProducts);
    
    // Mendapatkan semua kategori unik dari produk
    const categories = allProducts.data 
        ? [...new Set(allProducts.data.map(item => item.category))]
        : [];

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    // Fungsi untuk mendapatkan produk yang difilter dan diurutkan
    const getFilteredAndSortedProducts = () => {
        if (!allProducts.data) return [];
        
        let filtered = allProducts.data
            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .filter(item => item.price >= minPrice && item.price <= maxPrice)
            .filter(item => selectedCategories.length === 0 || selectedCategories.includes(item.category));
        
        // Menerapkan pengurutan
        switch (sortBy) {
            case 'price-low':
                return filtered.sort((a, b) => a.price - b.price);
            case 'price-high':
                return filtered.sort((a, b) => b.price - a.price);
            case 'name-az':
                return filtered.sort((a, b) => a.title.localeCompare(b.title));
            case 'name-za':
                return filtered.sort((a, b) => b.title.localeCompare(a.title));
            default:
                return filtered;
        }
    };

    const filteredProducts = getFilteredAndSortedProducts();

    return (
        <div className="bg-[#EEEFFB] min-h-screen">
            <HeaderBar />
            <Header />
            <Breadcrumbs title="Produk Kami" />
            
            <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h2 className="text-[#151875] font-bold text-2xl">Aneka Camilan Tradisional</h2>
                            <p className="text-gray-500 text-sm">{filteredProducts.length} produk ditemukan</p>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-4 md:mt-0">
                            <button 
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#FB2E86] text-white' : 'bg-gray-200 text-gray-600'}`}
                                title="Grid View"
                            >
                                <FiGrid size={18} />
                            </button>
                            <button 
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#FB2E86] text-white' : 'bg-gray-200 text-gray-600'}`}
                                title="List View"
                            >
                                <FiList size={18} />
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Search dan Filter Controls */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4 items-stretch">
                        {/* Search Bar */}
                        <div className="flex-grow relative">
                            <input
                                type="text"
                                placeholder="Cari produk..."
                                value={searchValue}
                                onChange={handleSearchValue}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FB2E86] focus:border-[#FB2E86] outline-none"
                            />
                            <FiSearch className="absolute left-3 top-4 text-gray-400" size={18} />
                        </div>
                        
                        {/* Filter dan Sort Controls */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button 
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#FB2E86] text-white rounded-lg hover:bg-[#e01b73] transition-colors"
                            >
                                <FiFilter size={18} />
                                <span>{showFilters ? 'Sembunyikan Filter' : 'Tampilkan Filter'}</span>
                            </button>
                            
                            <div className="relative flex items-center">
                                <BiSortAlt2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                                <select
                                    value={sortBy}
                                    onChange={handleSortChange}
                                    className="appearance-none pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FB2E86] focus:border-[#FB2E86] outline-none bg-white cursor-pointer"
                                >
                                    <option value="default">Urutkan: Default</option>
                                    <option value="price-low">Harga: Rendah ke Tinggi</option>
                                    <option value="price-high">Harga: Tinggi ke Rendah</option>
                                    <option value="name-az">Nama: A ke Z</option>
                                    <option value="name-za">Nama: Z ke A</option>
                                </select>
                                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Filter Panel */}
                    {showFilters && (
                        <div className="mt-4 pt-4 border-t">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-lg text-[#151875]">Filter</h3>
                                <button 
                                    onClick={clearFilters}
                                    className="text-[#FB2E86] hover:text-[#e01b73] text-sm font-medium"
                                >
                                    Reset Semua Filter
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Rentang Harga */}
                                <div>
                                    <h4 className="font-medium text-[#151875] mb-3">Rentang Harga</h4>
                                    <div className="flex items-center gap-3">
                                        <div className="w-full">
                                            <label className="text-sm text-gray-600 block mb-1">Min (Rp)</label>
                                            <input
                                                type="number"
                                                min="0"
                                                value={minPrice}
                                                onChange={handleMin}
                                                className="w-full p-2 border border-gray-300 rounded focus:ring-[#FB2E86] focus:border-[#FB2E86]"
                                            />
                                        </div>
                                        <span className="text-gray-400 mt-6">-</span>
                                        <div className="w-full">
                                            <label className="text-sm text-gray-600 block mb-1">Max (Rp)</label>
                                            <input
                                                type="number"
                                                min="0"
                                                value={maxPrice}
                                                onChange={handleMax}
                                                className="w-full p-2 border border-gray-300 rounded focus:ring-[#FB2E86] focus:border-[#FB2E86]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Kategori */}
                                <div className="md:col-span-2">
                                    <h4 className="font-medium text-[#151875] mb-3">Kategori</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {categories.map((category) => (
                                            <label key={category} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedCategories.includes(category)}
                                                    onChange={() => handleCategoryToggle(category)}
                                                    className="w-4 h-4 text-[#FB2E86] rounded border-gray-300 focus:ring-[#FB2E86]"
                                                />
                                                <span className="text-gray-700 capitalize">{category}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Product Grid */}
                {allProducts.loading ? (
                    // Loading Skeleton
                    <div className={viewMode === 'grid' 
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" 
                        : "space-y-4"
                    }>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div key={item} className="bg-white rounded-lg shadow-md animate-pulse">
                                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                                <div className="p-4">
                                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filteredProducts.length === 0 ? (
                    // No Products Found
                    <div className="bg-white rounded-lg shadow-md p-10 text-center">
                        <div className="text-5xl mb-4">🔍</div>
                        <h3 className="text-xl font-medium mb-2 text-[#151875]">Tidak ada produk yang ditemukan</h3>
                        <p className="text-gray-500 mb-4">Coba ubah kriteria pencarian atau filter Anda</p>
                        <button
                            onClick={clearFilters}
                            className="px-4 py-2 bg-[#FB2E86] text-white rounded-lg hover:bg-[#e01b73] transition-colors"
                        >
                            Reset Filter
                        </button>
                    </div>
                ) : (
                    // Product Grid/List View
                    <div className={viewMode === 'grid' 
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" 
                        : "space-y-4"
                    }>
                        {filteredProducts.map((item, index) => (
                            <div key={index} className="transform transition-all duration-300 hover:scale-[1.02]">
                                <ListProduct 
                                    details={item} 
                                    viewMode={viewMode} 
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <Footer />
        </div>
    );
};

export default Products;