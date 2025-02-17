import React from 'react' 
import Button from '../../../components/Button/Button'

const Hero = () => {
    return (
        <div className='bg-my-lightpink relative'> 
            <div className='container mx-auto flex flex-col md:flex-row items-center p-4 flex-1  py-20'>
                <div className=''>
                    <h1 className='fnt font-bold text-6xl'>Kridha Sari</h1>
                    <span className='font-bold text-lg text-my-pink'>Aneka olahan enting-enting dan geti terbaik di Blitar</span>
                    <h2 className='fnt font-bold text-5xl py-8'>ENTING-ENTING GETI <br /> KRIDHA SARI</h2>
                    <p className='text-my-subText font-bold text-lg mb-8'>Nikmati camilan khas Blitar dengan cita rasa autentik yang khas.</p>
                    <Button
                        className="bg-my-pink px-6 py-3 rounded-sm text-white fnt font-semibold"
                        title="Shop Now"
                        link="/products" />
                </div>
                <img src="/images/hero.png" className='w-[600px] h-[500px] object-cover hidden lg:block' alt="" />
            </div>
        </div>
    )
}

export default Hero