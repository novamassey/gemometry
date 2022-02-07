
import MerchandiseListItem from "../../components/MerchandiseListItem/MerchandiseListItem";
import "../../utilities/send-request";
import{useState, useEffect} from "react"; 
import {useParams} from "react-router-dom";  
import * as itemsAPI from "../../utilities/items-api";

export default function MerchandiseDetailPage() {
    // console.log("MerchandiseDetail Page; ", item)
    const [itemSingle, setItemSingle] = useState();
    const {id} = useParams();

    useEffect(function() {
        async function getItem() {
            const itemOne = await itemsAPI.getById(id)
            console.log(itemOne);
            setItemSingle(itemOne);
        }
        getItem();
    }, []);
    
    return (
        <div>
            <h1>Detail page</h1>
            {itemSingle.name}
        </div>
    )
}