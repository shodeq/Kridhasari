import React from 'react'
import Button from '../../../components/Button/Button' 

const AboutSectionOne = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-12'>
                <img src="/images/about/aboutsection1.png" className='w-[500px] object-cover shadow-2xl' alt="" />
                <div>
                    <h2 className='text-4xl fnt font-bold text-textBlue pb-4'>Lebih Mengenal Tentang Kridha Sari</h2>
                    <p className='text-lg text-my-subText pb-12'>PT Kridha Jaya Semesta adalah perusahaan yang terbentuk dan berawal dari sebuah CV yang bernama Enggal Jaya pada tahun 2012 yang memproduksi aneka Enting-enting & Geti Oleh-oleh khas Blitar yang kemudian pada akhirnya berkembang dan menambah lini bisnis baru pada awal tahun 2023 sebagai penyedia jasa layanan catering dan persewaan alat pesta serta membuka Pusat Edukasi, Pelatihan dan Studi Tour terkait kewirausahaan dan UMKM bagi umum.</p>
                    <Button
                        className="bg-my-pink px-6 py-3 text-white rounded"
                        title="Contact us" />
                </div>
            </div>

             
        </div>
    )
}

export default AboutSectionOne