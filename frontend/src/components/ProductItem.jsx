import React, { useContext } from 'react'
import{ ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);
  return (
    <div>
      <Link  to={`/Product/${id}`} className='text-gray-500 cursor-pointer'>
      <div className=''>
        <img src={image} alt={name} className=' w-full h-72 object-cover mb-3 hover:scale-105 transition-all duration-300'/>
      </div>
      <div className='flex flex-col gap-1'>
        <p className='text-sm'>{name}</p>
        <p className='font-medium'>{currency} {price}</p>
      </div>
      </Link>
    </div>
  )
}

export default ProductItem
