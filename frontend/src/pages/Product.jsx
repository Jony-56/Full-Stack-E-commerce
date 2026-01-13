import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const { ProductId } = useParams();
  const { products } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [image, setimage] = useState("");
  const [size , setSize] = useState("");
  const hangleSelectSize = (size)=>{
    setSize(size);
  }

  const fetchProduct = async () => {

    products.map((item) => {
      if (item._id === (ProductId)) {
        setProduct(item);
        setimage(item.image[0]);
        console.log(item);

      }
      return null;
    })
  };
  useEffect(() => {
    fetchProduct();
  }, [ProductId, products]);
  return product ? (
    <div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20 my-10 px-4 md:px-10">

  {/* Thumbnails */}
  <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
    {product.image.map((img, index) => (
      <img
        key={index}
        onClick={() => setimage(img)}
        src={img}
        alt=""
        className="
          w-16 h-16
          sm:w-20 sm:h-20
          object-cover cursor-pointer
          border-2 rounded-md
          hover:border-black
          transition
        "
      />
    ))}
  </div>

  {/* Main Image */}
  <div className="flex-1 flex justify-center">
    <img
      src={image}
      alt={product.name}
      className="
        w-full
        max-w-md sm:max-w-lg md:max-w-xl
        h-auto
        object-cover
        rounded-lg
      "
    />
  </div>

  {/* Product Details */}
  <div className="flex-1 flex flex-col gap-6">
    <h1 className="text-2xl sm:text-3xl font-semibold">{product.name}</h1>
    {/* ratings */}
    <div className='flex items-center gap-1'>
      <img src={assets.star_icon} alt="" className='w-3' />
      <img src={assets.star_icon} alt="" className='w-3' />
      <img src={assets.star_icon} alt="" className='w-3' />
      <img src={assets.star_icon} alt="" className='w-3' />
      <img src={assets.star_dull_icon} alt="" className='w-3' />
      <span className='text-sm text-gray-600 ml-2'>(100 Reviews)</span>
    </div>
    <p className="text-gray-600">{product.description}</p>
    <p className="text-xl font-medium">Price: ${product.price}</p>
    <p>Select Size</p>
    <div>
      {
        product.sizes.map((s, index) => (
          <button onClick={()=>setSize(s)} key={index}  className={`border px-4 py-2 mr-3 mb-3 rounded-md hover:bg-black hover:text-white transition ${size===s ? 'bg-black text-white': 'bg-white text-black'}`}>
            {s}
          </button>
        ))
      }
    </div>

    <button className="bg-black text-white px-6 py-3 rounded-md w-max hover:bg-gray-800 transition">
      Add to Cart
    </button>
    <hr className='mt-10 sm:w-4/5' />
    <div className='flex flex-col gap-1 text-gray-600'>
      <p>100% Original Product</p>
      <p>Free Delivery on orders above $50</p>
      <p>Easy Returns and Exchanges</p>

    </div>

  </div>

</div>

      {/* Description and Reviews Selection */}
      <div className='mt-20'>
        <div className="flex gap-6 border-b border-gray-300">
          <button className="pb-2 font-medium border-b-2 border-black">Description</button>
          <button className="pb-2 font-medium text-gray-500">Reviews (100)</button>
        </div>
        <div className="mt-6">
          <p className="text-gray-700">{product.description}</p>

        </div>

      </div>

    </div>
  ) : <div>
    Loading....
  </div>
}

export default Product
