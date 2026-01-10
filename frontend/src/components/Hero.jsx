import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
   
      <div className='flex flex-col sm:flex-row shadow-xl sm:h-[50vh] w-full' >
        {/* left */}
        <div className='sm:flex-1 flex flex-col justify-center items-start gap-6 px-4 sm:px-8 md:px-16 lg:px-24'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>Discover Your <span className='text-blue-600'>Style</span> with Our Exclusive Collection</h1>
          <p className='text-gray-600 text-sm sm:text-base'>Explore the latest trends in fashion and elevate your wardrobe with our curated selection of clothing and accessories.</p>
          <button className='bg-black text-white px-6 py-3 mb-2 rounded-md hover:bg-gray-800 transition '>Shop Now</button>
       
      </div>
      <div className='sm:flex-1 flex items-center'>
        {/* right */}
        <img src={assets.hero_img} alt="" className='w-full sm:h-full h-auto object-cover' />
      </div>
    </div>
  )
}

export default Hero
