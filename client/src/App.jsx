import Routes from "./Routes/Routes"
import "./App.css";
import { createContext, useState } from 'react';
import { successToast } from './User/toastify/index';


export const AppContext= createContext();
function App() {

  const[cart,setCart]=useState([]);
  const[wishlist,setWishlist]=useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      let cartProduct = prevCart.find((cartItem) => item.name === cartItem.name);
      if (!cartProduct) {
        return [...prevCart, { ...item, count: 1 }];
      } else {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        ); 
      }
    });
    successToast("Your Product is Added to Cart")
  };

  const removeClick=(item)=>{
    const updatedCart = cart.filter((cartItem) => cartItem.name !== item.name);
    setCart(updatedCart);
      console.log(item,'item');
      successToast("Your Product is Removed from Cart")
  }

  const handleOnAdd = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (item.name === cartItem.name) {
        return { ...cartItem, count: cartItem.count + 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const handleOnRemove = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (item.name === cartItem.name && cartItem.count > 0) {
        return { ...cartItem, count: cartItem.count - 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };
  

  const wishListClick = (item) => {
    setWishlist((prevWishlist) => {
        const existingItemIndex = prevWishlist.findIndex(wishlistItem => wishlistItem.name === item.name);
        if (existingItemIndex !== -1) {
            const updatedWishlist = [...prevWishlist];
            updatedWishlist[existingItemIndex].count++;
            return updatedWishlist;
        } else {
            return [...prevWishlist, { ...item, count: 1 }];
        }
    });
    successToast("Your Product is Added to Wishlist")
};

const removeWish=(item)=>{
  const updatedWish = wishlist.filter((wishlistItem) => wishlistItem.name !== item.name);
  setWishlist(updatedWish);
    console.log(item,'item');
    successToast("Your Product is Removed from Wishlist")
}
 
 

  let obj={addToCart,cart,wishListClick,wishlist,removeClick,removeWish,handleOnAdd,handleOnRemove}
  return (
    <>
      <div>
<AppContext.Provider value={obj}>
   <Routes/>
</AppContext.Provider>
    </div>
    </>
  )
}

export default App
