// import React, { useState } from 'react';

// const AddressForm = ({ onSubmit }) => {
//     const [address, setAddress] = useState({
//         name: '',
//         phone: '',
//         street: '',
//         district: '',
//         city: '',
//         province: '',
//         postalCode: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setAddress(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(address);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-4">
//             <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                     Nama Lengkap
//                 </label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={address.name}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//             </div>

//             <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                     Nomor Telepon
//                 </label>
//                 <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={address.phone}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//             </div>

//             <div>
//                 <label htmlFor="street" className="block text-sm font-medium text-gray-700">
//                     Alamat Lengkap
//                 </label>
//                 <textarea
//                     id="street"
//                     name="street"
//                     value={address.street}
//                     onChange={handleChange}
//                     required
//                     rows={3}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//             </div>

//             <div>
//                 <label htmlFor="district" className="block text-sm font-medium text-gray-700">
//                     Kecamatan
//                 </label>
//                 <input
//                     type="text"
//                     id="district"
//                     name="district"
//                     value={address.district}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//             </div>

//             <div>
//                 <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                     Kota/Kabupaten
//                 </label>
//                 <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     value={address.city}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//             </div>

//             <div>
//                 <label htmlFor="province" className="block text-sm font-medium text-gray-700">
//                     Provinsi
//                 </label>
//                 <input
//                     type="text"
//                     id="province"
//                     name="province"
//                     value={address.province}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//             </div>

//             <div>
//                 <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
//                     Kode Pos
//                 </label>
//                 <input
//                     type="text"
//                     id="postalCode"
//                     name="postalCode"
//                     value={address.postalCode}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//             </div>

//             <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//                 Simpan Alamat
//             </button>
//         </form>
//     );
// };

// export default AddressForm;


import React, { useState } from 'react';
import { FiUser, FiPhone, FiMapPin, FiHome, FiMap, FiNavigation, FiMail, FiSave } from 'react-icons/fi';

const AddressForm = ({ onSubmit, initialData = null }) => {
    const [address, setAddress] = useState(initialData || {
        name: '',
        phone: '',
        street: '',
        district: '',
        city: '',
        province: '',
        postalCode: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSaving, setIsSaving] = useState(false);
    const [formTouched, setFormTouched] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Mark form as touched for validation feedback
        setFormTouched(true);
        
        // Clear error for this field when user types
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        
        if (!address.name.trim()) {
            errors.name = 'Nama lengkap wajib diisi';
        }
        
        if (!address.phone.trim()) {
            errors.phone = 'Nomor telepon wajib diisi';
        } else if (!/^(\+62|62|0)[0-9]{9,12}$/.test(address.phone.replace(/[^0-9]/g, ''))) {
            errors.phone = 'Format nomor telepon tidak valid';
        }
        
        if (!address.street.trim()) {
            errors.street = 'Alamat lengkap wajib diisi';
        }
        
        if (!address.district.trim()) {
            errors.district = 'Kecamatan wajib diisi';
        }
        
        if (!address.city.trim()) {
            errors.city = 'Kota/Kabupaten wajib diisi';
        }
        
        if (!address.province.trim()) {
            errors.province = 'Provinsi wajib diisi';
        }
        
        if (!address.postalCode.trim()) {
            errors.postalCode = 'Kode pos wajib diisi';
        } else if (!/^\d{5}$/.test(address.postalCode)) {
            errors.postalCode = 'Kode pos harus terdiri dari 5 digit angka';
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        try {
            setIsSaving(true);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Call the onSubmit prop with the address data
            onSubmit(address);
            
            // Reset form
            if (!initialData) {
                setAddress({
                    name: '',
                    phone: '',
                    street: '',
                    district: '',
                    city: '',
                    province: '',
                    postalCode: ''
                });
                setFormTouched(false);
            }
        } catch (error) {
            console.error('Error saving address:', error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg max-w-3xl mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 py-6 px-8">
                <h2 className="text-white text-2xl font-bold">Alamat Pengiriman</h2>
                <p className="text-pink-100 text-sm mt-1">
                    Masukkan alamat pengiriman Anda secara lengkap untuk memastikan pengiriman lancar
                </p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nama Lengkap */}
                    <div className="md:col-span-2">
                        <label htmlFor="name" className="flex items-center mb-2 font-medium text-gray-700">
                            <FiUser className="mr-2 text-pink-500" />
                            Nama Lengkap
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={address.name}
                                onChange={handleChange}
                                className={`block w-full px-4 py-3 rounded-lg border ${
                                    formErrors.name ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors`}
                                placeholder="Masukkan nama lengkap penerima"
                            />
                            {formErrors.name && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                            )}
                        </div>
                    </div>

                    {/* Nomor Telepon */}
                    <div className="md:col-span-2">
                        <label htmlFor="phone" className="flex items-center mb-2 font-medium text-gray-700">
                            <FiPhone className="mr-2 text-pink-500" />
                            Nomor Telepon
                        </label>
                        <div className="relative">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={address.phone}
                                onChange={handleChange}
                                className={`block w-full px-4 py-3 rounded-lg border ${
                                    formErrors.phone ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors`}
                                placeholder="Contoh: 08123456789"
                            />
                            {formErrors.phone && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                            )}
                        </div>
                    </div>

                    {/* Alamat Lengkap */}
                    <div className="md:col-span-2">
                        <label htmlFor="street" className="flex items-center mb-2 font-medium text-gray-700">
                            <FiMapPin className="mr-2 text-pink-500" />
                            Alamat Lengkap
                        </label>
                        <div className="relative">
                            <textarea
                                id="street"
                                name="street"
                                value={address.street}
                                onChange={handleChange}
                                rows={3}
                                className={`block w-full px-4 py-3 rounded-lg border ${
                                    formErrors.street ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors resize-none`}
                                placeholder="Masukkan alamat lengkap (nama jalan, nomor rumah, RT/RW, dll.)"
                            />
                            {formErrors.street && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.street}</p>
                            )}
                        </div>
                    </div>

                    {/* Kecamatan */}
                    <div>
                        <label htmlFor="district" className="flex items-center mb-2 font-medium text-gray-700">
                            <FiHome className="mr-2 text-pink-500" />
                            Kecamatan
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="district"
                                name="district"
                                value={address.district}
                                onChange={handleChange}
                                className={`block w-full px-4 py-3 rounded-lg border ${
                                    formErrors.district ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors`}
                                placeholder="Masukkan kecamatan"
                            />
                            {formErrors.district && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.district}</p>
                            )}
                        </div>
                    </div>

                    {/* Kota/Kabupaten */}
                    <div>
                        <label htmlFor="city" className="flex items-center mb-2 font-medium text-gray-700">
                            <FiMap className="mr-2 text-pink-500" />
                            Kota/Kabupaten
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={address.city}
                                onChange={handleChange}
                                className={`block w-full px-4 py-3 rounded-lg border ${
                                    formErrors.city ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors`}
                                placeholder="Masukkan kota/kabupaten"
                            />
                            {formErrors.city && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.city}</p>
                            )}
                        </div>
                    </div>

                    {/* Provinsi */}
                    <div>
                        <label htmlFor="province" className="flex items-center mb-2 font-medium text-gray-700">
                            <FiNavigation className="mr-2 text-pink-500" />
                            Provinsi
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="province"
                                name="province"
                                value={address.province}
                                onChange={handleChange}
                                className={`block w-full px-4 py-3 rounded-lg border ${
                                    formErrors.province ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors`}
                                placeholder="Masukkan provinsi"
                            />
                            {formErrors.province && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.province}</p>
                            )}
                        </div>
                    </div>

                    {/* Kode Pos */}
                    <div>
                        <label htmlFor="postalCode" className="flex items-center mb-2 font-medium text-gray-700">
                            <FiMail className="mr-2 text-pink-500" />
                            Kode Pos
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={address.postalCode}
                                onChange={handleChange}
                                maxLength={5}
                                className={`block w-full px-4 py-3 rounded-lg border ${
                                    formErrors.postalCode ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors`}
                                placeholder="5 digit kode pos"
                            />
                            {formErrors.postalCode && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.postalCode}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className={`w-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all ${
                            isSaving ? 'opacity-70 cursor-not-allowed' : 'hover:bg-pink-600 shadow-md hover:shadow-lg'
                        }`}
                    >
                        {isSaving ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Menyimpan...
                            </>
                        ) : (
                            <>
                                <FiSave className="mr-2" />
                                Simpan Alamat
                            </>
                        )}
                    </button>
                </div>
                
                <div className="mt-4 text-center text-sm text-gray-500">
                    <p>Pastikan semua data yang dimasukkan sudah benar dan lengkap</p>
                </div>
            </form>
        </div>
    );
};

export default AddressForm;