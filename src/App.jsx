import React, { useState } from 'react'

import Home from './Pages/Home/Home'
import Admin from './Pages/Admin/Admin'
import Product from './Pages/Product/Product'
import Login from './Pages/Login/Login'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Product' element={<Product/>}/> 
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Admin' element={<Admin/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
