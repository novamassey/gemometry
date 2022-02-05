import "./MerchandiseListItem.css";

export default function MerchandiseListItem({item}){
    return (
    <>
    <h1>Merch List Item</h1>
    <div>{item.name}</div>
    <div>{item.description}</div>
    </>
    )
}