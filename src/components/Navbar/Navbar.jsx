import React from 'react'    
import { TbArrowBarRight } from "react-icons/tb";
import { TbArrowBarLeft } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { BsTranslate } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { navbarToggle, profileToggle } from '../../redux/slice/nslice';


const Navbar = () => {
  // const [toggle,setToggle] = useState(false)
  // const [profile,setProfile] = useState(false)
  const {toggle,profile} = useSelector(state=>state.navbar)
  const dispatch = useDispatch()


  return (
    <div className='flex justify-between bg-[#333333] px-4 py-2'>
      <div className=' flex justify-between items-center w-[400px]'>
        {toggle &&  <p className='text-[30px] text-[semibold] text-sky-400'> TopSpeed DashBoard</p>  }

      
      <div onClick={()=>dispatch(navbarToggle(!toggle))} className='flex justify-center items-center w-[40px] h-[40px] text-[gold] text-[30px] cursor-pointer hover:bg-[#242424] rounded transition-all'>
        {toggle ? <i><TbArrowBarRight /></i> : <i><TbArrowBarLeft /></i>}
      </div>
      </div>
    <div className='flex items-center gap-x-2 relative'>

    <div className='flex justify-center items-center text-[gold] cursor-pointer w-[40px] h-[40px] hover:bg-[#242424] rounded transition-all gap-[5px]'>
      <BsTranslate size={30} />
      
      </div>

        <div onClick={()=>dispatch(profileToggle(!profile))} className='cursor-pointer flex justify-center items-center font-semibold text-[white] rounded-full w-[45px] h-[45px] bg-sky-500 gap-[5px] '>
        A.A
        </div>

        {
          profile ?
          <div className='absolute top-[70px] right-[10px] bg-[#333333] p-2 transition-all rounded-md'>
            <ul>
              <li className='font-[400] text-[20px] p-1 px-4 border-b-[1px] border-solid border-black'>
                  ...
              </li>
              <hr />
              <li className='flex items-center gap-x-2 p-2 px-4 text-[15px] cursor-pointer text-[red] hover:bg-[#242424] transition-all'>
              LogOut
              <MdLogout size={21} />
              </li>
            </ul>
          </div>
       : '' } 

    {/* <div className='flex justify-center items-center cursor-pointer w-[40px] h-[40px] hover:bg-[#242424] rounded transition-all'>
      <MdLogout size={30} />
      </div> */}
     </div>

    </div>
  )
}

export default Navbar


 //  <i><TbArrowBarLeft /></i> 
 //  <i><TbArrowBarRight /></i> 
 // <i><MbLogout/><i/>