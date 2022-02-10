
import MerchandiseListItem from "../../components/MerchandiseListItem/MerchandiseListItem";
import "../../utilities/send-request";
import{useState, useEffect, useRef} from "react"; 
import {useParams, useNavigate, Link} from "react-router-dom";  
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import "./MerchandiseDetail.css";

export default function MerchandiseDetailPage({user}) {

    const [itemSingle, setItemSingle] = useState();
    const [cart, setCart] = useState(null);
    const {id} = useParams();
    const isMounted = useRef(true);
    
    const navigate = useNavigate();

    async function getItem() {
        const itemOne = await itemsAPI.getById(id)
        console.log(itemOne);
        setItemSingle(itemOne);
    }

    async function handleAddToCart(itemId) {
        const cart =  await ordersAPI.addItemCart(itemId);
        setCart(cart);
        console.log(cart);
        navigate('/orders/cart');

    }

    async function getOrder() {
        const cart = await ordersAPI.getCart()
        console.log(cart);
        setCart(cart);
    }

    useEffect(function() {
         if(isMounted.current) {
        getItem();
         }
         return () =>{
            isMounted.current = false
         }
    }, []);
    <NewOrderPage item={itemSingle} cart={cart} getOrder={getOrder}/>
    
            return (
                <div>
                    <div className="MerchandiseDetailPage">
                        <div className="DetailText">

                        <h2>{itemSingle && itemSingle.name}</h2>
                        <p>{itemSingle && itemSingle.description}</p>
                        <h2>${itemSingle && itemSingle.price}</h2>
                        
                        </div>
                            <div className="DetailImage"><img src={itemSingle &&`${itemSingle.img_url_detail}`}></img></div>
                            { user ?
                            <button className="detailButton" onClick={()=>handleAddToCart(itemSingle._id)} >ADD TO  CART</button>
                            :
                         <Link to="/login">LOGIN/SIGN UP to ACCESS SHOPPING CART</Link> 
                            }
                        
                    </div>
                </div>
                   
                
            )
        }


    