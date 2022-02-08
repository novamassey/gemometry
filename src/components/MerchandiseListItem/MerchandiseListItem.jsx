import "./MerchandiseListItem.css";
import {Link} from "react-router-dom";
import MerchandiseDetailPage from "../../pages/MerchandiseDetailPage/MerchandiseDetailPage";


export default function MerchandiseListItem({item}){
    
    return (
    <>
    {/* <div className ="imageCard">
        <Link to={`/items/${item._id}`}>
            <div>{item.name}</div>
        </Link>
        <div>${item.price}</div>
        <div className ="imageCard" style={{background: `url(${item.img_url_detail})`, backgroundSize: "cover"}}></div>
       
        
    </div> */}

     <div className ="imageCard" style={{background: `url(${item.img_url_detail})`, backgroundSize: "cover"}}>
        <Link to={`/items/${item._id}`}>
            <div className="image-title">{item.name} ${item.price}</div>
        </Link>
    </div>
       
        
    
    </>
    )
}