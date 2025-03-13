import React from 'react'
import Button from '../../../components/Button/Button'

const Unique = () => {
    return (
        <div className='bg-gradient-to-r from-[#F1F0FF] to-[#EBEAFF] py-16 relative overflow-hidden'>
            {/* Elemen dekoratif untuk background */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#DCD9FF] opacity-40 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#FFE6F0] opacity-50 -ml-24 -mb-24"></div>
            
            <div className='container mx-auto px-4'>
                <div className='flex items-center flex-col md:flex-row gap-10'>
                    <div className='w-full md:w-1/2 relative'>
                        {/* Shadow effect for image */}
                        <div className="absolute inset-0 bg-[#F5F4FF] rounded-2xl shadow-lg transform rotate-3"></div>
                        <img 
                            className='w-full relative z-10 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300' 
                            src="/images/unique/40.png" 
                            alt="" 
                        />
                        {/* Badge pada gambar */}
                        <div className="absolute top-4 right-4 bg-my-pink text-white px-3 py-1 rounded-full text-sm font-bold shadow-md z-20">
                            Exclusive
                        </div>
                    </div>
                    
                    <div className='p-4 md:p-6'>
                        <h2 className='text-4xl md:text-5xl text-textBlue fnt font-bold mb-2 border-b-4 border-my-pink pb-2 inline-block'>
                            PRODUK UNIK KAMI
                        </h2>
                        
                        <div className='space-y-4 mt-10'>
                            <div className='transform transition-transform duration-300 hover:translate-x-2'>
                                <h5 className='text-[#ACABC3] text-xl font-medium flex items-center gap-3 pt-2 bg-white bg-opacity-70 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                                    <span className="bg-my-pink rounded-full min-h-4 min-w-4 shadow-sm"></span>
                                    <span className="text-[#7A79A0]">Produk Eksklusif</span>
                                </h5>
                            </div>
                            
                            <div className='transform transition-transform duration-300 hover:translate-x-2'>
                                <h5 className='text-[#ACABC3] text-xl font-medium flex items-center gap-3 py-2 bg-white bg-opacity-70 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                                    <span className="bg-textBlue rounded-full min-h-4 min-w-4 shadow-sm"></span>
                                    <span className="text-[#7A79A0]">Hanya tersedia dengan Pre-Order</span>
                                </h5>
                            </div>
                            
                            <div className='transform transition-transform duration-300 hover:translate-x-2 mb-14'>
                                <h5 className='text-[#ACABC3] text-xl font-medium flex items-center gap-3 py-2 bg-white bg-opacity-70 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                                    <span className="bg-[#2BF5CC] rounded-full min-h-4 min-w-4 shadow-sm"></span>
                                    <span className="text-[#7A79A0]">Pre-Order sekarang!</span>
                                </h5>
                            </div>
                        </div>
                        
                        <div className='flex items-center gap-6 mt-[15px]'>
                            <Button
                                className="bg-gradient-to-r from-my-pink to-[#FF80AB] px-8 py-3 rounded-full text-white fnt text-lg font-semibold shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
                                title="Product View"
                                link="/products" 
                            />
                            <a 
                                href="#more-info" 
                                className="text-textBlue font-medium hover:text-my-pink transition-colors duration-300 underline"
                            >
                                Info lainnya
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unique