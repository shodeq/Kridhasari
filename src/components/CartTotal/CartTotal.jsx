import React, { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { convertCurrency } from '../../utils/convert-currency';
import { createWhatsappMessage } from '../WhatsapMessage/generateWhatsAppMessage';
import AddressForm from '../Form/AdressForm';

const CartTotal = ({ products, total, onClear }) => {
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [address, setAddress] = useState(null);

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
        }
    };

    return (
        <div className='p-4 w-full'>
            <div className=''>
                <h2 className='fnt font-bold text-textBlue text-xl text-center mb-6'>Cart Totals</h2>
                <div className='p-4 bg-[#F4F4FC] shadow'>
                    <div className='flex items-center justify-between p-4 border-b border-my-subText text-lg font-semibold text-textBlue'>
                        <h4>Totals:</h4>
                        <span className=''>{convertCurrency(total)}</span>
                    </div>
                </div>
            </div>

            {/* Modal untuk Form Alamat */}
            {showAddressForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-textBlue">Alamat Pengiriman</h3>
                            <button 
                                onClick={() => setShowAddressForm(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>
                        <AddressForm onSubmit={handleAddressSubmit} />
                    </div>
                </div>
            )}

            <div className='mt-8 flex items-center justify-center gap-4'>
            <div className='mt-8 flex items-center justify-center gap-4'>
    {products && products.length >= 1 && (
        <button
            className='group relative bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 overflow-hidden shadow-md'
            onClick={onClear}
        >
            <span className="relative z-10 flex items-center gap-2 font-semibold">
                <FaRegTrashAlt className="text-lg" />
                Clear Cart
            </span>
            <span className="absolute bottom-0 left-0 h-full w-0 bg-red-500 transition-all duration-300 group-hover:w-full -z-0"></span>
        </button>
    )}
    
    {products && products.length >= 1 && (
        <button
            className='group relative bg-[#FF69B4] text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl'
            onClick={handleCheckoutClick}
        >
            <span className="relative z-10 flex items-center gap-2 font-semibold">
                <span className="text-lg">🛒</span>
                Checkout via WhatsApp
            </span>
            <span className="absolute bottom-0 left-0 h-full w-0 bg-gradient-to-r from-[#FF1493] to-[#FF69B4] transition-all duration-300 group-hover:w-full -z-0"></span>
        </button>
    )}
</div>
            </div>

            {/* Tampilkan alamat yang sudah diisi */}
            {address && !showAddressForm && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-textBlue mb-2">Alamat Pengiriman:</h3>
                    <p>{address.name}</p>
                    <p>{address.phone}</p>
                    <p>{address.street}</p>
                    <p>Kecamatan {address.district}</p>
                    <p>{address.city}</p>
                    <p>{address.province}</p>
                    <p>Kode Pos: {address.postalCode}</p>
                    <button
                        onClick={() => setShowAddressForm(true)}
                        className="text-my-pink hover:text-pink-600 mt-2"
                    >
                        Ubah Alamat
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartTotal;