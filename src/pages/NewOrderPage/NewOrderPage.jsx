import {useRef, useEffect, useState} from "react";
import *  as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";


export default function NewOrderPage() {
    let orderItems;
    const [cart, setCart] = useState([])
    // const [lineItems, setLineItems] = useState({})
    const isMounted = useRef(true);

    async function getOrder() {
        const cart = await ordersAPI.getCart()
        // console.log(cart);
        setCart(cart);
        // setLineItems(cart.lineItems);
        // console.log(lineItems);
    }

    useEffect(function() {
        if(isMounted.current) {
       getOrder();
    //    itemFromOrders();
    }
    return () =>{
        isMounted.current = false
    }
   }, []);
  
   

//     let items = []
//     items = cart.lineItems
//    console.log(items);
//    const itemFromOrders =items.map(i => {
//       <>
//     <div>
//         {i.qty}
//     </div>
    {/* <div>{i.name}</div> */}
//        </>
// })
// async function itemFromOrders() {
//     let items = await cart.lineItems
//      orderItems = items.map(i =>{
//     <div>

//         <div>{i.qty}</div>
//         </div>
//      })
// } 
return (
    <>
    <div>{cart._id}</div>
    <br/>
    <div>{cart.totalQty}</div>
    {/* <div>{cart.lineItems}</div> */}
    </>
)

}
// return (
//     <>
//     {async function itemFromOrders() {
//         let items = await cart.lineItems
//         orderItems = items.map(i =>{
//             <div>
    
//             <div>{i.qty}</div>
//             </div>
//          })}
//         }    
//         {itemFromOrders()}
//         </>
//     ) 
// }

// return (
//     <div>
//     {orderItems}
//  </div>
// ) 
// }