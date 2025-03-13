import React from 'react'

const AboutSectionTwo = () => {
  return (
    <div className='bg-[#EEEFFB]'>
      <div className='container mx-auto py-16'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='md:w-1/2'>
            <h2 className='text-4xl fnt font-bold text-[#151875] pb-6'>Nilai dan Komitmen Kami</h2>
            
            <div className='space-y-6'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-[#151875] mb-3'>Kualitas Premium</h3>
                <p className='text-gray-600'>
                  Kami hanya menggunakan bahan baku pilihan terbaik untuk setiap produk. Kacang tanah, wijen, dan gula merah diseleksi dengan ketat untuk memastikan kualitas terbaik pada setiap camilan Kridhasari.
                </p>
              </div>
              
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-[#151875] mb-3'>Resep Tradisional</h3>
                <p className='text-gray-600'>
                  Resep turun-temurun yang telah teruji selama puluhan tahun menjadi kekuatan utama produk kami. Kami tetap mempertahankan metode produksi tradisional untuk menjaga keaslian cita rasa.
                </p>
              </div>
              
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-[#151875] mb-3'>Inovasi Berkelanjutan</h3>
                <p className='text-gray-600'>
                  Sambil mempertahankan keaslian, kami terus berinovasi dalam kemasan, varian rasa, dan pelayanan untuk memenuhi kebutuhan pelanggan modern tanpa mengorbankan nilai tradisional.
                </p>
              </div>
            </div>
          </div>
          
          <div className='md:w-1/2'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-2xl font-semibold text-[#151875] mb-4'>Perjalanan Kridhasari</h3>
              
              <div className='space-y-6'>
                <div className='flex'>
                  <div className='mr-4'>
                    <div className='w-12 h-12 rounded-full bg-[#FB2E86] text-white flex items-center justify-center font-bold text-lg'>1950</div>
                    <div className='h-full w-0.5 bg-gray-200 mx-auto mt-2'></div>
                  </div>
                  <div>
                    <h4 className='text-lg font-medium text-[#151875]'>Awal Mula</h4>
                    <p className='text-gray-600 mb-4'>
                      Kridhasari didirikan sebagai usaha rumahan yang memproduksi geti kacang dan wijen dengan resep tradisional yang diwariskan turun-temurun.
                    </p>
                  </div>
                </div>
                
                <div className='flex'>
                  <div className='mr-4'>
                    <div className='w-12 h-12 rounded-full bg-[#FB2E86] text-white flex items-center justify-center font-bold text-lg'>2012</div>
                    <div className='h-full w-0.5 bg-gray-200 mx-auto mt-2'></div>
                  </div>
                  <div>
                    <h4 className='text-lg font-medium text-[#151875]'>Ekspansi Pertama</h4>
                    <p className='text-gray-600 mb-4'>
                      Berkembang menjadi CV Enggal Jaya dengan kapasitas produksi yang lebih besar dan jangkauan pasar yang lebih luas di Jawa Timur.
                    </p>
                  </div>
                </div>
                
                <div className='flex'>
                  <div className='mr-4'>
                    <div className='w-12 h-12 rounded-full bg-[#FB2E86] text-white flex items-center justify-center font-bold text-lg'>2020</div>
                    <div className='h-full w-0.5 bg-gray-200 mx-auto mt-2'></div>
                  </div>
                  <div>
                    <h4 className='text-lg font-medium text-[#151875]'>Transformasi Digital</h4>
                    <p className='text-gray-600 mb-4'>
                      Meluncurkan platform e-commerce dan memperluas jangkauan distribusi ke seluruh Indonesia melalui kemitraan dengan marketplace.
                    </p>
                  </div>
                </div>
                
                <div className='flex'>
                  <div className='mr-4'>
                    <div className='w-12 h-12 rounded-full bg-[#FB2E86] text-white flex items-center justify-center font-bold text-lg'>2023</div>
                  </div>
                  <div>
                    <h4 className='text-lg font-medium text-[#151875]'>Diversifikasi Bisnis</h4>
                    <p className='text-gray-600'>
                      Berkembang menjadi PT Kridha Jaya Semesta dengan menambahkan layanan catering, persewaan alat pesta, dan Pusat Edukasi Kewirausahaan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSectionTwo