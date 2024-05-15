import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import UserLayout from "../User/UserLayout";
import AdminHome from "../User/pages/Home";
import Cart from "../User/Components/cart/Cart";
import Wishlist from "../User/Components/wishlist/Wishlist";
import Viewall from "../User/view all/Viewall";
// import CardView from "../User/Components/cardview/CardView";
import Loads from '../User/Components/loading/Loads'
import Shopping from "../User/Components/shopping/Shopping";
import ViewCard from "../User/Components/cardview/ViewCard";
import BuyNowForm from "../User/Components/buynow/BuyNow";
import Orrde20 from "../User/Components/Orrde20/Orrde20.jsx"
 
function Routes() {

  const router = createBrowserRouter([
      {
        path: "/",
        element:
         <UserLayout/>,
      
        children:[
          {
            path:"/",
            element:<Loads/>
        },
        {
          path:'offer-20',
          element:<Orrde20/>
        },

          {
              path:'',
              element:<AdminHome/>
          },
          {
            path:'cart',
            element:<Cart/>
        },
        {
          path:'wishlist',
          element:<Wishlist/>
      },
      {
        path:'viewall',
        element:<Viewall/>
    },
    {
      path:'cardview/:id/:section',
      element:<ViewCard/>
  },
  {
    path:'shopping',
    element:<Shopping/>
},
{
  path:'buynow',
  element:<BuyNowForm/>
},
        ]
      },
    ]);

return (
  <RouterProvider  router={router} />
)
}

export default Routes
