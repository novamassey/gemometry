import "./MerchandiseListItem.css";
import {Link} from "react-router-dom";
import MerchandiseDetailPage from "../../pages/MerchandiseDetailPage/MerchandiseDetailPage";


export default function MerchandiseListItem({item}){
    
    return (
    <>
   

     <div className ="imageCard" id="imageID" style={{background: `url(${item.img_url_list})`, backgroundSize: "cover"}}>
        <Link to={`/items/${item._id}`}>
            <div className="image-title">{item.name} ${item.price}</div>
        </Link>
        
    </div>
       
      
    
    </>
    )
}