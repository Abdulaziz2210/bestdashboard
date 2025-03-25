import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeadLine from '../../components/HeadLine/HeadLine'

const Home = () => {
   const [isAuth,setIsAuth] = useState(true)
   const Navigate = useNavigate()

   useEffect(()=>{
    if(!isAuth){
      Navigate('/login')
    }
   },[])
  return (
    <div>
      <HeadLine title="Welcome To TopSpeed DashBoard" description="Hey This WebSite Was Created By A World's Youngest Billonnaire. Use The Navigation Menu To Access Different Sections"/>
    </div>
  )
}

export default Home
