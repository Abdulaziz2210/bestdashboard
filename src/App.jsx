// import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'
import Home from './Pages/Home/Home'
import Admin from './Pages/Admin/Admin'
import Product from './Pages/Product/Product'
import Login from './Pages/Login/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {
  const {toggle} = useSelector(state=>state.navbar)
  return (
    <div className='min-h-screen' >
      <Navbar/>
      <div className="grid grid-cols-8 w-full "> 
      {toggle && <SideBar/>}
    <main className={`${toggle ? 'col-span-6' : 'col-span-8'} w-full  px-4  `}>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Product' element={<Product/>}/> 
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Admin' element={<Admin/>}/>
     </Routes>
     </main>  
     </div>
    </div>
  )
}

export default App
