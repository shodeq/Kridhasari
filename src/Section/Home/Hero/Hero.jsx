// import React from 'react' 
// import Button from '../../../components/Button/Button'

// const Hero = () => {
//     return (
//         <div className='bg-my-lightpink relative'> 
//             <div className='container mx-auto flex flex-col md:flex-row items-center p-4 flex-1  py-20'>
//                 <div className=''>
//                     <h1 className='fnt font-bold text-6xl'>Kridha Sari</h1>
//                     <span className='font-bold text-lg text-my-pink'>Aneka olahan enting-enting dan geti terbaik di Blitar</span>
//                     <h2 className='fnt font-bold text-5xl py-8'>ENTING-ENTING GETI <br /> KRIDHA SARI</h2>
//                     <p className='text-my-subText font-bold text-lg mb-8'>Nikmati camilan khas Blitar dengan cita rasa autentik yang khas.</p>
//                     <Button
//                         className="bg-my-pink px-6 py-3 rounded-sm text-white fnt font-semibold"
//                         title="Shop Now"
//                         link="/products" />
//                 </div>
//                 <div className='flex justify-end items-center'>
//                         <img 
//                             src="/images/hero1.png" 
//                             className='w-full max-w-[600px] h-auto object-contain' 
//                             alt="Kridha Sari Products" 
//                         />
//                     </div>
//             </div>
//         </div>
//     )
// }

// export default Hero




// import React from 'react'
// import Button from '../../../components/Button/Button'

// const Hero = () => {
//     return (
//         <div className='bg-my-lightpink relative overflow-hidden'> 
//             <div className='container mx-auto px-4 py-16 md:py-20 lg:py-24 flex flex-col md:flex-row items-center'>
//                 <div className='md:w-1/2 text-center md:text-left z-10'>
//                     <div className='mb-4'>
//                         <h1 className='fnt font-bold text-4xl md:text-5xl lg:text-6xl'>Kridha Sari</h1>
//                         <span className='font-bold text-base md:text-lg text-my-pink'>Aneka olahan enting-enting dan geti terbaik di Blitar</span>
//                     </div>
//                     <h2 className='fnt font-bold text-3xl md:text-4xl lg:text-5xl py-8'>
//                         ENTING-ENTING GETI <br className='hidden md:block' /> KRIDHA SARI
//                     </h2>
//                     <p className='text-my-subText font-bold text-base md:text-lg mb-8'>
//                         Nikmati camilan khas Blitar dengan cita rasa autentik yang khas, dibuat dengan bahan pilihan dan tradisi turun-temurun.
//                     </p>
//                     <div className='flex justify-center md:justify-start'>
//                         <Button
//                             className="bg-my-pink hover:bg-opacity-90 transition-colors duration-300 px-6 py-3 rounded-sm text-white fnt font-semibold"
//                             title="Belanja Sekarang"
//                             link="/products" 
//                         />
//                     </div>
//                 </div>
//                 <div className='md:w-1/2 flex justify-end items-center relative'>
//                     <div className='relative w-full max-w-[800px] lg:max-w-[900px] -mr-24 lg:-mr-36'>
//                         <div className='absolute -z-10 bg-opacity-20 w-full h-full -top-8 -left-8 transform rotate-6'></div>
//                         <img 
//                             src="/images/hero1.png" 
//                             className='w-full h-auto object-contain transform transition-transform duration-300 hover:scale-105 ' 
//                             alt="Kridha Sari Products" 
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero



import React from 'react'
import Button from '../../../components/Button/Button'

const Hero = () => {
    return (
        <div className='bg-my-lightpink relative overflow-hidden'> 
            <div className='container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center'>
                <div className='md:w-1/2 text-center md:text-left z-10 md:pr-8 lg:pr-12'>
                    <div className='mb-4'>
                        <h1 className='fnt font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Kridhasari</h1>
                        <span className='block font-bold text-sm sm:text-base md:text-lg text-my-pink'>
                            Aneka olahan enting-enting dan geti terbaik di Blitar
                        </span>
                    </div>
                    <h2 className='fnt font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 sm:py-6 md:py-8'>
                        ENTING-ENTING GETI <br className='hidden md:block' /> KRIDHASARI
                    </h2>
                    <p className='text-my-subText font-bold text-sm sm:text-base md:text-lg mb-6 md:mb-8'>
                        Nikmati camilan khas Blitar dengan cita rasa autentik yang khas, dibuat dengan bahan pilihan dan tradisi turun-temurun.
                    </p>
                    <div className='flex justify-center md:justify-start'>
                        <Button
                            className="bg-my-pink hover:bg-opacity-90 transition-colors duration-300 px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-sm text-white fnt font-semibold text-sm sm:text-base"
                            title="Belanja Sekarang"
                            link="/products" 
                        />
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-center md:justify-end items-center relative mt-8 md:mt-0'>
                    <div className='relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] md:-mr-12 lg:-mr-24'>
                        <div className='absolute -z-10 bg-opacity-20 w-full h-full -top-4 sm:-top-6 md:-top-8 -left-4 sm:-left-6 md:-left-8 transform rotate-6'></div>
                        <img 
                            src="/images/38.png" 
                            className='w-full h-auto object-contain transform transition-transform duration-300 hover:scale-105' 
                            alt="Kridha Sari Products" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero