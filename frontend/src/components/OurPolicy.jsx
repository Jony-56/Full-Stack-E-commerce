import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-around py-10 lg:mt-20 gap-12 ' >
        <div className=''>
            <img src={assets.exchange_icon} alt="" className='w-5 m-auto' />
            <p className='text-sm mt-2 text-gray-600 font-bold text-center'>30 Days Exchange</p>
            <p className='w-48 text-xs text-gray-500 text-center mt-1'>
                If you are not satisfied with the product, you can exchange it within 30 days.
            </p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className=' w-5 m-auto' />
            <p className='text-sm mt-2 text-gray-600 font-bold text-center'>Quality Guarantee</p>
            <p className='w-48 text-xs text-gray-500 text-center mt-1'>
                We ensure the best quality products for our customers.
            </p>
        </div>
        <div>
            
            <img src={assets.support_img} alt="" className='w-5 m-auto' />
            <p className='text-sm mt-2 text-gray-600 font-bold text-center'>24/7 Support</p>
            <p className='w-48 text-xs text-gray-500 text-center mt-1'>
                Our support team is available 24/7 to assist you with any queries.
            </p>
        </div>
      
    </div>
  )
}

export default OurPolicy
