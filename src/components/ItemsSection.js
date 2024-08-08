
import ItemsList from "./ItemsList";
import { useState } from "react";

const ItemsSection = ({items})=>{
    const [showItems,setShowItems] = useState(false)
    const handleclick = ()=>{
        setShowItems(!showItems)
    }
    return(
        
        <div className="">
            <div className="w-[30rem] m-2 p-2 border-orange-500 rounded-lg border-4">
            <div className=" flex justify-between cursor-pointer m-2 p-2 -4" onClick={handleclick}>
            <h2 className="font-bold">{items.card?.card?.title} ({items.card?.card?.itemCards.length})</h2>
            <h2>⬇️</h2>
            </div>
            <div>
                {items?.card?.card?.itemCards?.map((item)=>(
                    (showItems && <ItemsList key={item.card.info.id} items={item} />)
                ))}
            </div>
            </div>
        </div>
    )
}
export default ItemsSection;