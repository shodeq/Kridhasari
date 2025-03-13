import React from 'react'

const OfferCardCourier = ({ courier }) => {
    return (
        <div className='w-full shadow border-b-2 border-transparent hover:border-b-2 hover:border-my-orange transition-all duration-300'>
            <div className='p-10 text-center flex flex-col justify-between items-center'>
                <img src={courier.logo} className='w-[65px] h-[65px] object-contain' alt={courier.name} />
                <h2 className='fnt text-textBlue text-xl font-semibold py-4'>{courier.name}</h2>
                <p className='font-bold text-base text-[#BAB6CE]'>{courier.description}</p>
                <div className='mt-4 space-y-2'>
                    <div className='text-sm text-gray-600'>
                        <span className='font-semibold'>Estimasi: </span>
                        {courier.estimatedTime}
                    </div>
                    <div className='text-sm text-gray-600'>
                        <span className='font-semibold'>Layanan: </span>
                        {courier.services.join(', ')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferCardCourier