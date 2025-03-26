import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { GiHomeGarage } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi2";
import { ImUsers } from "react-icons/im";

const SideBar = () => {
  const { toggle } = useSelector(state => state.navbar);
  const { pathname } = useLocation();

  return (
    <motion.div 
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}  
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }} 
      className={`sidebar ${toggle ? 'col-span-2' : ''} bg-[#333333] h-screen overflow-hidden`}  
    >
      <ul className='mt-0 text-lg'> 
        <Link to={'/'} className={`${ pathname === '/' ? 'bg-gray-700 border-r-4 border-solid border-yellow-500' : ''} flex items-center gap-x-2 p-2 hover:bg-sky-600 transition-all duration-200`}>
          <GiHomeGarage className='text-yellow-500'/> <span className="hidden md:inline">Home</span>
        </Link>
        <Link to={'/product'} className={`${ pathname === '/product' ? 'bg-gray-700 border-r-4 border-solid border-yellow-500' : ''} flex items-center gap-x-2 p-2 hover:bg-sky-600 transition-all duration-200`}>
          <HiShoppingBag className='text-yellow-500' /> <span className="hidden md:inline">Products</span>
        </Link>
        <Link to={'/admin'} className={`${ pathname === '/admin' ? 'bg-gray-700 border-r-4 border-solid border-yellow-500' : ''} flex items-center gap-x-2 p-2 hover:bg-sky-600 transition-all duration-200`}>
          <ImUsers className='text-yellow-500' /> <span className="hidden md:inline">Admins</span>
        </Link>
      </ul>
    </motion.div>
  );
}

export default SideBar;