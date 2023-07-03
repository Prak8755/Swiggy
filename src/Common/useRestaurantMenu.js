import {useState,useEffect} from 'react'

const useRestaurantMenu=function(id){

    const [restaurantMenu,setRestaurantMenu]=useState();

    useEffect(()=>{
        getData()
    },[]);

    async function getData(){
   const data=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId='+id);
   const json=await data.json();
setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info);
    };

    return restaurantMenu;
};
export default useRestaurantMenu;