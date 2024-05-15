import { useContext } from "react";
import { AppContext } from "../../../App";
import { Link } from "react-router-dom";

function Cart() {
  const { cart,wishListClick ,removeClick,handleOnAdd,handleOnRemove} = useContext(AppContext);
   
  return (
    <>
    {cart.length>0 ? 
      <div>
        <div className="p-5 flex">
          {cart?.map((item) => {
            return (
              <>
               
                 <div className="border rounded-md mt-2">

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
  <button onClick={()=>removeClick(item)} className="hover:scale-105 mt-3 px-2 text-sm text-[#944E63] rounded-lg py-1 flex">Remove<i className="fa-solid fa-trash mt-1 ml-1"></i></button>
  <Link to={'/wishlist'}>
  <button  onClick={() => wishListClick(item)} className="hover:scale-105 mt-3 px-2 text-sm text-[#944E63] rounded-lg py-1">Move to wishlist<i className="fa-solid fa-heart  mt-1 ml-1"></i></button>
  </Link>
  </div>

  <div className="bg-slate-300 w-16 rounded-md mt-1" style={{color:"#944E63", marginLeft:"8px",display:"flex",gap:"2px"}}>
          <button className='font-bold'  onClick={()=>handleOnAdd(item)}>+</button>
          {item.count}
          <button className='btn1 ms-2 font-bold' onClick={()=>handleOnRemove(item)} >-</button>
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
      <div className="p-3">
      <div className="flex justify-center items-center">
        <img className="w-96 " src="https://assets.materialup.com/uploads/ab4605f2-e16b-487b-9684-01756d71d244/ntta_m346_05.jpg" alt="" />
      </div>
      <div className="kaushan-script-regular text-center text-[#944E63] text-xl">
      Click 'Add to Cart' to include items in your shopping cart.
      </div>
      </div>
}
    </>
  );
}

export default Cart;
