import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopContextProvider = ( props ) => {
  const [search, setSearch] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const AddToCart = (id, size) => {

    if  (!size || size.trim() === "") 
      {
        toast.error("Please select a size before adding to cart.", );
        return;
      }

    size = String(size).trim();

    setCartItems(prev => {
      const idx = prev.findIndex(item => item._id === id && item.size === size);

      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + 1 };
        
        return copy;
      }

      
      return [...prev, { _id: id, size, quantity: 1 }];
    });
   
  };
  
  useEffect(() => {
    const count = cartItems.length;
    setCartCount(count);
  }, [cartItems]);
 
     
   

  const updateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      // Remove item if quantity is 0 or less
      setCartItems(prev => prev.filter(item => !(item._id === id && item.size === size)));
      return;
    }

    setCartItems(prev => 
      prev.map(item => 
        item._id === id && item.size === size 
          ? { ...item, quantity: parseInt(quantity) }
          : item
      )
    );
  };

  const removeFromCart = (id, size) => {
    setCartItems(prev => prev.filter(item => !(item._id === id && item.size === size)));
  };

  const getCartAmount = () => {
    return cartItems.reduce((total, cartItem) => {
      const product = products.find(p => p._id === cartItem._id);
      return product ? total + (product.price * cartItem.quantity) : total;
    }, 0);
  };

  const currency = "$";
  const deleveryCharge = 10;
  const value = {
    products,
    currency,
    deleveryCharge,
    search,
    setSearch,
    showSearchBox,
    setShowSearchBox,
    AddToCart,
    cartItems,
    setCartItems,
    cartCount,
    updateQuantity,
    getCartAmount,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;