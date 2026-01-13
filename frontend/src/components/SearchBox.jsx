import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBox = () => {
    const { search,
        setSearch,
        showSearchBox,
        setShowSearchBox } = useContext(ShopContext);
    const [visible, setVisible] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if ((path === '/' || path === '/Collection') && showSearchBox) setVisible(true);
        else setVisible(false);
    }, [location.pathname, showSearchBox]);

    const handleClear = () => {
        setSearch("");
        setShowSearchBox(false);
    };

    return visible ? (
        <div className='flex justify-center items-center mt-4 mb-2'>
            <div className="inline-flex items-center justify-between border border-gray-300 rounded-full px-4 py-1 mt-4 mb-6 w-full max-w-md  gap-2">
                {/* Search box UI goes here */}
                <input
                    className='flex-1 outline-none '
                    type="text"
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img className='w-4 h-4 cursor-pointer' src={assets.search_icon} alt="" />

            </div>
            <img onClick={handleClear} src={assets.cross_icon} alt="" className='inline-flex px-4 pb-2  h-6 cursor-pointer ' />
        </div>
    ) : null
}

export default SearchBox
