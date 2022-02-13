import {useRef, useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import *  as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import "./NewOrderPage.css"


export default function NewOrderPage({user}) {
  const navigate = useNavigate();
  const [cart, setCart] = useState({lineItems:[]});
  const isMounted = useRef(true);

  async function getOrder() {
    const cart = await ordersAPI.getCart();
    setCart(cart);
  }
    
  async function changeQuantity(itemId, newQty) {
    const cart = await ordersAPI.setQty(itemId, newQty);
    setCart(cart);
  }
    
  useEffect(function() {
    if(isMounted.current) {
      getOrder();
    }
    return () =>{
      isMounted.current = false
    }
  }, []);

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders/history');
  }     
   
  return (
  <>
    <>
    {cart.lineItems.map(lineItem =>
      <div className="CartItems">
        <p className="CartItemName">{lineItem.item.name}</p>
        <br/>
        <div className="CartQty">
          <button className="astext plus" onClick={() => changeQuantity(lineItem.item._id, lineItem.qty + 1)}>+</button>
          <p>{lineItem.qty}</p>
          <button className="astext minus" onClick={() => changeQuantity(lineItem.item._id, lineItem.qty - 1)}>-</button>
        </div>
        <br/>
        <img className="CartItemImage" src={`${lineItem.item.img_url_list}`}></img>
        <p className="CartItemPrice">${lineItem.item.price}</p>
        <p className="CartItemQty">Items in Cart: {lineItem.qty}</p>
      </div>
    )}
    </>
    <>
    {cart.lineItems.length ?
      <div className="CheckoutDiv">
        <Link className="ContShoppingLink" to="/">CONTINUE SHOPPING</Link>
        <br/>
        <button className="CartCheckoutButton" onClick={handleCheckout}>CHECKOUT</button>
      </div>
    : 
    <div>
      <h2 className="CartItems">Your shopping cart is empty, click the link to start shopping!</h2>
      <br />
      <Link className="ShoppingLink" to="/">START SHOPPING</Link>
    </div>
    }
                 
  </>  
</>
  )
}
            
