import React from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ContactForm from '../../components/ContactForm/ContactForm'
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt, FaTruck, FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className="bg-[#EEEFFB]/30">
            <HeaderBar />
            <Header />
            <Breadcrumbs title="Hubungi Kami" />

            {/* Informasi Kontak */}
            <div className='container mx-auto py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0'>
                {/* Kolom Tentang Kami */}
                <div className='bg-white p-6 md:p-8 rounded-lg shadow-md'>
                    <h2 className='text-[#151875] fnt text-3xl md:text-4xl font-bold pb-4'>Tentang Kridhasari</h2>
                    <p className='text-gray-600 text-lg pb-6'>
                        Kridhasari adalah produsen camilan tradisional premium yang telah berdiri sejak 1950. 
                        Kami melestarikan cita rasa otentik geti kacang dan wijen dengan standar kualitas tinggi. 
                        Setiap produk dibuat dengan bahan pilihan dan metode tradisional untuk memastikan kualitas 
                        dan kelezatan yang konsisten.
                    </p>
                    
                    <h3 className='text-[#151875] fnt text-xl font-semibold mb-4'>Jam Operasional</h3>
                    <div className='space-y-2 mb-8'>
                        <div className='flex justify-between pb-2 border-b border-gray-100'>
                            <span className='text-gray-700'>Senin - Jumat</span>
                            <span className='text-[#FB2E86] font-medium'>08.00 - 20.00 WIB</span>
                        </div>
                        <div className='flex justify-between pb-2 border-b border-gray-100'>
                            <span className='text-gray-700'>Sabtu</span>
                            <span className='text-[#FB2E86] font-medium'>08.00 - 16.00 WIB</span>
                        </div>
                        <div className='flex justify-between pb-2 border-b border-gray-100'>
                            <span className='text-gray-700'>Minggu & Hari Libur</span>
                            <span className='text-[#FB2E86] font-medium'>Tutup</span>
                        </div>
                    </div>
                    
                    <h3 className='text-[#151875] fnt text-xl font-semibold mb-4'>Ikuti Kami</h3>
                    <div className='flex gap-4 mb-4'>
                        <a href="#" className="bg-[#5726DF] rounded-full h-10 w-10 flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                        <FaFacebookF />
                        </a>
                        <a href="#" className="bg-[#FB2E86] rounded-full h-10 w-10 flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                        <AiFillInstagram />
                        </a>
                        <a href="https://wa.me/6285854616025" className="bg-[#37DAF3] rounded-full h-10 w-10 flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* Kolom Cara Menghubungi */}
                <div>
                    <h2 className='text-[#151875] fnt text-3xl md:text-4xl font-bold pb-6'>Cara Menghubungi</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='bg-white rounded-lg p-6 shadow-md flex items-start gap-4 transform transition-transform hover:-translate-y-1'>
                            <div className="bg-[#5726DF] rounded-full h-12 w-12 flex items-center justify-center text-white flex-shrink-0">
                                <FaPhoneAlt />
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#151875] font-semibold'>Telepon</span>
                                <span className='text-gray-600 font-medium'>+62 858 5461 6025</span>
                                <span className='text-gray-500 text-sm'>Jam kerja: 08.00 - 16.00</span>
                            </div>
                        </div>

                        <div className='bg-white rounded-lg p-6 shadow-md flex items-start gap-4 transform transition-transform hover:-translate-y-1'>
                            <div className="bg-[#FB2E86] rounded-full h-12 w-12 flex items-center justify-center text-white flex-shrink-0">
                                <FaEnvelope />
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#151875] font-semibold'>Email</span>
                                <span className='text-gray-600 font-medium'>hello@kridhasari.com</span>
                                <span className='text-gray-500 text-sm'>Respon dalam 24 jam</span>
                            </div>
                        </div>

                        <div className='bg-white rounded-lg p-6 shadow-md flex items-start gap-4 transform transition-transform hover:-translate-y-1'>
                            <div className="bg-[#FFB265] rounded-full h-12 w-12 flex items-center justify-center text-white flex-shrink-0">
                                <FaMapMarkerAlt />
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#151875] font-semibold'>Alamat</span>
                                <span className='text-gray-600 font-medium'>Jl. Salak No.53, Karangsari, Kec. Sukorejo</span>
                                <span className='text-gray-500 text-sm'> Kota Blitar, Jawa Timur</span>
                            </div>
                        </div>

                        <div className='bg-white rounded-lg p-6 shadow-md flex items-start gap-4 transform transition-transform hover:-translate-y-1'>
                            <div className="bg-[#1BE982] rounded-full h-12 w-12 flex items-center justify-center text-white flex-shrink-0">
                                <FaTruck />
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#151875] font-semibold'>Pengiriman</span>
                                <span className='text-gray-600 font-medium'>Seluruh Indonesia</span>
                                <span className='text-gray-500 text-sm'>Estimasi 2-5 hari kerja</span>
                            </div>
                        </div>
                    </div>
                    
{/* Peta Lokasi Toko */}
<div className='mt-8 bg-white p-4 rounded-lg shadow-md'>
    <h3 className='text-[#151875] font-semibold mb-4'>Lokasi Toko</h3>
    <div className='h-64 rounded-lg overflow-hidden'>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.906479390125!2d112.15638217589051!3d-8.111004681155535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ebf6214b2b41%3A0xf587ab05f50561b8!2sEnting-Enting%20Geti%20Kridhasari!5e0!3m2!1sid!2sid!4v1741671257331!5m2!1sid!2sid"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Toko Kridhasari"
            className="rounded-lg"
        ></iframe>
    </div>
</div>
                </div>
            </div>

            {/* Form Kontak dan Ilustrasi */}
            <div className='container mx-auto flex flex-col-reverse md:flex-row justify-between py-10 md:py-16 pb-20 md:pb-32 items-center px-4 md:px-0'>
                <div className='w-full md:w-1/2 mt-8 md:mt-0'>
                    <div className='bg-white p-6 md:p-8 rounded-lg shadow-md'>
                        <h2 className='text-[#151875] fnt text-2xl md:text-3xl font-bold mb-6'>Kirim Pesan</h2>
                        <p className='text-gray-600 mb-6'>Ingin memesan dalam jumlah besar? Silakan isi formulir di bawah ini dan kami akan segera menghubungi Anda.</p>
                        <ContactForm />
                    </div>
                </div>
                
                <div className='w-full md:w-2/5 flex flex-col items-center'>
                    <img 
                        src="/images/contact/contact.png" 
                        className='w-full max-w-[400px] object-contain mb-6' 
                        alt="Ilustrasi Kontak" 
                    />
                    <div className='bg-[#FB2E86]/10 p-4 rounded-lg mt-4 text-center'>
                        <h3 className='text-[#151875] font-semibold mb-2'>Reseller & Distributor</h3>
                        <p className='text-gray-600'>Tertarik menjadi reseller produk Kridhasari? Hubungi kami untuk informasi program reseller dan harga grosir.</p>
                        <a 
                            href="https://wa.me/6285854616025" 
                            className='inline-flex items-center gap-2 bg-[#FB2E86] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#e01b73] transition-colors'
                        >
                            <FaWhatsapp /> Hubungi via WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact