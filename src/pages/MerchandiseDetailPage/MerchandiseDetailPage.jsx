
import MerchandiseListItem from "../../components/MerchandiseListItem/MerchandiseListItem";
import "../../utilities/send-request";
import{useState, useEffect, useRef} from "react"; 
import {useParams} from "react-router-dom";  
import * as itemsAPI from "../../utilities/items-api";

export default function MerchandiseDetailPage() {
    const [itemSingle, setItemSingle] = useState();
    const {id} = useParams();
    const isMounted = useRef(true);

    async function getItem() {
        const itemOne = await itemsAPI.getById(id)
        console.log(itemOne);
        setItemSingle(itemOne);
    }

    useEffect(function() {
         if(isMounted.current) {
        getItem();
         }
         return () =>{
            isMounted.current = false
         }
    }, []);
            console.log("Item Single", itemSingle)
            return (
                <div>
                    <h2>{itemSingle && itemSingle.name}</h2>
                    <p>{itemSingle && itemSingle.description}</p>
                    <h2>${itemSingle && itemSingle.price}</h2>
                </div>
                
            )
        }


    // useEffect(function() {
    //     async function getItem() {
    //         const itemOne = await itemsAPI.getById(id)
    //         console.log(itemOne);
    //         setItemSingle(itemOne);
    //     }
    //     getItem();
//     // }, []);
//     console.log("Item Single", itemSingle)

//     return (
//         <div>
//             <h1>Detail page</h1>
//             {/* {itemSingle.name} */}
//         </div>
//     )
// }