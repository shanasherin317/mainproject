import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import UserLayout from "../User/UserLayout";
import AdminHome from "../User/pages/Home";
import Cart from "../User/Components/cart/Cart";
import Wishlist from "../User/Components/wishlist/Wishlist";
import Viewall from "../User/view all/Viewall";
import CardView from "../User/Components/cardview/CardView";
import Loads from '../User/Components/loading/Loads'
  
 
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
      path:'cardview',
      element:<CardView/>
  }
        ]
      },
    ]);

return (
  <RouterProvider router={router} />
)
}

export default Routes
