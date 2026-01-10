import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='py-36   '>
      <div className=' grid grid-cols-1 md:grid-cols-3 gap-10 mb-20'>
        {/* top footer */}
        <div className=''>
            <img src={assets.logo} alt="" className='w-36 m-auto' />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-4'>
                our company is committed to delivering the best products and services to our customers. We value your trust and strive to exceed your expectations in every interaction.
            </p>
        </div>
        <div>
            <ul className=" flex justify-center gap-5 text-sm sm:flex-col text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
         
        </NavLink>
        <NavLink to="/Colletion" className="flex flex-col items-center gap-1">
          <p>Collection</p>
         
        </NavLink>
        <NavLink to="/About" className="flex flex-col items-center gap-1">
          <p>About</p>
          
        </NavLink>
        <NavLink to="/Contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          
        </NavLink>

      </ul>
        </div>
        <div>
            <p className='text-lg font-bold text-center mb-4'>
                Get in Touch
            </p>
            <div className='flex flex-col gap-4 text-center text-gray-600 text-sm'>
                <p>
                    House 388, Road 4, block G, Bashundhara ,Dhaka
                </p>
                <p>
                    Email: toriquilislam56@gmail.com
                </p>
                <p>
                    Phone: +123 456 7890
                </p>
            </div>
        </div>
      </div>
      <div>
        <div className="border-t border-gray-400 mb-6" />
        {/* bottom footer */}
        <p className='text-center text-gray-500 text-xs'>
            &copy; 2026 Produced by jony. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
