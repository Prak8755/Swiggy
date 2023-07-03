import { Component } from "react";
import { RestaurantNotFound } from "../Constant/Data";
const Data=()=>{
    return (
        <>
        <div className="no-restaurant">
            <img src={RestaurantNotFound}/>
        </div>
        </>
    )
}
export default Data;