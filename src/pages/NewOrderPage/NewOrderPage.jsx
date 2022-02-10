import {useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import *  as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import "./NewOrderPage.css"


export default function NewOrderPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useState({lineItems:[]})
    const isMounted = useRef(true);

    async function getOrder() {
        const cart = await ordersAPI.getCart()
        // console.log(cart);
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
    <>
    
    <div> 
    
    <div>Items in Cart:{cart.totalQty}</div>
    <div>{cart.lineItems.map(lineItem =>
        <>
        
        <p>{lineItem.item.name}</p>
        <br/>
        <button className="astext" onClick={() => changeQuantity(lineItem.item._id, lineItem.qty + 1)}>+</button>
        <p>{lineItem.qty}</p>
        <button className="astext" onClick={() => changeQuantity(lineItem.item._id, lineItem.qty - 1)}>-</button>
        <br/>
         <img src={`${lineItem.item.img_url_list}`}></img>
        </>
        )}</div>
        <button onClick={handleCheckout}>CHECKOUT</button>
        </div>
    </>
)

}
