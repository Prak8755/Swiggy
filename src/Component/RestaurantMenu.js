import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resImage } from "../Constant/Data";
import useRestaurantMenu from "../Common/useRestaurantMenu";
import MenuDetails from "./MenuDetails";

const data=[
    {
        name:'Chole Bhature',
        id:'123456',
        img:'https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg',
        price:'200 FOR ONE'
    },
    {
        name:'Parontha',
        id:'123450',
        img:'https://foodess.com/wp-content/uploads/2009/12/MTMxNTk1Njc5OTkzNzMxNTUw.jpg',
        price:'150 FOR ONE'
    },
    {
        name:'Dahi bada',
        id:'123459',
        img:'https://static.toiimg.com/thumb/55432577.cms?imgsize=240828&width=800&height=800',
        price:'180 FOR ONE'
    },
    {
        name:'GulabJamun',
        id:'123451',
        img:'https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800',
        price:'200 FOR TWO'
    },
    {
        name:'Momos with chutney',
        id:'123406',
        img:'https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg',
        price:'200 FOR FOUR'
    },
    {
        name:'Chicken sandwich',
        id:'123956',
        img:'https://hips.hearstapps.com/hmg-prod/images/delish-211105-popeyes-chicken-sandwich-001-ab-web-1637207425.jpg?crop=0.510xw:0.760xh;0.236xw,0.158xh&resize=1200:*',
        price:'200 FOR ONE'
    },
    {
        name:'Burger king',
        id:'121456',
        img:'https://assets.cntraveller.in/photos/6246f468c579dd6f2d1244b6/4:3/w_2120,h_1590,c_limit/Best%20Burgers%20in%20Mumbai%20_Louis%20Monstercheese%20Burger.jpg',
        price:'400 FOR ONE'
    },
    {
        name:'Chicken gravey',
        id:'173456',
        img:'https://4.bp.blogspot.com/-ZVLJ_2NNiwM/WFRrZhJ5EzI/AAAAAAAACEE/EMH3HGIYos0YYA8vwk76oXucuwoJGgLQACLcB/s1600/Chicken%2BGravy%2BRecipe.jpg',
        price:'200 FOR ONE'
    },
    {
        name:'Biryani with chutney',
        id:'103456',
        img:'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg',
        price:'150 FOR ONE'
    },
    {
        name:'kadi chawal',
        id:'1233296',
        img:'https://5.imimg.com/data5/QL/IT/NH/ANDROID-105679371/product-jpeg.jpg',
        price:'200 FOR ONE'
    }
]
const RestaurantMenu=function(){
    const {id}=useParams();

   const restaurantMenu=useRestaurantMenu(id);
    return(
        <>
        <div className="res-section">
             <div className='res-top-section'>
                <div className="res-top-left">
                    <h2>{restaurantMenu?.name}</h2>
                    <p>{restaurantMenu?.cuisines.join(' ')}</p>
                    <p>{restaurantMenu?.areaName}</p>
                    <p>{restaurantMenu?.costForTwoMessage}</p>
                </div>
                <div className="res-top-right">
                    <img src={resImage+restaurantMenu?.cloudinaryImageId}/>
                <h3>{restaurantMenu?.avgRating} <i className="fa-solid fa-star"></i></h3>
                <p>1K+ Ratings </p>
                </div>
             </div>

             <div className="res-menu-section">
                <h1>Welcome to Restaurant Menu</h1>
              {data.map(e=> <MenuDetails key={e.id} data={e}/> )}

             </div>
        </div>
        </>
    )
       
        
       
};
export default RestaurantMenu;