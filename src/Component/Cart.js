import { useDispatch, useSelector } from "react-redux";
import useOnline from "../Common/useOnline";
import Cartshow from './Cartshow';
import EmptyCard from "./EmptyCart";
import { clearCart, removeItems } from "../Common/CartSlice";



const Cart= function(){

    let offline=useOnline();
if(!offline){
return (
   <div  className="no-internet">
    <h1>You may want to check your internet connection once</h1>
   </div>
)
};

const cartItems=useSelector(s=>s.cart.items);

const dispatch=useDispatch();

 function  deleteItems(){
dispatch(removeItems())
 };

 function  clearItems(){
    dispatch(clearCart())
     }

    return(cartItems.length===0)?<EmptyCard/>:(
        <>
        <div className="cart-section">
            <div className='cart-heading'>
            <h1>Hello welcome to Cart section.</h1>
            </div>
            <div className="cart-info">
              {cartItems.map((e,i)=><Cartshow key={i} show={e}/>)}
            </div>
            <div className='cart-button'>
                <button onClick={()=>deleteItems()}>Remove Items</button>
                <button onClick={()=>clearItems()} > Clear Cart </button>
            </div>
        </div>
        
        </>
    )
};
export default Cart;