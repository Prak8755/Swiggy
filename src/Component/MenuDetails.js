import { useDispatch } from "react-redux";

import { addItems } from "../Common/CartSlice";


const MenuDetails=function(props){
    const {data}=props;
   const {name,img,price}=props.data;

   const dispatch=useDispatch();

   function add(){
    dispatch(addItems(data))
   }
    return (
        <>
         <div className="res-menu-order">
                    <div className="res-menu-items">
                        <h2>{name}</h2>
                        <p>{price}</p>
                    </div>
                    <div className="res-menu-add">
                        <img src={img}/>
                        <button onClick={()=>add()}>Add</button>
                    </div>
                </div>
        </>
    )
};

export default MenuDetails;