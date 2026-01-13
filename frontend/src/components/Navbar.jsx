import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearchBox} =useContext(ShopContext)
  return (
    <div className="flex items-center justify-between py-5 font-medium sticky top-0 bg-white z-50 bg-transparent">
      <Link to={"/"}>
        <img src={assets.logo} className="w-36" alt="logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/Collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/About" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/Contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

      </ul>
      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearchBox(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>

          </div>

        </div>
        <Link to='/Cart' className='relative'>
          <img src={assets.cart_icon} className=' w-5 min-w-5' alt="" />
          <p className=' absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[-8px]'>10 </p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className=' w-5 sm:hidden cursor-pointer' />
      </div>
      {/* Menu for small screen  */}
      <div className={`fixed top-0 right-0 h-screen w-2/3 max-w-xs bg-white z-50 shadow-lg transform ${visible ? 'translate-x-0' : 'translate-x-full pointer-events-none'} transition-transform duration-300 ease-in-out sm:hidden`}>
        <div className='h-full overflow-y-auto'>
          <div className='flex justify-start p-4 items-center gap-3'>
            <img onClick={() => setVisible(false)} src={assets.dropdown_icon} alt="" className='  cursor-pointer rotate-180 w-3 ' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to="/" className="flex flex-col items-center gap-1 ">
            <p>Home</p>
            <hr className="w-20 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/Collection" className="flex flex-col items-center gap-1">
            <p>Collection</p>
            <hr className="w-20 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/About" className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-20 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/Contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-20 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
