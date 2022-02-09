import {checkToken} from '../../utilities/users-service';
import * as ordersAPI from '../../utilities/orders-api';
import { useState, useEffect } from "react";

export default function OrderHistoryPage(){
    const[orderHistory, setOrderHistory] = useState([{}])

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
    
    <div>
        <h1>orderHistory</h1>
        
    </div>
    )
}