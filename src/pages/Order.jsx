import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../apis/StoreContext'

const Order = () => {

  const {getCartTotal} =  useContext(StoreContext)
  return (
    <form className='my-orders-checkout'>
      <div className="order-left">

        <p className='title'>
          Delivery Details
        </p>
        <div className="fields">
          <input type="text"  placeholder='firstname'/>
          <input type="text" placeholder='lastname' />
        </div>
        <input type="email" placeholder='your email' />
        <input type="text" placeholder='Street adress'/>
        <div className="fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State' />
        </div>
        <div className="fields">
          <input type="text" placeholder='Pin-code'/>
       
        </div>
        <input type = "text" placeholder = "phone"/>

      </div>
      <div className="order-right">
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
              
              <b>₹{getCartTotal()=== 0? 0:getCartTotal() +2}/-</b>

            </div>
            <hr/>
            </div>

            <button onClick={()=>{}}>Proceed to Payment</button>
          </div>
      </div>

    </form>
  )
}

export default Order