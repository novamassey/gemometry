import {useRef, useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import *  as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import "./NewOrderPage.css"


export default function NewOrderPage({user}) {
    const navigate = useNavigate();
    const [cart, setCart] = useState({lineItems:[]})
    const isMounted = useRef(true);

    async function getOrder() {
        const cart = await ordersAPI.getCart()
        console.log(cart);
        setCart(cart);
     
    }
    
    async function changeQuantity(itemId, newQty) {
         const cart = await ordersAPI.setQty(itemId, newQty)
         console.log(cart)
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
      navigate('/orders/history')
     
  }     
   
  
    

   


return (

    <div>

     
    
            {cart.lineItems.map(lineItem =>
        <div>
            <p>{lineItem.item.name}</p>
            <br/>
            
            <button className="astext" onClick={() => changeQuantity(lineItem.item._id, lineItem.qty + 1)}>+</button>
            <p>{lineItem.qty}</p>
            <button className="astext" onClick={() => changeQuantity(lineItem.item._id, lineItem.qty - 1)}>-</button>
            <br/>
            <img src={`${lineItem.item.img_url_list}`}></img>
            <p>${lineItem.item.price}</p>
        </div>
            )}
            {cart.totalQty ?
        <div>
            <p>Items in Cart:{cart.totalQty}</p>
            {user ?
            <button onClick={handleCheckout}>CHECKOUT</button>
            :
            <Link to='/login'>LOGIN/SIGNUP TO CHECKOUT</Link>
            }
        </div>
            :
    
        <div>
            <h2>Your shopping cart is empty, click the link to start shopping!</h2>
            <Link to="/">START SHOPPING</Link>
        </div>
            }
    </div>       

)

}
