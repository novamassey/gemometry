import {useRef, useEffect, useState} from "react";
import *  as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";

export default function NewOrderPage(){
    const [cart, setCart] = useState([])
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
        <div>
            <h1>New Order Page</h1>
            <h2>{cart &&  cart.id}</h2>

        </div>
    ) 
}