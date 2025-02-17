import React, { useState } from 'react';

const AddressForm = ({ onSubmit }) => {
    const [address, setAddress] = useState({
        name: '',
        phone: '',
        street: '',
        district: '',
        city: '',
        province: '',
        postalCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(address);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nama Lengkap
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={address.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Nomor Telepon
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={address.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                    Alamat Lengkap
                </label>
                <textarea
                    id="street"
                    name="street"
                    value={address.street}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                    Kecamatan
                </label>
                <input
                    type="text"
                    id="district"
                    name="district"
                    value={address.district}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Kota/Kabupaten
                </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={address.city}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                    Provinsi
                </label>
                <input
                    type="text"
                    id="province"
                    name="province"
                    value={address.province}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                    Kode Pos
                </label>
                <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={address.postalCode}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Simpan Alamat
            </button>
        </form>
    );
};

export default AddressForm;