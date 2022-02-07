import {useState, useEffect} from 'react';
import * as itemsAPI from '../../utilities/items-api';
import MerchandiseList from "../../components/MerchandiseList/MerchandiseList";
import axios from "axios";

export default function MerchandisePage() {
    const[merchItems, setMerchItems] = useState([]);

 

    

   

     useEffect(function() {
        async function getItems() {
          let items = await itemsAPI.getAll()
          console.log(items);
          setMerchItems(items);
          }
          getItems();
        }, []);

    return (
      <div>
        <MerchandiseList merchItems={merchItems}/>
      </div>
    );
}