import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import UserLayout from "../User/UserLayout";
import AdminHome from "../User/pages/Home";
import Cart from "../User/Components/cart/Cart";
import Wishlist from "../User/Components/wishlist/Wishlist";
  
 
function Routes() {

  const router = createBrowserRouter([
      {
        path: "/",
        element:
         <UserLayout/>,
      
        children:[
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
      }
        ]
      },
    ]);

return (
  <RouterProvider router={router} />
)
}

export default Routes
