
const Cartshow=function(props){
const {name,img,price}=props.show;

    return (
        <>
         <div className="cart-details">
                    <div className="image-heading">
                        <img src={img}/>
                        <div className="inner-heading">
                            <h1>{name}</h1>
                            <p></p>
                        </div>
                    </div>
                    <h1>{price}</h1>
                </div>
        </>
    )
};

export default Cartshow;