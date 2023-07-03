import useOnline from "../Common/useOnline";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import { fetchMenu } from "../Constant/Data";



const Offers= function(){

    const [restaurant,setRestaurant]=useState([]);

    useEffect(()=>{
      getData()
    },[])

    async function getData(){
        const data=await fetch(fetchMenu);
        const json=await data.json();
        setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };

    // IF USER IS OFFLINE
      let offline=useOnline();
      if(!offline){
return (
    <div  className="no-internet">
    <h1>You may want to check your internet connection once</h1>
   </div>
)
}
    return(
        <>
       <div className="offer-section">
        <div className="offers">
           <div className="offer-heading">
            <Link className="link" to='/'>Home</Link>
            <h1>Restaurants with great offers near me</h1>
            </div> 
            <div className="card-section">
               {restaurant.map((e,i)=><Cards key={i} resData={e?.data} />)}
            </div>
        </div>

       </div>
        </>
    )
};
export default Offers;