import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[menu,setMenu]=useState("shop")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link style={{"textDecoration":"none"}} to='/'><img src={logo} alt="" /></Link>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{"textDecoration":"none"}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("men")}}> <Link style={{"textDecoration":"none"}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{"textDecoration":"none"}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kid")}}><Link style={{"textDecoration":"none"}} to='/kid'>Kid</Link>{menu==="kid"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{"textDecoration":"none"}} to='/login'><button>Login</button></Link>
        <Link style={{"textDecoration":"none"}} to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar