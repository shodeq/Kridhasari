// // import React from 'react'
// // import Button from '../Button/Button';

// // const ContactForm = () => {
// //     return (
// //         <div>
// //             <h2 className='fnt text-4xl font-bold text-textBlue pb-5'>Get In Touch</h2>
// //             <p className='text-base font-bold text-my-subText pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
// //             <form className='flex flex-col gap-12 pb-12'>
// //                 <div className='flex gap-8'>
// //                     <input type="text" placeholder='Your Name*' className='w-full px-6 py-3 outline-none border border-[#BFCCD8] rounded-md' />
// //                     <input type="text" placeholder='Your Email*' className='w-full px-6 py-3 outline-none border border-[#BFCCD8] rounded-md' />
// //                 </div>
// //                 <input type="text" placeholder='Subject*' className='w-full px-6 py-3 outline-none border border-[#BFCCD8] rounded-md' />
// //                 <textarea placeholder='Type Your Message' className='w-full h-40 leading-tight resize-none px-6 py-3 outline-none border border-[#BFCCD8] rounded-md'></textarea>
// //             </form>
// //             <Button
// //                 className="bg-my-pink px-10 py-3 text-white rounded"
// //                 title="Send Mail" />
// //         </div>

// //     );
// // };

// // export default ContactForm;



// // import React, { useState } from 'react'
// // import Button from '../Button/Button';

// // const ContactForm = () => {
// //     const [orderType, setOrderType] = useState('');

// //     return (
// //         <div className='max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-lg'>
// //             <div className='text-center mb-12'>
// //                 <h2 className='fnt text-4xl font-bold text-textBlue mb-5'>Pesan Dalam Jumlah Besar</h2>
// //                 <p className='text-base font-medium text-my-subText max-w-2xl mx-auto'>
// //                     Tertarik membeli Enting-Enting Geti Kridha Sari dalam jumlah besar? Isi formulir di bawah ini untuk pemesanan khusus.
// //                 </p>
// //             </div>
// //             <form className='space-y-6'>
// //                 <div className='grid md:grid-cols-2 gap-6'>
// //                     <div className='relative group'>
// //                         <input 
// //                             type="text" 
// //                             placeholder='Nama Lengkap*' 
// //                             className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
// //                             required
// //                         />
// //                         <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Nama Lengkap</span>
// //                     </div>
// //                     <div className='relative group'>
// //                         <input 
// //                             type="text" 
// //                             placeholder='Nomor Telepon*' 
// //                             className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
// //                             required
// //                         />
// //                         <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Nomor Telepon</span>
// //                     </div>
// //                 </div>

// //                 <div className='relative group'>
// //                     <select 
// //                         className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer'
// //                         value={orderType}
// //                         onChange={(e) => setOrderType(e.target.value)}
// //                         required
// //                     >
// //                         <option value="">Pilih Jenis Pesanan*</option>
// //                         <option value="reseller">Reseller</option>
// //                         <option value="corporate">Pesanan Korporat</option>
// //                         <option value="event">Acara/Event</option>
// //                         <option value="export">Ekspor</option>
// //                     </select>
// //                     <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Jenis Pesanan</span>
// //                 </div>

// //                 <div className='grid md:grid-cols-2 gap-6'>
// //                     <div className='relative group'>
// //                         <input 
// //                             type="number" 
// //                             placeholder='Jumlah Pesanan (Kg/Pack)*' 
// //                             className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
// //                             required
// //                         />
// //                         <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Jumlah Pesanan</span>
// //                     </div>
// //                     <div className='relative group'>
// //                         <input 
// //                             type="text" 
// //                             placeholder='Nama Usaha/Instansi' 
// //                             className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
// //                         />
// //                         <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Nama Usaha/Instansi</span>
// //                     </div>
// //                 </div>

// //                 <div className='relative group'>
// //                     <textarea 
// //                         placeholder='Catatan Tambahan (Opsional)' 
// //                         className='w-full h-32 px-6 py-4 border-2 border-gray-200 rounded-lg resize-none focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer'
// //                     ></textarea>
// //                     <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Catatan Tambahan</span>
// //                 </div>

// //                 <div className='text-center'>
// //                     <Button
// //                         className="bg-my-pink hover:bg-opacity-90 transition-colors duration-300 px-12 py-4 text-white rounded-lg text-lg font-semibold shadow-md hover:shadow-lg"
// //                         title="Kirim Permintaan Pesanan" 
// //                     />
// //                 </div>
// //             </form>
// //         </div>
// //     );
// // };

// // export default ContactForm;




// import React, { useState } from 'react'

// const generateWhatsAppMessage = (formData) => {
//     const { 
//         name, 
//         phone, 
//         orderType, 
//         quantity, 
//         business, 
//         additionalNotes 
//     } = formData;

//     const messageLines = [
//         "*Permintaan Pesanan Enting-Enting Geti Kridha Sari*",
//         "",
//         `📛 Nama: ${name}`,
//         `📞 Nomor Telepon: ${phone}`,
//         `🏢 Jenis Pesanan: ${orderType}`,
//         `📦 Jumlah Pesanan: ${quantity} Kg/Pack`,
//         ...(business ? [`🏭 Nama Usaha/Instansi: ${business}`] : []),
//         ...(additionalNotes ? [`📝 Catatan Tambahan:\n${additionalNotes}`] : []),
//     ];

//     return messageLines.join('\n');
// };

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         orderType: '',
//         quantity: '',
//         business: '',
//         additionalNotes: ''
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         // Validate required fields
//         if (!formData.name || !formData.phone || !formData.orderType || !formData.quantity) {
//             alert('Mohon lengkapi field yang wajib diisi');
//             return;
//         }

//         // Generate WhatsApp message
//         const message = generateWhatsAppMessage(formData);
        
//         // WhatsApp number (replace with your business WhatsApp number)
//         const phoneNumber = '6282333196734'; // Example number, replace with actual number
        
//         // Encode the message for URL
//         const encodedMessage = encodeURIComponent(message);
        
//         // Open WhatsApp with pre-filled message
//         window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
//     };

//     return (
//         <div className='max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-lg'>
//             <div className='text-center mb-12'>
//                 <h2 className='fnt text-4xl font-bold text-textBlue mb-5'>Pesan Dalam Jumlah Besar</h2>
//                 <p className='text-base font-medium text-my-subText max-w-2xl mx-auto'>
//                     Tertarik membeli Enting-Enting Geti Kridha Sari dalam jumlah besar? Isi formulir di bawah ini untuk pemesanan khusus.
//                 </p>
//             </div>
//             <form onSubmit={handleSubmit} className='space-y-6'>
//                 <div className='grid md:grid-cols-2 gap-6'>
//                     <div className='relative group'>
//                         <input 
//                             type="text" 
//                             name="name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             placeholder='Nama Lengkap*' 
//                             className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
//                             required
//                         />
//                         <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Nama Lengkap</span>
//                     </div>
//                     <div className='relative group'>
//                         <input 
//                             type="text" 
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleInputChange}
//                             placeholder='Nomor Telepon*' 
//                             className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
//                             required
//                         />
//                         <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Nomor Telepon</span>
//                     </div>
//                 </div>

//                 <div className='relative group'>
//                     <select 
//                         name="orderType"
//                         value={formData.orderType}
//                         onChange={handleInputChange}
//                         className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer'
//                         required
//                     >
//                         <option value="">Pilih Jenis Pesanan*</option>
//                         <option value="Reseller">Reseller</option>
//                         <option value="Pesanan Korporat">Pesanan Korporat</option>
//                         <option value="Acara/Event">Acara/Event</option>
//                         <option value="Ekspor">Ekspor</option>
//                     </select>
//                     <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Jenis Pesanan</span>
//                 </div>

//                 <div className='grid md:grid-cols-2 gap-6'>
//                     <div className='relative group'>
//                         <input 
//                             type="number" 
//                             name="quantity"
//                             value={formData.quantity}
//                             onChange={handleInputChange}
//                             placeholder='Jumlah Pesanan (Kg/Pack)*' 
//                             className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
//                             required
//                         />
//                         <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Jumlah Pesanan</span>
//                     </div>
//                     <div className='relative group'>
//                         <input 
//                             type="text" 
//                             name="business"
//                             value={formData.business}
//                             onChange={handleInputChange}
//                             placeholder='Nama Usaha/Instansi' 
//                             className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
//                         />
//                         <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Nama Usaha/Instansi</span>
//                     </div>
//                 </div>

//                 <div className='relative group'>
//                     <textarea 
//                         name="additionalNotes"
//                         value={formData.additionalNotes}
//                         onChange={handleInputChange}
//                         placeholder='Catatan Tambahan (Opsional)' 
//                         className='w-full h-32 px-6 py-4 border-2 border-gray-200 rounded-lg resize-none focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer'
//                     ></textarea>
//                     <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Catatan Tambahan</span>
//                 </div>

//                 <div className='text-center'>
//                     <button 
//                         type="submit"
//                         className="bg-my-pink hover:bg-opacity-90 transition-colors duration-300 px-12 py-4 text-white rounded-lg text-lg font-semibold shadow-md hover:shadow-lg"
//                     >
//                         Kirim Permintaan Pesanan
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;

// // Separate utility function for message generation (can be exported if needed)
// export { generateWhatsAppMessage };



import React, { useState } from 'react';

const generateWhatsAppMessage = (formData) => {
    const { 
        name, 
        phone, 
        orderType, 
        selectedProducts,
        quantity, 
        business, 
        additionalNotes 
    } = formData;

    // Membuat daftar produk yang dipilih
    const productsText = selectedProducts.length > 0 
        ? selectedProducts.map(p => `   - ${p.name} (${p.quantity} kg)`).join('\n')
        : 'Tidak ada produk yang dipilih';

    const messageLines = [
        "*Permintaan Pesanan Enting-Enting Geti Kridha Sari*",
        "",
        `📛 Nama: ${name}`,
        `📞 Nomor Telepon: ${phone}`,
        `🏢 Jenis Pesanan: ${orderType}`,
        `🛒 Produk yang dipesan:\n${productsText}`,
        `📦 Total Jumlah Pesanan: ${quantity} kg`,
        ...(business ? [`🏭 Nama Usaha/Instansi: ${business}`] : []),
        ...(additionalNotes ? [`📝 Catatan Tambahan:\n${additionalNotes}`] : []),
    ];

    return messageLines.join('\n');
};

const ContactForm = () => {
    // Daftar produk yang tersedia
    const availableProducts = [
        { id: 1, name: 'Kuncit-Kacang', description: 'Enting-enting berbahan kacang tanah dan gula jawa', price: 15000, unit: 'kg' },
        { id: 2, name: 'Kuncit-Wijen', description: 'Enting-enting berbahan wijen dan gula jawa', price: 15000, unit: 'kg' },
        { id: 3, name: 'Kotak-Kacang', description: 'Geti kacang berbentuk bola-bola kecil dalam plastik press', price: 15000, unit: 'kg' },
        { id: 4, name: 'Kotak-Wijen', description: 'Geti wijen berbentuk bola-bola kecil dalam plastik press', price: 15000, unit: 'kg' },
        { id: 5, name: 'Gethi-Gula-Jawa', description: 'Enting-enting berbahan kacang tanah dan gula jawa', price: 15000, unit: 'kg' },
        { id: 6, name: 'Toples-Gethi-Mix', description: 'Campuran geti kacang tanah dan wijen dalam toples', price: 15000, unit: 'kg' },
        { id: 7, name: 'Toples-Bulat-Besar-Kacang', description: 'Geti kacang tanah dalam kemasan toples bulat besar', price: 15000, unit: 'kg' },
        { id: 8, name: 'Toples-Bulat-Kecil-Kacang', description: 'Geti kacang tanah dalam kemasan toples bulat kecil', price: 15000, unit: 'kg' },
    ];

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        orderType: '',
        selectedProducts: [],
        quantity: '',
        business: '',
        additionalNotes: ''
    });

    const [showProductModal, setShowProductModal] = useState(false);
    const [productQuantities, setProductQuantities] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleProductQuantityChange = (productId, quantity) => {
        setProductQuantities(prev => ({
            ...prev,
            [productId]: quantity
        }));
    };

    const addSelectedProducts = () => {
        const selected = Object.keys(productQuantities)
            .filter(productId => productQuantities[productId] > 0)
            .map(productId => {
                const product = availableProducts.find(p => p.id === parseInt(productId));
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: productQuantities[productId],
                    unit: product.unit
                };
            });

        setFormData(prevState => ({
            ...prevState,
            selectedProducts: selected
        }));

        setShowProductModal(false);
    };

    const removeProduct = (productId) => {
        setFormData(prevState => ({
            ...prevState,
            selectedProducts: prevState.selectedProducts.filter(p => p.id !== productId)
        }));
        
        // Also remove from quantities
        const newQuantities = { ...productQuantities };
        delete newQuantities[productId];
        setProductQuantities(newQuantities);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate required fields
        if (!formData.name || !formData.phone || !formData.orderType || !formData.quantity) {
            alert('Mohon lengkapi field yang wajib diisi');
            return;
        }

        if (formData.selectedProducts.length === 0) {
            alert('Mohon pilih minimal satu produk');
            return;
        }

        // Generate WhatsApp message
        const message = generateWhatsAppMessage(formData);
        
        // WhatsApp number (replace with your business WhatsApp number)
        const phoneNumber = '6282333196734'; // Example number, replace with actual number
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    // Menghitung total kg berdasarkan produk yang dipilih
    const calculateTotalQuantity = () => {
        return formData.selectedProducts.reduce((total, product) => total + Number(product.quantity), 0);
    };

    // Update total quantity berdasarkan produk yang dipilih
    React.useEffect(() => {
        const calculatedTotal = calculateTotalQuantity();
        if (calculatedTotal > 0) {
            setFormData(prevState => ({
                ...prevState,
                quantity: calculatedTotal.toString()
            }));
        }
    }, [formData.selectedProducts]);

    return (
        <div className='max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg'>
            <div className='text-center mb-12'>
                <h2 className='fnt text-3xl md:text-4xl font-bold text-textBlue mb-5'>Pesan Dalam Jumlah Besar</h2>
                <p className='text-base font-medium text-my-subText max-w-2xl mx-auto'>
                    Tertarik membeli Enting-Enting Geti Kridha Sari dalam jumlah besar? Isi formulir di bawah ini untuk pemesanan khusus.
                </p>
            </div>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                    <div className='relative group'>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder='Nama Lengkap*' 
                            className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
                            required
                        />
                        <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Nama Lengkap</span>
                    </div>
                    <div className='relative group'>
                        <input 
                            type="text" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder='Nomor Telepon*' 
                            className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
                            required
                        />
                        <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Nomor Telepon</span>
                    </div>
                </div>

                <div className='relative group'>
                    <select 
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleInputChange}
                        className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer'
                        required
                    >
                        <option value="">Pilih Jenis Pesanan*</option>
                        <option value="Reseller">Reseller</option>
                        <option value="Pesanan Korporat">Pesanan Korporat</option>
                        <option value="Acara/Event">Acara/Event</option>
                        <option value="Ekspor">Ekspor</option>
                    </select>
                    <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Jenis Pesanan</span>
                </div>

                {/* Produk Section */}
                <div className='relative border-2 border-gray-200 rounded-lg p-4 transition-all duration-300 hover:border-my-pink'>
                    <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500'>Pilih Produk*</span>
                    
                    <div className='mb-4'>
                        <button 
                            type="button" 
                            onClick={() => setShowProductModal(true)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            + Tambah Produk
                        </button>
                    </div>
                    
                    {formData.selectedProducts.length > 0 ? (
                        <div className='space-y-3'>
                            {formData.selectedProducts.map(product => (
                                <div key={product.id} className='flex items-center justify-between bg-gray-50 p-3 rounded-lg'>
                                    <div className='flex-1'>
                                        <h4 className='font-medium'>{product.name}</h4>
                                        <div className='flex items-center text-sm text-gray-600'>
                                            <span>Jumlah: {product.quantity} kg</span>
                                            <span className='mx-2'>•</span>
                                            <span>Rp {product.price.toLocaleString()}/kg</span>
                                        </div>
                                    </div>
                                    <button 
                                        type="button"
                                        onClick={() => removeProduct(product.id)}
                                        className='text-red-500 hover:text-red-700'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            ))}

                            <div className="flex justify-end pt-2 border-t border-gray-200">
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">Total Jumlah:</p>
                                    <p className="font-bold text-blue-700">{calculateTotalQuantity()} kg</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='text-center py-4 text-gray-500'>
                            Belum ada produk yang dipilih
                        </div>
                    )}
                </div>

                {/* Product Modal */}
                {showProductModal && (
                    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
                        <div className='bg-white rounded-xl shadow-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
                            <div className='flex justify-between items-center mb-4'>
                                <h3 className='text-xl font-bold text-gray-800'>Pilih Produk</h3>
                                <button 
                                    type="button"
                                    onClick={() => setShowProductModal(false)}
                                    className='text-gray-500 hover:text-gray-700'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            <div className='space-y-4 mb-6'>
                                {availableProducts.map(product => (
                                    <div key={product.id} className='border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors'>
                                        <div className='flex justify-between items-start mb-2'>
                                            <div>
                                                <h4 className='font-medium text-blue-800'>{product.name}</h4>
                                                <p className='text-sm text-gray-600'>{product.description}</p>
                                                <p className='text-blue-700 font-semibold mt-1'>Rp {product.price.toLocaleString()}/kg</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <button 
                                                    type="button"
                                                    onClick={() => handleProductQuantityChange(
                                                        product.id, 
                                                        Math.max(0, (productQuantities[product.id] || 0) - 1)
                                                    )}
                                                    className='w-8 h-8 flex items-center justify-center bg-gray-100 rounded-l-md border border-gray-300 hover:bg-gray-200'
                                                >
                                                    -
                                                </button>
                                                <input 
                                                    type="number"
                                                    min="0"
                                                    step="0.5"
                                                    value={productQuantities[product.id] || 0}
                                                    onChange={(e) => handleProductQuantityChange(product.id, parseFloat(e.target.value) || 0)}
                                                    className='w-16 h-8 text-center border-t border-b border-gray-300'
                                                />
                                                <button 
                                                    type="button"
                                                    onClick={() => handleProductQuantityChange(
                                                        product.id, 
                                                        (productQuantities[product.id] || 0) + 1
                                                    )}
                                                    className='w-8 h-8 flex items-center justify-center bg-gray-100 rounded-r-md border border-gray-300 hover:bg-gray-200'
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className='flex justify-end space-x-3'>
                                <button 
                                    type="button"
                                    onClick={() => setShowProductModal(false)}
                                    className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50'
                                >
                                    Batal
                                </button>
                                <button 
                                    type="button"
                                    onClick={addSelectedProducts}
                                    className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
                                >
                                    Tambahkan Produk
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className='grid md:grid-cols-2 gap-6'>
                    <div className='relative group'>
                        <input 
                            type="number"
                            step="0.5" 
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            placeholder='Total Jumlah Pesanan (kg)*' 
                            className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
                            required
                            readOnly={formData.selectedProducts.length > 0}
                        />
                        <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Total Jumlah Pesanan (kg)</span>
                        {formData.selectedProducts.length > 0 && (
                            <p className="text-xs text-gray-500 mt-1">Otomatis dihitung berdasarkan produk yang dipilih</p>
                        )}
                    </div>
                    <div className='relative group'>
                        <input 
                            type="text" 
                            name="business"
                            value={formData.business}
                            onChange={handleInputChange}
                            placeholder='Nama Usaha/Instansi' 
                            className='w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer' 
                        />
                        <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Nama Usaha/Instansi</span>
                    </div>
                </div>

                <div className='relative group'>
                    <textarea 
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        placeholder='Catatan Tambahan (Opsional)' 
                        className='w-full h-32 px-6 py-4 border-2 border-gray-200 rounded-lg resize-none focus:border-my-pink focus:ring-2 focus:ring-my-pink/30 transition-all duration-300 peer'
                    ></textarea>
                    <span className='absolute left-4 -top-2 bg-white px-2 text-xs text-gray-500 peer-focus:text-my-pink transition-all duration-300'>Catatan Tambahan</span>
                </div>

                <div className='text-center'>
                    <button 
                        type="submit"
                        className="bg-my-pink hover:bg-opacity-90 transition-colors duration-300 px-12 py-4 text-white rounded-lg text-lg font-semibold shadow-md hover:shadow-lg"
                    >
                        Kirim Permintaan Pesanan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

// Separate utility function for message generation (can be exported if needed)
export { generateWhatsAppMessage };