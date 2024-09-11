import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { toast } from "react-toastify";

export const StoreContext = createContext(null)



 const StoreContextProvider = (props) =>{


    const [cartItems,setCartItems] = useState({})



    
const getCartTotal = ()=>{

    let totalamount = 0;


   

        for(const item in cartItems){
            if(cartItems[item]>0){
            let iteminfo = food_list.find((prod)=>prod._id === item)
            totalamount +=   iteminfo.price* cartItems[item]
        }

    }
return totalamount

    
}

    const addToCart = (itemId)=>{
if(!cartItems[itemId]){

    setCartItems((prev)=>({...prev,[itemId]:1}))
    toast.success("item added to cart")
   
    

}
else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] +1}))
    
}
    }

    const removefromCart =(itemId)=>{

        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] -1}))
    }

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removefromCart,
        getCartTotal
        
        }



return (

    <StoreContext.Provider value = {contextValue}>

        {props.children}
    </StoreContext.Provider>
)

}

export default  StoreContextProvider