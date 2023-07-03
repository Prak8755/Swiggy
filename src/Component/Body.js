import { useEffect, useState } from "react";
import NoInternet from "../Common/NoInternet";
import { Shimmer } from "./Shimmer";
import Cards from "./Cards";
import Carousel from "./Carousel";
import { fetchMenu } from "../Constant/Data";
import { Link } from "react-router-dom";
import useOnline from "../Common/useOnline";

import NoRestaurantFound from "./NoRestaurantFound";

let restaurantData,setRestaurantData;
let allRestaurant,setAllRestaurant;



export const InputField=function(){
    const [searchInput,setSearchInput]=useState('');

    function searchRestaurant(){
        setRestaurantData(allRestaurant?.filter(e=>e?.data?.name.toLowerCase().includes( searchInput.toLowerCase()))) 

    }
    return(
        <>
         <input type='text' className="input-field" value={searchInput} onChange={function(e){
             setSearchInput(e?.target?.value);
             if(e?.target?.value===''){
                setRestaurantData(allRestaurant);
                
             }
             
            }} onKeyPress={function(e){
                if(e?.key==='Enter'){
                    searchRestaurant();
                }
            }} />
            <button className="btn btn-search" onClick={function(){
            searchRestaurant();
            }}>Search</button>
        </>
    )
}

const Body =function(){
    [restaurantData,setRestaurantData]=useState([]);
   [allRestaurant,setAllRestaurant]=useState([]);

    useEffect(()=>{
        getData();
    },[])

    async function getData(){
        const data=await fetch(fetchMenu);
        const json=await data.json();
        setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };

    //For internet connection offline and online

    let offline=useOnline();
    if(!offline){
    return (
       <div >
        <NoInternet/>
       </div>
    )
    }

    return (allRestaurant.length===0)?<Shimmer/>:(
         <>
        <Carousel/>
        <div className="body-section">
       <div className="card-section">
     { restaurantData.length===0?<NoRestaurantFound/>: restaurantData?.map(e=><Link className="res-list" to={'/restaurant/'+e?.data?.id} key={e?.data?.id}><Cards resData={e?.data} /></Link>)}

       </div>
     
        </div>
        </>
    )
};

export default Body;