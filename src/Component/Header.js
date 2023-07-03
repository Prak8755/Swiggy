import { useState } from "react";
import { InputField } from './Body';
import { Link } from "react-router-dom";
import { HeaderLogo, internetNull } from "../Constant/Data";
import useOnline from "../Common/useOnline";


import { useSelector } from "react-redux";




const Header=function(){

    const cartItems=useSelector(s=>(s.cart.items))

    let offline=useOnline();

    console.log(offline)
    if(!offline){
    return (
       <div >
    
       </div>
    )
    }



    return(
        <>
        <div className="header">
        <div className="header-section">
       <a href=''><img className="header-logo" src={HeaderLogo}/></a> 
       <div className="header-links">
        <ul className="header-list">
            <Link  to='/' className="list list-items">Home</Link>
            <Link  to='/offer' className="list list-items">Offers</Link>
            <Link  to='/instamart' className="list list-items">Instamart</Link>
            <Link  to='/cart' className="list list-items">Cart {cartItems.length }</Link>
           <InputField/>
        
        </ul>
        </div>
        </div>
        </div>
        </>
    )

    
};

export default Header;