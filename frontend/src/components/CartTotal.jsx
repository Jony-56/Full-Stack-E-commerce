import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const {currency, getCartAmount} = useContext(ShopContext);
  return (
    <div>
        <Title title="CART" desc="SUMMARY" />
      <div className='space-y-3'>
              <div className='flex justify-between text-sm sm:text-base'>
                <span>Subtotal:</span>
                <span>{currency} {getCartAmount()}</span>
              </div>
              <div className='flex justify-between text-sm sm:text-base'>
                <span>Delivery Fee:</span>
                <span>{currency} 10</span>
              </div>
              <hr className='my-3' />
              <div className='flex justify-between font-semibold text-base sm:text-lg'>
                <span>Total:</span>
                <span>{currency} {getCartAmount() + 10}</span>
              </div>
            </div>
    </div>
  )
}

export default CartTotal
