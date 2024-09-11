import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../apis/StoreContext'

const Navbar = ({setLogin}) => {

    const [menu,setMenu] = useState(["Home","Menu","Mobile-app","Contact us"])
    const {getCartTotal} = useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to = '/'>
        
<img src = {assets.mern}   style={{height:"100px",width:"100px"}} alt=''className = 'logo'/>
        
        </Link>
<ul className= "navbar-menu">
    <a href = '/'className  ={menu === "Home"?"active":''}>Home</a>
    <a href = '#explore-menu' className ={menu === "Menu"?"active":''}>Menu</a>
    <a href = '#appdownload'className  ={menu ==="Mobile-app"?"active":''}>Mobile-app</a>
    <a  href = '#footer'className={menu === "Contact us"? "active":''}>Contact us</a>
</ul>
<div className="navbar-right">{}
    <img src = {assets.search_icon} alt = 'search' />
    <div className="navbar-search-icon">
        <Link to= '/cart' >
        <img src = {assets.cart_icon}  alt = 'basket_icon'/>
        
        </Link>
        <div className={getCartTotal()=== 0? '':"dot"}>
            </div> 
           
    </div>
    <button onClick={()=>{setLogin(true)}}>Sign in</button>
</div>


    </div>
  )
}

export default Navbar