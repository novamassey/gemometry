import {useState, useEffect} from 'react';
import * as itemsAPI from '../../utilities/items-api';
import MerchandiseList from "../../components/MerchandiseList/MerchandiseList";
import "./MerchandisePage.css";

export default function MerchandisePage() {
    const[merchItems, setMerchItems] = useState([]);

 

    

   

     useEffect(function() {
        async function getItems() {
          let items = await itemsAPI.getAll()
          setMerchItems(items);
          }
          getItems();
        }, []);

    return (
      <div className="MerchandisePage">
      
          <MerchandiseList merchItems={merchItems}/>
      
      </div>
    );
}