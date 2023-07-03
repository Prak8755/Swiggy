export const Shimmer=function(){
    return(
        
        <>
        <div className="first-shimmer"></div>
        <div className="shimmer">
            {Array(15).fill('').map((e,i)=>(<div key ={i} className="shimmer-cards"></div>))}
        </div>
        </>
    )
};


