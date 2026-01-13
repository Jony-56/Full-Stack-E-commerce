import { createContext, useState } from "react";
import { products } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = ( props ) => {
  const [search, setSearch] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);

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
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;