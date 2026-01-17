import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import CartTotal from '../components/CartTotal';
import Orders from './Orders';

const Cart = () => {
   const {products, currency, cartItems, updateQuantity, removeFromCart} = useContext(ShopContext);
   const [cartData , setCartData] = useState([]);
   const nevigate = useNavigate();

   useEffect(()=>{
      if(products.length>0 && cartItems.length>0){
          const data = cartItems.map((cartItem)=>{
              const product = products.find((p)=> p._id === cartItem._id);
              return {
                  ...product,
                  quantity: cartItem.quantity,
                  size: cartItem.size,
              };
          });
          setCartData(data);
      } else {
          setCartData([]);
      }
    },[products,cartItems]);

  return (
   
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-8'>
      <div className='mb-8'>
        <Title title="YOUR" desc="CART" />
      </div>
      
      <div>
        {/* cart items  */}
        {
          cartData.length === 0 ? (
            <p className='text-center mt-10 text-gray-500'>Your cart is empty.</p>
          ) : (
            <div className='space-y-4'>
              {
                cartData.map((item,index)=>(
                  <div key={index} className='bg-white border rounded-lg p-4 shadow-sm'>
                    {/* Mobile Layout - Stack vertically */}
                    <div className='block md:hidden'>
                      <div className='flex gap-4 mb-4'>
                        <img src={item.image[0]} alt={item.name} className='w-16 h-16 object-cover rounded-md flex-shrink-0' />
                        <div className='flex-1 min-w-0'>
                          <h3 className='text-sm font-medium text-gray-900 truncate'>{item.name}</h3>
                          <p className='text-xs text-gray-500'>Size: {item.size}</p>
                          <p className='text-sm font-medium text-gray-900'>{currency} {item.price}</p>
                        </div>
                      </div>
                      
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <span className='text-sm text-gray-600'>Qty:</span>
                          <input 
                            onChange={(e) => updateQuantity(item._id, item.size, e.target.value)} 
                            className='border border-gray-300 w-16 text-center text-sm rounded' 
                            type="number" 
                            min="1" 
                            value={item.quantity}
                          />
                        </div>
                        
                        <div className='flex items-center gap-4'>
                          <p className='text-sm font-semibold text-gray-900'>{currency} {item.price * item.quantity}</p>
                          <button 
                            onClick={() => removeFromCart(item._id, item.size)}
                            className='text-red-500 hover:text-red-700 text-lg p-1'
                            title="Remove item"
                          >
                           <img src={assets.bin_icon} alt=""  className='w-6'/>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout - Horizontal */}
                    <div className='hidden md:flex md:flex-row md:justify-between md:gap-6'>
                      <div className='flex gap-4 flex-1'>
                        <img src={item.image[0]} alt={item.name} className='w-20 h-20 object-cover rounded-md flex-shrink-0' />
                        <div className='flex-1'>
                          <h3 className='text-base font-medium text-gray-900'>{item.name}</h3>
                          <p className='text-sm text-gray-500'>Size: {item.size}</p>
                          <p className='text-sm font-medium text-gray-900'>{currency} {item.price}</p>
                        </div>
                      </div>

                      <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                          <span className='text-sm text-gray-600'>Qty:</span>
                          <input 
                            onChange={(e) => updateQuantity(item._id, item.size, e.target.value)} 
                            className='border border-gray-300 w-20 text-center rounded' 
                            type="number" 
                            min="1" 
                            value={item.quantity}
                          />
                        </div>
                        
                        <p className='text-base font-semibold text-gray-900 min-w-[80px] text-right'>{currency} {item.price * item.quantity}</p>
                        
                        <button 
                          onClick={() => removeFromCart(item._id, item.size)}
                          className='text-red-500 hover:text-red-700 text-xl p-1'
                          title="Remove item"
                        >
                         <img src={assets.bin_icon} alt="" className='w-6'/>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
      {cartData.length > 0 && (
        <div className='mt-8'>
          {/* cart summary */}
          <div className='bg-gray-50 p-4 sm:p-6 rounded-lg w-full sm:max-w-md sm:ml-auto'>
            
          <CartTotal/>
            <button onClick={()=>nevigate("/PlaceOrder")} className='w-full mt-4 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition text-sm sm:text-base'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
      
    </div >

  )
}

export default Cart
