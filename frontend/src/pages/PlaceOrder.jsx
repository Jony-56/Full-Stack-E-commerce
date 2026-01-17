import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const nevigate = useNavigate(); 
  return (
    <div className='flex flex-col md:flex-row gap-10 md:gap-20 pt-10 pb-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto'>

      <div className='flex flex-col w-full md:w-1/2'>
        {/* address */}

        <Title title="DELIVERY" desc="INFORMATION" />

        <div className='flex flex-row gap-4 mt-6 mb-4'>
          <input type="text" className='border border-gray-300 w-full px-3.5 py-2 rounded shadow-sm' placeholder='First name' />
          <input type="text" className='border border-gray-300 w-full px-3.5 py-2 rounded shadow-sm' placeholder='Last name' />
        </div>
        <input type="email" className='border border-gray-300 w-full px-3.5 py-2 rounded shadow-sm mb-4' placeholder='Email address' />

        <input type="text" className='border border-gray-300 w-full px-3.5 py-2 rounded shadow-sm mb-4' placeholder='Street' />

        <div className='flex flex-row gap-4 mb-4'>
          <input type="text" className='border border-gray-300 w-full px-3.5 py-2 rounded shadow-sm' placeholder='City' />
          <input type="text" className='border border-gray-300 w-full px-3.5 py-2 rounded shadow-sm' placeholder='State' />
        </div>

        <div className='flex flex-row gap-4 mb-4'>
          <input type="number" className='border border-gray-300 w-full px-3.5 py-2 rounded shadow-sm' placeholder='Zip code' />
          <input type="text" className='border border-gray-300 w-full px-3.5 py-2 rounded shadow-sm' placeholder='Country' />
        </div>
        <input type="text" className='border border-gray-300 w-full px-3.5 py-2 rounded shadow-sm mb-4' placeholder='Phone' />

      </div>
      <div className='flex flex-col w-full md:w-1/2 pt-10 md:pt-20 gap-6 md:gap-10'>
        {/* order summary */}
        <div>
          <CartTotal />
        </div>
        <div>
          <Title title="PAYMENT" desc="METHOD" />
          <div className='mt-6 flex flex-col md:flex-row gap-4'>
            <label className='flex items-center gap-3'>
              <input type="radio" name="payment" className='w-4 h-4' />
              <span className='text-sm text-gray-700'>Credit / Debit Card</span>
            </label>
            <label className='flex items-center gap-3'>
              <input type="radio" name="payment" className='w-4 h-4' />
              <span className='text-sm text-gray-700'>PayPal</span>
            </label>
            <label className='flex items-center  gap-3'>
              <input type="radio" name="payment" className='w-4 h-4' />
              <span className='text-sm text-gray-700'>Cash on Delivery</span>
            </label>
          </div>  
        </div>
       <div>
        <button onClick={()=>nevigate("/Orders")} className='w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition text-sm sm:text-base'>
          PLACE ORDER
        </button>
       </div>

      </div>
    </div>
  )
}

export default PlaceOrder
