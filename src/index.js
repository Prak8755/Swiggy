import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Component/Header';
import Body from './Component/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Component/Error';
import Offers from './Component/Offers';
import Cart from './Component/Cart';
import Instamart from './Component/Instamart';
import RestaurantMenu from './Component/RestaurantMenu';
import { Provider } from 'react-redux';
import Store from './Common/Store';
import Footer from './Component/Footer';

const root=ReactDOM.createRoot(document.getElementById('root'));

const App=function(){
    return(
        <>
        <Provider store={Store}>
        <Header/>
        <Outlet/>
        <Footer/>
        </Provider> 
        </>
    )
};

const AppLayout=createBrowserRouter([
    {
  path:'/',
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
        path:'/offer',
        element:<Offers/>
    },
    {
        path:'/cart',
        element:<Cart/>
    },
    {
        path:'/instamart',
        element:<Instamart/>
    },
    {
        path:'/',
        element:<Body/>
    },
    {
        path:'/restaurant/:id',
        element:<RestaurantMenu/>
    },
    

  ]
}
]);


root.render(<RouterProvider router={AppLayout}/>)
