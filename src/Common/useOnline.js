import { useEffect, useState } from "react"

const useOnline=function(){

    const [isOnline,setIsOnline]=useState(true);

    useEffect(()=>{
    function showOnline(){
    setIsOnline(true);
    }
    function showOffline(){
    setIsOnline(false);
    }
    
        window.addEventListener('online',showOnline);
        window.addEventListener('offline',showOffline);

       return(function(){
        window.removeEventListener('online',showOnline);
        window.removeEventListener('offline',showOffline);
       })

    });
    return isOnline;
};

export default useOnline;