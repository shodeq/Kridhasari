import React from 'react'

const OfferCard = ({ kridhasari }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col'>
      <div className='flex justify-center mb-4'>
        <div className='w-16 h-16 rounded-full bg-[#EEEFFB] flex items-center justify-center'>
          <img src={kridhasari.img} alt={kridhasari.title} className='w-10 h-10 object-contain' />
        </div>
      </div>
      
      <h3 className='text-xl font-semibold text-[#151875] text-center mb-3'>{kridhasari.title}</h3>
      
      <p className='text-gray-600 text-center flex-grow'>{kridhasari.desc}</p>
    </div>
  )
}

export default OfferCard