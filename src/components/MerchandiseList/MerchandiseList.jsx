import MerchandiseListItem from "../MerchandiseListItem/MerchandiseListItem";


export default function MerchandiseList({merchItems}){
    const itemsFromDB = merchItems.map(item =>
        <MerchandiseListItem key={item._id} item={item}/>
    );
    return (
        <main>
            {itemsFromDB}
        </main>
    );
        
}

