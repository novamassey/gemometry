import {checkToken} from '../../utilities/users-service';
import * as ordersAPI from '../../utilities/orders-api';
import { useState, useEffect } from "react";
import "./OrderHistoryPage.css";

export default function OrderHistoryPage({user}){
    const[orderHistory, setOrderHistory] = useState([{lineItems:[]}])

    useEffect(function() {
        async function getOrders() {
            const orders = await ordersAPI.getAll()
            console.log(orders);
            setOrderHistory(orders);
            console.log("OrderHistoryPage:", orders)
    }
    getOrders();
}   , []);

    return (
    
        <>
        <h3 className="greeting">Hello {user.name.toUpperCase()}! Here are your recent orders, THANK YOU FOR SHOPPING WITH US!</h3>
        {orderHistory.map(orders => 
        <div>
        <p className="reference">Reference No: {orders.orderId}</p>
        <p className="qty">Quantity: {orders.totalQty}</p>
        <p className="total">Total: $ {orders.orderTotal}</p>
        {orders.lineItems.map(items =>
        <img className="history-image" src={`${items.item.img_url_list}`}></img> 
            )}
        </div>
        )}
        </>
        
        
    )
}