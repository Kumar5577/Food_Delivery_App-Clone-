import { useDispatch } from "react-redux";
import { default_list_img, listImg_url } from "../utils/links";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({items})=>{
    // console.log(items.card.info.imageId);
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
     console.log(item)
      dispatch(addItem(item))
    }
    return (
      <div className="">
        <div className="flex justify-between m-2 p-2 border-2 border-orange-500 rounded-xl bg-gray-700 text-white">
            <h3>{items.card.info.name} - Rs.{" "}
                  {items.card.info.defaultPrice / 100 || items.card.info.price / 100}{" "}
                  </h3>
                  <br />{" "}
              
                  <div>
                  <button className="text-xs absolute w-[2.5rem] bg-black text-white border-2 border-orange-300 rounded-xl mt-10" onClick={()=>handleAddItem(items)}>Add+</button>
                    <img className="w-[5rem]" src={items.card.info.imageId ? listImg_url +items.card.info.imageId : default_list_img} alt="item_img"/>
                  
                  </div>
        </div>
        </div>
    )
}
export default ItemsList;