import React, { useState } from 'react';
import { FaRegTrashAlt, FaWhatsapp, FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { convertCurrency } from '../../utils/convert-currency';
import { createWhatsappMessage } from '../WhatsapMessage/generateWhatsAppMessage';
import AddressForm from '../Form/AdressForm';

const CartTotal = ({ products, total, onClear }) => {
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [address, setAddress] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    const handleAddressSubmit = (addressData) => {
        setAddress(addressData);
        setShowAddressForm(false);

        // Setelah alamat diisi, langsung buka WhatsApp
        const message = createWhatsappMessage(products, total, addressData);
        const waNumber = '6282333196734';
        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleCheckoutClick = (e) => {
        e.preventDefault();
        if (!address) {
            setShowAddressForm(true);
        } else {
            // Jika alamat sudah ada, langsung buka WhatsApp
            const message = createWhatsappMessage(products, total, address);
            const waNumber = '6282333196734';
            window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
        }
    };

    return (
        <div className='w-full'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                {/* Header */}
                <div className='bg-[#F6F7FB] px-6 py-4 border-b border-gray-200'>
                    <h2 className='font-bold text-[#151875] text-xl'>Ringkasan Belanja</h2>
                </div>

                {/* Content */}
                <div className='p-6'>
                    {/* Items Summary */}
                    <div className='space-y-3 mb-6'>
                        <div className='flex justify-between text-gray-600'>
                            <span>Total Item:</span>
                            <span>{products ? products.length : 0} item</span>
                        </div>
                        
                        <div className='flex justify-between text-gray-600'>
                            <span>Biaya Pengiriman:</span>
                            <span className='text-[#151875]'>Dihitung saat checkout</span>
                        </div>
                    </div>
                    
                    {/* Total */}
                    <div className='flex justify-between py-4 border-t border-dashed border-gray-300 mb-6'>
                        <h3 className='text-[#151875] font-bold text-lg'>Total Belanja:</h3>
                        <span className='text-[#FB2E86] font-bold text-lg'>{convertCurrency(total)}</span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className='space-y-3'>
                        {products && products.length >= 1 && (
                            <button
                                className='w-full group relative bg-[#FB2E86] text-white px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg'
                                onClick={handleCheckoutClick}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                <span className="relative z-10 flex items-center gap-2 font-semibold">
                                    <FaWhatsapp className={`text-xl transition-transform duration-300 ${isHovering ? 'animate-pulse' : ''}`} />
                                    <span>Checkout via WhatsApp</span>
                                </span>
                                <span className="absolute bottom-0 left-0 h-full w-0 bg-[#e01b73] transition-all duration-300 group-hover:w-full -z-0"></span>
                            </button>
                        )}
                        
                        {products && products.length >= 1 && (
                            <button
                                className='w-full group relative bg-white border border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300'
                                onClick={onClear}
                            >
                                <span className="relative z-10 flex items-center gap-2 font-medium">
                                    <FaRegTrashAlt className="text-lg" />
                                    <span>Kosongkan Keranjang</span>
                                </span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Shipping Address Card (if address exists) */}
            {address && !showAddressForm && (
                <div className="mt-4 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-[#F6F7FB] px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-bold text-[#151875] flex items-center gap-2">
                            <FaMapMarkerAlt className="text-[#FB2E86]" />
                            Alamat Pengiriman
                        </h3>
                        <button
                            onClick={() => setShowAddressForm(true)}
                            className="text-[#FB2E86] hover:text-[#e01b73] p-1 rounded-full hover:bg-pink-50 transition-colors"
                        >
                            <FaEdit size={18} />
                        </button>
                    </div>
                    <div className="p-6 space-y-1 text-gray-700">
                        <p className="font-semibold text-[#151875]">{address.name}</p>
                        <p>{address.phone}</p>
                        <p>{address.street}</p>
                        <p>Kecamatan {address.district}</p>
                        <p>{address.city}, {address.province}</p>
                        <p>Kode Pos: {address.postalCode}</p>
                    </div>
                </div>
            )}

            {/* Address Form Modal */}
            {showAddressForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-[#151875] flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-[#FB2E86]" />
                                    Alamat Pengiriman
                                </h3>
                                <button 
                                    onClick={() => setShowAddressForm(false)}
                                    className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-1 rounded-full transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <AddressForm onSubmit={handleAddressSubmit} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartTotal;