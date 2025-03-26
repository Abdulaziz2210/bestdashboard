import React from 'react'
import { HiShoppingBag } from "react-icons/hi2";

const Card = ({title,description,icon,color='bg-sky-600'}) => {


  return (
    <div className='shadow-lg shadow-blue-500/50 bg-[#333333] rounded-lg p-6 gap-x-4 flex'>
      <div className={`${color} text-[gold] text-[30px] rounded-full flex justify-center items-center w-[50px] h-[50px] cursor-pointer flex-none`}>
      {icon}
      </div>

      <div>
        <p className='text-sky-400 font-semibold cursor-pointer'>{title}</p>
        <i className='cursor-pointer px-0.5'> {description}</i>
      </div>  
    </div>
  )
}

export default Card
