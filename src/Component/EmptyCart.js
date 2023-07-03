 import { Link } from "react-router-dom"
 import { Empty } from "../Constant/Data";





 const EmptyCard=function(){
    return(
        <>
        <div className="empty-cart-section"> 
        <div className="empty-cart">
            <img src={Empty}/>
        <h1>Your cart is empty now</h1>
        <p>You can go back to menu section to browse more restaurants</p>
        <Link to='/' className="Link">Back to menu</Link>  
        </div>
        
        </div>
       
        </>
    )
};

export default EmptyCard;

