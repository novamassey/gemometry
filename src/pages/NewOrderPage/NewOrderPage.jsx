import {useRef, useEffect, useState} from "react";
import *  as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";


export default function NewOrderPage() {
    let orderItems;
    const [cart, setCart] = useState({})
    const isMounted = useRef(true);

    async function getOrder() {
        const cart = await ordersAPI.getCart()
        console.log(cart);
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
  
   


return (
    <>
    <div>{cart._id}</div>
    <br/>
    <div>{cart.totalQty}</div>
    <div>{cart.lineItems.map(lineItem =>
        <p>{lineItem.item.name}</p>
        )}</div>
    </>
)

}
