import {useState, useEffect} from 'react';
import * as itemsAPI from '../../utilities/items-api';
import MerchandiseList from "../../components/MerchandiseList/MerchandiseList";

export default function MerchandisePage({user}) {
    const[merchItems, setMerchItems] = useState([{}]);

     useEffect(function() {
        async function getItems() {
          const items = await itemsAPI.getAll();
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