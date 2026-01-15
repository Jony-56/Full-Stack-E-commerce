import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProduct = ({category,type}) => {
    const [RelatedProduct, setRelatedProduct] = useState([]);
    const {products} = useContext(ShopContext)
    useEffect(()=>{
        if(products.length>0){
            const related  = products.filter((item)=> item.category === category && item.subCategory === type).slice(0,5);
           
            setRelatedProduct(related);
        }
    },[products,category,type])
  return (
   <div className='mt-10'>
    <div className='flex flex-col items-center text-center text-3xl ' >
        {/* title section  */}
        <Title title="RELATED" desc="PRODUCTS" />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
             You may also like these products related to your choice.
        </p>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 mt-6'>
     {
        RelatedProduct.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name}  price={item.price} />
        ))
     }
    </div>
   </div>
  )
}

export default RelatedProduct
