

import { Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Order from './pages/Order'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/loginpop/LoginPopup'
function App() {

const [login, setLogin] = useState(false)
  return (

    <>
    {login?<LoginPopup setLogin = {setLogin}/>:<></>}
  <div className='app'>

    <Navbar  setLogin = {setLogin}/>

    <Routes>

      <Route path='/' element = { <Home/>}/>
      <Route path='/cart' element = { <Cart/>}/>
      <Route path='/order' element = { <Order/>}/>
    </Routes>

  </div>
  <Footer/>
  </>

  )
}

export default App
