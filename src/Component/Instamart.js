import { useState } from "react";
import useOnline from "../Common/useOnline";







const Section=function({title,description}){
const [isVisible,setIsVisible]=useState();



    return (
<>
<div className="instamart-one">
    <h1>{   title}</h1>
    <div>
   { !isVisible? <button className="btn-show" onClick={function(){setIsVisible(true)}}><i className="fa-solid fa-plus"></i></button>:
    <button className="btn-show" onClick={function(){setIsVisible(false)}}><i className="fa-solid fa-minus"></i></button>}
    </div>
    
</div>

{ isVisible && <p className="insta-show">{description}</p>}
</>
    )
}


const Instamart= function(){
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
        <div className="instamart">
        <h1>Hello welcome to Instamart section</h1>
        <Section title='Pricing Plan' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'/>
        <Section title='How to order' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'/>
        <Section title='Order Process' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'/>
        <Section title='User guidelines' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'/>

        </div>
        
        </>
    )
};
export default Instamart;