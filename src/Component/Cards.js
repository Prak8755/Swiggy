import { resImage } from "../Constant/Data";

const Cards=function(props){
   const {resData}=props;

   const{name,avgRating,cloudinaryImageId,  cuisines,deliveryTime,costForTwoString }=resData;

    return(
        <>
         <div className="cards">
           <img className="card-img" src={resImage+cloudinaryImageId}/>
           <h3>{name}</h3>
           <p>{cuisines?.join(' ')} </p>
           <div className="res-info">
           {Number(avgRating)>=4?<div><i className="fa-solid fa-star green"></i> <span>{avgRating}</span></div>:<div><i className="fa-solid fa-star red"></i> <span>{avgRating}</span></div>}
            <p>{deliveryTime}</p>
            <p>{costForTwoString} </p>
           </div>
        </div>
        </>
    )
};

export default Cards;