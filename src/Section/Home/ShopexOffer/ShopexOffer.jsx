import React from 'react'
import OfferCard from '../../../components/OfferCard/OfferCard'
import { courierOptions } from '../../../redux/curierOption'

const ShopexOffer = () => {
    return (
        <div className='py-12'>
            <div className='container mx-auto'>
                <h2 className='text-sectionTitle fnt text-4xl font-bold text-center py-4 mb-4'>
                    PILIHAN PENGIRIMAN
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {courierOptions.map((courier, index) => (
                        <OfferCard 
                            key={index} 
                            courier={courier} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopexOffer