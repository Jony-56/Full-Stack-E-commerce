import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sort, setSort] = useState('default');
  const {search ,showSearchBox} = useContext(ShopContext);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  };

  useEffect(() => {
    if (!products) return;
    let updated = [...products];

    if (selectedCategories.length > 0) {
      updated = updated.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedTypes.length > 0) {
      // product type is stored in `subCategory`
      updated = updated.filter((p) => selectedTypes.includes(p.subCategory));
    }
    if(showSearchBox && search){
      updated = updated.filter((p)=> p.name.toLowerCase().includes(search.toLowerCase()));
    }

    // sorting
    if (sort === 'priceLowToHigh') {
      updated.sort((a, b) => a.price - b.price);
    } else if (sort === 'priceHighToLow') {
      updated.sort((a, b) => b.price - a.price);
    } else if (sort === 'newArrivals') {
      updated.sort((a, b) => b.date - a.date);
    }

    setFilteredProducts(updated);
  }, [products, selectedCategories, selectedTypes, sort,search,showSearchBox]);

  // initialize when products load
  useEffect(() => {
    if (products) setFilteredProducts(products);
  }, [products]);

  return (
    <div className="min-h-screen">

      {/* FILTER BUTTON (Mobile Only) */}
      <div className="flex text-start mb-2">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen((s) => !s)}>
          <p className="text-xl font-bold">FILTERS</p>
          <img src={assets.dropdown_icon} alt="dropdown" className={`sm:hidden w-2 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">

        {/* FILTER PANEL (visible on mobile when toggled, always visible on sm+) */}
        <aside className={`${isOpen ? 'block' : 'hidden'} w-full bg-white p-4 sm:block sm:w-64 sm:p-0`}>
          <div className="flex flex-col gap-4">
            <div className="border border-gray-300 p-3">
              <p className="font-medium mb-2">CATEGORIES</p>
              <div className="flex flex-col gap-1 font-light">
                {['Men', 'Women', 'Kids'].map((cat) => (
                  <label key={cat} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                    />
                    {cat.toUpperCase()}
                  </label>
                ))}
              </div>
            </div>

            <div className="border border-gray-300 p-3">
              <p className="font-medium mb-2">TYPE</p>
              <div className="flex flex-col gap-1 font-light">
                {['Topwear', 'Bottomwear', 'Winterwear'].map((t) => (
                  <label key={t} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedTypes.includes(t)}
                      onChange={() => handleTypeChange(t)}
                    />
                    {t.toUpperCase()}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* PRODUCTS SECTION */}
        <main className="flex-1">
          <div className="flex items-center justify-between text-base sm:text-2xl mb-2">
            <Title title={'ALL'} desc={'COLLECTIONS'} />
            <select
              className="border border-gray-300 px-2 py-1 text-sm sm:text-base rounded"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Default Sorting</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="newArrivals">New Arrivals</option>
            </select>
          </div>

          <div>
            {/* products grid*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {filteredProducts && filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
              ) : (
                <p className="text-center col-span-full">No products found.</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Collection;
