import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { StoreContext } from "../apis/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removefromCart,getCartTotal } = useContext(StoreContext);

  const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0 ) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>₹ {item.price}/-</p>
                  <p>{cartItems[item._id]}</p>
                  <p> ₹ {item.price * cartItems[item._id]}/-</p>
                  <p onClick={()=>{removefromCart(item._id)}} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-details">
              <p>SubTotal</p>
              <p>₹{getCartTotal()}</p>
            </div>
            <hr/>
            <div className="cart-details">
              <p>Delivery Fee</p>
              <p>₹{2}</p>
            </div>
            <hr/>
            <div className="cart-details">
              <b>TOTAL</b>
              
              <b>₹{getCartTotal() +2}/-</b>

            </div>
            <hr/>
            </div>

            <button onClick={()=>{navigate('/order')}}>Proceed to Checkout</button>
          </div>
          <div className="cart-promo-code">
            <div>
              <p>Enter the promo code here</p>
            <div className="cart-promo-code-input">
              <input type = "text" placeholder="promo code "/>
              <button>Submit</button>
            </div>
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Cart;

