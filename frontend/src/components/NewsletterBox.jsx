import React from 'react'

const NewsletterBox = () => {
  return (
    <div>
      <p className='text-center text-gray-600 font-bold md:text-lg mt-10'>
        Subcribe now and get 10% off your next purchase!
      </p>
      <p className='text-center text-gray-500 text-sm md:text-base py-2'>
        our newsletter to stay updated with the latest news and exclusive offers.
      </p>
      <div>
        <div className='flex justify-center mt-4'>
            <input type="email" placeholder='Enter your email' className='border border-gray-300 rounded-l-md px-4 py-2 w-64 md:w-80 focus:outline-none' />
            <button className='bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition '>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterBox
