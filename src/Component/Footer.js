import NoInternet from "../Common/NoInternet";
import useOnline from "../Common/useOnline";


const Footer=function(){

    let offline=useOnline();
    if(!offline){
    return (
       <div >
        
       </div>
    )
    }
    return(
        <>
       <div className="footer-section">
        <div className='footer'>
           <div className="first-row footer-list ">
            <ul>
                <h1>Company</h1>
                <li>Carrers</li>
                <li>Team</li>
                <li>Food Blog</li>
                <li>Fresh Food</li>
                <li>Nature Food</li>
                <li>Fresh Food</li>
                <li>Food instamart</li>
                <li>Cart Blog's</li>
            </ul>
           </div>
           <div className="first-row footer-list">
            <ul>
                <h1>Help</h1>
                <li>Support</li>
                <li>Complain</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
                
            </ul>
           </div>
           <div className="second-row footer-list">
            <ul>
                <h1>Terms and conditions</h1>
                <li>Refund</li>
                <li>Cancelation</li>
                <li>Cookie</li>
                <li>Fraud Details</li>
                <li>Pricing</li>
                <li>Login issue</li>
                <li>Privacy and Policy</li>
                <li>Offer Terms</li>
            </ul>
           </div>
          
        </div>
        <div className="footer-btns">
            <div className="app-btn">
            <button><i class="fa-brands fa-apple"></i>  &emsp; Download from App store</button>
            <button><i class="fa-brands fa-google-play"> </i>&emsp; Download from Play store</button>
            </div>
         </div>
       </div>
        
        </>
    )
};
export default Footer; 