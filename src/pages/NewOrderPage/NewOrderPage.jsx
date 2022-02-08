import {useRef, useEffect, useState} from "react";
import *  as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";


export default function NewOrderPage() {
    let orderItems;
    const [cart, setCart] = useState({lineItems:[]})
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
    <div></div>
    <br/>
    <div>Items in Cart:{cart.totalQty}</div>
    <div>{cart.lineItems.map(lineItem =>
        <>
        <p>{lineItem.item.name}</p>
        <p>{lineItem.item.qty}</p>
         <img src={`${lineItem.item.img_url_list}`}></img>
        <button>REMOVE</button>
        </>
        )}</div>
    </>
)

}
