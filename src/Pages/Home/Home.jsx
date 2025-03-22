import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
   const [isAuth,setIsAuth] = useState(false)
   const Navigate = useNavigate()

   useEffect(()=>{
    if(!isAuth){
      Navigate('/login')
    }
   },[])
  return (
    <div>
      Home
    </div>
  )
}

export default Home
