import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products}=useContext(ShopContext);
    const [Latestproduct, setLatestProducts]=useState([]);
    useEffect(() => {
      const latest = products.slice(0,10); // Get the first 10 products 
      setLatestProducts(latest);
    }, []);
  return (
    <div className='my-10 px-5 md:px-10 lg:px-20'>
      <div className='flex flex-col items-center text-center text-3xl ' >
        {/* title section */}
        <div>
            <Title title="LATEST" desc="COLLECTION" />
           <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
             Explore our latest collection of trendy and stylish products, carefully curated to keep you ahead in fashion and lifestyle.
           </p>
           
            
        </div>
      </div>
      <div>
        {/* products grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 mt-6'>
            {
                Latestproduct.map((item,index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name}  price={item.price} />
                ))
            }
            
      </div>
        </div>
    </div>
  )
}

export default LatestCollection
