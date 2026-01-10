import React, {  useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [BestSeller, setBestSeller] = useState([]);
    useEffect(() => {
        const Seller = products.filter((item) => item.bestseller==false).slice(10,15); // Get the first 10 best seller products
        setBestSeller(Seller);
        console.log(Seller);

    }, []);
  return (
    <div>
        <div className='my-10'>
            {/* title */}
            <div className='flex flex-col items-center text-center text-3xl'>
                <Title title="BEST" desc="SELLER" />
                <p className='w-3/4 m-auto text-xs sm:text-sm lg:text-base text-gray-600'>
                    Discover our best-selling products that have won the hearts of our customers for their quality, style, and value.
                </p>
            </div>
        </div>
        <div>
            {/* products grid*/}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 mt-6'>
            {
                BestSeller.map((item,index)=>(
                       <ProductItem key={index} id={item._id} image={item.image} name={item.name}  price={item.price} />
                ))
            }
            
      </div>
        </div>
      
    </div>
  )
}

export default BestSeller
