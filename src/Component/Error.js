import { ErrorImage } from "../Constant/Data";

const Error =function(){
    return (
        <>
       <div className="error-section">
        <div className="error-page">
        <img alt='oops' src={ErrorImage}/>
        <h1>Oops... Page Not Found</h1>
        </div>
       </div>
        </>
    )
};

export default Error;