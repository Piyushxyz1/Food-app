import React, { useContext } from 'react'
import "./Displayfood.css"
import { StoreContext } from '../../apis/StoreContext'
import FoodItem from '../fooditem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)



  return (
    <div className='food-display' id = "fooddisplay">
        <h2>Top dishes for you</h2>
<div className='food-display-list'>

    {food_list.map((item,index)=>{

        if(category=== "All" || category === item.category)

            {
                return (
                    <FoodItem   key ={index}  id = {item._id} name= {item.name} price={item.price} description = {item.description}  image = {item.image} />
                )

            }

    })}
</div>

    </div>
  )
}

export default FoodDisplay