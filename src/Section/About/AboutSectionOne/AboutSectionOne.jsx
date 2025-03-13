import React from 'react'
import Button from '../../../components/Button/Button'

const AboutSectionOne = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-12'>
                <img src="/images/about/aboutsection1.png" className='w-[500px] object-cover shadow-2xl rounded-lg' alt="Produk Kridhasari" />
                <div>
                    <h2 className='text-4xl fnt font-bold text-[#151875] pb-4'>Lebih Mengenal Tentang Kridhasari</h2>
                    
                    <p className='text-lg text-gray-600 pb-4'>
                        Kridhasari adalah warisan kuliner Blitar yang telah melekat dalam ingatan masyarakat sejak tahun 1950. Berawal dari dapur rumahan yang memproduksi geti kacang dan wijen secara tradisional, Kridhasari kini telah berkembang menjadi produsen camilan tradisional terkemuka di Jawa Timur.
                    </p>
                    
                    <p className='text-lg text-gray-600 pb-4'>
                        Pada tahun 2012, usaha keluarga ini berkembang menjadi CV Enggal Jaya yang kemudian berkembang menjadi PT Kridha Jaya Semesta. Meski telah berkembang, kami tetap berpegang pada resep tradisional dan standar kualitas yang ketat untuk menjaga keaslian cita rasa.
                    </p>
                    
                    <p className='text-lg text-gray-600 pb-6'>
                        Seiring perkembangan, pada tahun 2023 kami memperluas lini bisnis dengan menyediakan paket hampers dan oleh oleh-oleh serta mendirikan Pusat Edukasi, Pelatihan, dan Studi Tour tentang kewirausahaan dan UMKM. Komitmen kami tidak hanya menghadirkan makanan berkualitas, tetapi juga menginspirasi generasi baru wirausahawan.
                    </p>
                    
                    <div className='flex flex-wrap gap-4 mb-8'>
                        <div className='bg-[#EEEFFB] p-4 rounded-lg w-full sm:w-auto'>
                            <h4 className='text-[#FB2E86] font-bold text-xl mb-1'>70+</h4>
                            <p className='text-gray-700'>Tahun Pengalaman</p>
                        </div>
                        
                        <div className='bg-[#EEEFFB] p-4 rounded-lg w-full sm:w-auto'>
                            <h4 className='text-[#FB2E86] font-bold text-xl mb-1'>15+</h4>
                            <p className='text-gray-700'>Varian Produk</p>
                        </div>
                        
                        <div className='bg-[#EEEFFB] p-4 rounded-lg w-full sm:w-auto'>
                            <h4 className='text-[#FB2E86] font-bold text-xl mb-1'>1000+</h4>
                            <p className='text-gray-700'>Pelanggan Puas</p>
                        </div>
                    </div>
                    
                    <Button
                        className="bg-[#FB2E86] px-6 py-3 text-white rounded hover:bg-[#e01b73] transition-colors"
                        title="Hubungi Kami" />
                </div>
            </div>
        </div>
    )
}

export default AboutSectionOne