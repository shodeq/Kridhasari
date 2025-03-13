import React from 'react'
import Logo from '../Header/Logo'
import FooterBar from '../FooterBar/FooterBar'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className='bg-[#EEEFFB] py-12 border-t border-gray-200'>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* About Store */}
                        <div>
                            <Logo />
                            <p className="my-4 text-gray-600">
                            Kridhasari menyajikan camilan tradisional berkualitas sejak 1950. 
                            Kami menjaga keaslian resep turun-temurun dengan bahan-bahan pilihan.
                            </p>
                            <form className='flex items-center my-5 gap-2'>
                                <input type="email"
                                    placeholder='Your Email'
                                    className='flex-1 border border-[#dfe0f3] outline-none p-3 rounded-md focus:border-[#FB2E86] transition-colors' />
                                <button className='bg-[#FB2E86] text-white px-4 py-3 rounded-md hover:bg-[#e31b78] transition-colors'>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                        
                        {/* Contact Info */}
                        <div>
                            <h2 className='text-sectionTitle font-bold text-xl mb-4 pb-2 border-b border-gray-200'>
                                Contact Us
                            </h2>
                            <div className="space-y-3 text-gray-600">
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-[#FB2E86] mt-1 flex-shrink-0" />
                                    <p>Jl. Salak No.53, Karangsari, Kec. Sukorejo, Kota Blitar, Jawa Timur 66125</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaPhoneAlt className="text-[#FB2E86] flex-shrink-0" />
                                    <p>+62 858 5461 6025</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-[#FB2E86] flex-shrink-0" />
                                    <p>hello@kridhasari.com</p>
                                </div>
                            </div>
                            
                            <div className="mt-6">
                                <h3 className="text-gray-800 font-medium mb-2">Follow Us</h3>
                                <div className="flex gap-3">
                                    <a href="https://www.instagram.com/kridhasari?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-9 h-9 rounded-full flex items-center justify-center bg-textBlue text-white hover:bg-[#FB2E86] hover:text-white border border-gray-200 transition-all">
                                        <FaInstagram />
                                    </a>
                                    <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-textBlue text-white hover:bg-[#FB2E86] hover:text-white border border-gray-200 transition-all">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://wa.me/6285854616025" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center bg-textBlue text-white hover:bg-[#FB2E86] hover:text-white border border-gray-200 transition-all">
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Navigation */}
                        <div>
                            <h2 className='text-sectionTitle font-bold text-xl mb-4 pb-2 border-b border-gray-200'>
                                Menu
                            </h2>
                            <div className="grid grid-cols-2 gap-x-4">
                                <ul className='space-y-2 text-gray-600'>
                                    <li className='py-1 hover:text-[#FB2E86] transition-colors'>
                                        <a href="#">Home</a>
                                    </li>
                                    <li className='py-1 hover:text-[#FB2E86] transition-colors'>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li className='py-1 hover:text-[#FB2E86] transition-colors'>
                                        <a href="#">Products</a>
                                    </li>
                                    <li className='py-1 hover:text-[#FB2E86] transition-colors'>
                                        <a href="#">Contact</a>
                                    </li>
                                    <li className='py-1 hover:text-[#FB2E86] transition-colors'>
                                        <a href="#">How to Order</a>
                                    </li>
                                </ul>
                                {/* <ul className='space-y-2 text-gray-600'>
                                    <li className='py-1 hover:text-[#FB2E86] transition-colors'>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li className='py-1 hover:text-[#FB2E86] transition-colors'>
                                        <a href="#">Testimonials</a>
                                    </li>
                                    <li className='py-1 hover:text-[#FB2E86] transition-colors'>
                                        <a href="#">Reseller</a>
                                    </li>
                                    <li className='py-1 hover:text-[#FB2E86] transition-colors'>
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li className='py-1 hover:text-[#FB2E86] transition-colors'>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBar />
        </div>
    )
}

export default Footer