import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeatesProductCard from '../../../components/ProductCards/LeatesProductCard';
import { getProducts } from '../../../redux/getProducts';

const Latest = () => {
    const [randomProducts, setRandomProducts] = useState([]);
    const { data: allProducts, loading, error } = useSelector((state) => state.getProducts);
    const dispatch = useDispatch();

    // Fetch products on mount
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    // Update random products when allProducts changes
    useEffect(() => {
        if (allProducts && allProducts.length > 0) {
            const getRandomProducts = () => {
                const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, 3);
            };
            setRandomProducts(getRandomProducts());
        }
    }, [allProducts]);

    if (loading) return <div className="container mx-auto text-center py-20">Loading...</div>;
    if (error) return <div className="container mx-auto text-center py-20">Error: {error}</div>;

    return (
        <div className='pt-20 pb-20'>
            <div className='container mx-auto'>
                <h2 className='text-sectionTitle fnt text-3xl md:text-4xl font-bold text-center py-4'>
                LAINNYA
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {randomProducts.map((item, index) => (
                        <LeatesProductCard key={`${item.id}-${index}`} leatesData={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Latest;