import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { GiHomeGarage } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi2";
import { ImUsers } from "react-icons/im";

const SideBar = () => {
  const {toggle} = useSelector(state=>state.navbar)
  const {pathname} = useLocation()
     
  return (
    <motion.div 
     initial={{ x: "-100%"}}
     animate={{ x: 0}}  
     exit={{ x: "-100%"}}
     transition={{ duration:0.3, ease: "easeInOut"}} 
     className={`sidebar ${toggle ? 'col-span-2' : ''} bg-[#333333]`}>
       <hr /> 
      <ul className='mt-3 text-xl'>
        <Link to={'/'} className={`${ pathname === '/' ? 'bg-[#242424] border-r-[5px] border-solid border-[gold]' : ''} flex items-center gap-x-2 p-4 pl-6 cursor-pointer hover:bg-sky-600  `}><GiHomeGarage className='text-[gold]'/> <p> Home </p></Link>
        <Link to={'/product'} className={`${ pathname === '/product'  ? 'bg-[#242424] border-r-[5px] border-solid border-[gold]' : ''} flex items-center gap-x-2 p-4 pl-6 cursor-pointer hover:bg-sky-600  `}><HiShoppingBag  className='text-[gold]' /> <p>Products</p></Link>
        <Link to={'/admin'} className={`${ pathname === '/admin' ? 'bg-[#242424] border-r-[5px] border-solid border-[gold]' : ''} flex items-center gap-x-2 p-4 pl-6 cursor-pointer hover:bg-sky-600  `}><ImUsers  className='text-[gold]' /> <p>Admins</p></Link>
      </ul>
    </motion.div>
  )
}

export default SideBar
