import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup';
import Footer from './Component/Footer/Footer'
import men_banner from './assets/banner_mens.png'
import kid_banner from './assets/banner_kids.png'
import women_banner from './assets/banner_women.png'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='women' element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid"/>} />
        <Route path='/product' element={<Product/>} />
        <Route path=':productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App