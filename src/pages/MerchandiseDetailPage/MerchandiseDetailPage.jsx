
import MerchandiseListItem from "../../components/MerchandiseListItem/MerchandiseListItem";
import "../../utilities/send-request";
import{useState, useEffect, useRef} from "react"; 
import {useParams, useNavigate} from "react-router-dom";  
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";

export default function MerchandiseDetailPage() {

    const [itemSingle, setItemSingle] = useState();
    const[cart, setCart] = useState(null);
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
        navigate('/orders/new');

    }

    useEffect(function() {
         if(isMounted.current) {
        getItem();
         }
         return () =>{
            isMounted.current = false
         }
    }, []);
            // console.log("Item Single", itemSingle)
            return (
                <div>
                    <h2>{itemSingle && itemSingle.name}</h2>
                    <p>{itemSingle && itemSingle.description}</p>
                    <h2>${itemSingle && itemSingle.price}</h2>
                    <div><img src="{`${itemSingle.img_url_detail}` || itemSingle}"></img></div>
                    <button onClick={handleAddToCart}>ADD TO  CART</button>
                </div>
                
            )
        }


    