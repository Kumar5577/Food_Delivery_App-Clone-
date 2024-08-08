import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import cartSlice, { clearCart, removeItem } from "../utils/cartSlice";

const Cart = ()=>{
    
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    const handleDeleteItem = (item)=>{
        dispatch(removeItem({id:item}));
    }
    const cartItems = useSelector((store)=>store.cart.items)
    return(
        <div className="text-center">
            <h1 className="font-bold">Cart</h1>
            {cartItems.length===0 && (<p className="font-bold">Please Add Some Items to the Cart to make items visble here</p>)}
            <div className="flex flex-wrap flex-col w-6/12 m-auto">
            {cartItems.map((item,index)=>(
                <div className="flex justify-between" key={index}>
                <ItemsList className="w-9/12" items={item}/>
                <button className="text-[13px] w-[5rem] border-2  bg-orange-500 rounded-xl p-2 m-auto" onClick={()=>handleDeleteItem(item.card.info.id)}>clear</button>
                </div>
                
            ))}
            <div><button className="w-2/12 border-2 border-black bg-orange-500 rounded-xl p-2 m-2" onClick={handleClearCart}>Clear Cart</button></div>
            </div>

        
        </div>
    )
}
export default Cart;