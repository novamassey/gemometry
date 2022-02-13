import {checkToken} from '../../utilities/users-service';
import * as ordersAPI from '../../utilities/orders-api';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./OrderHistoryPage.css";

export default function OrderHistoryPage({user}){
  const[orderHistory, setOrderHistory] = useState([{lineItems:[]}])

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAll();
      setOrderHistory(orders);
    }
    getOrders();
  }, []);

  return (
    <>
      {orderHistory.length ?
      <>
        <h3 className="OrderGreeting">Hello {user.name.toUpperCase()}! Here are your recent orders, THANK YOU FOR SHOPPING WITH US!</h3>
        {orderHistory.map(orders => 
          <div className="OrderDetailsContainer">
            <div className="OrderText">
              <hr/>
              <p className="OrderReference">Reference No: {orders.orderId}</p>
              <p className="OrderQty">Quantity: {orders.totalQty}</p>
              <p className="OrderTotal">Total: $ {orders.orderTotal}</p>
            </div>
            {orders.lineItems.map(items =>
            <div className="OrderImage">
              <p>{items.item.name}</p>
              <img className="HistoryImage" src={`${items.item.img_url_list}`}></img> 
            </div>
        )}
        <hr/>
          </div>
      )}
      </>
      :  
      <>
      <div className="NoOrders">
        <h3>You do have any orders with us yet, click below to start shopping!</h3>
        <Link className="StartShopping"to="/">START SHOPPING</Link>
      </div>
      </> 
      } 
    </>    
  )
}