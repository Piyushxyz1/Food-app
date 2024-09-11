import React, { useState } from 'react'
import "./Home.css"
import Header from '../components/header/Header'
import Exploremenu from '../components/exploremenu/Exploremenu'
import FoodDisplay from '../components/fooddisplay/FoodDisplay'
import AppDownload from '../components/appformobile/AppDownload'
const Home = () => {

    const [category,setCategory] = useState("All")
  return (
    <div>
<Header/>
<Exploremenu   category = {category}  setCategory = {setCategory}/>
<FoodDisplay  category = {category}/>
<AppDownload/>


    </div>
  )
}

export default Home