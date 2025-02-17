import React from 'react'
import Button from '../../../components/Button/Button'

const Unique = () => {
    return (
        <div className='bg-[#F1F0FF] py-12'>
            <div className='container mx-auto'>
                <div className='flex items-center flex-col md:flex-row'>
                    <img src="/images/unique/unique.png" alt="" />
                    <div>
                        <h2 className='text-4xl text-textBlue fnt font-bold'>PRODUK UNIK KAMI</h2>
                        <h5 className='text-[#ACABC3] text-xl font-medium flex items-center gap-2 pt-10'>
                            <span className="bg-my-pink rounded-full min-h-3 min-w-3"></span>
                            Produk Eksklusif
                        </h5>
                        <h5 className='text-[#ACABC3] text-xl font-medium flex items-center gap-2 py-2'>
                            <span className="bg-textBlue rounded-full min-h-3 min-w-3 "></span>
                            Hanya tersedia dengan Pre-Order
                        </h5>
                        <h5 className='text-[#ACABC3] text-xl font-medium flex items-center gap-2 py-2 mb-12'>
                            <span className="bg-[#2BF5CC] rounded-full min-h-3 min-w-3 "></span>
                            Pre-Order sekarang!
                        </h5>
                        <div className='flex items-center gap-6'>
                            <Button
                                className="bg-my-pink px-6 py-3 rounded text-white fnt text-lg font-semibold"
                                title="Product View"
                                link="/products" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Unique