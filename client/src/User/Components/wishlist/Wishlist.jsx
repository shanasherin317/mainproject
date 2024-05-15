import { useContext } from "react";
import { AppContext } from "../../../App";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist,addToCart,removeWish } = useContext(AppContext);

  return (
    <>
    {wishlist.length>0 ?
      <div>
        <div className="p-5 flex flex-wrap">
          {wishlist?.map((item) => {
            return (
              <>
               
                 <div className="border rounded-md mt-2 ml-2">

<div className="flex flex-col lg:flex-row">
  <div>
    <img className="w-60 h-48" src={item.image} alt="" />
  </div>
  <div className="flex">
<div className="p-3">
  <h1 className="text-lg font-mono max-[355px]:text-[15px] ml-2 mt-1 hover:scale-100">{item.name}</h1>
  <p className=" text-sm max-[355px]:text-[15px] ml-2">{item.description}</p>
  <p className=" text-md max-[355px]:text-[15px] ml-2 mt-1 font-bold">${item.rate}
  </p>
  <div className="flex gap-4">
  <Link to={'/cart'}>
  <button  onClick={()=>addToCart(item)}  className="hover:scale-105 mt-3 px-2 text-sm bg-[#944E63] text-white rounded-lg py-1">Move to Cart</button>
  </Link>
  <button  onClick={()=>removeWish(item)}  className="hover:scale-105 mt-3 px-2 text-sm bg-[#944E63] text-white rounded-lg py-1">Remove</button>
  </div>
</div>
  </div>
</div>
</div>
              </>
            );
          })}
        </div>
      </div> :
      <div className="flex justify-center items-center">
        <img className="w-96 animate-pulse" src="https://cdni.iconscout.com/illustration/premium/thumb/add-favorite-items-into-wishlist-2739549-2283945.png?f=webp" alt="" />
      </div>
}
    </>
  );
}

export default Wishlist;
