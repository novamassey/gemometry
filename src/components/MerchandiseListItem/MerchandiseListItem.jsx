import "./MerchandiseListItem.css";
import {Link} from "react-router-dom";

export default function MerchandiseListItem({item, key}){
    console.log(item);
    return (
    <>
    <div className ="imageCard">
        <Link to={`/items/${item._id}`}>
            <div>{item.name}</div>
        </Link>
        <div>${item.price}</div>
        <div className ="imageCard" style={{background: `url(${item.img_url_detail})`, backgroundSize: "cover"}}></div>
    </div>
    </>
    )
}