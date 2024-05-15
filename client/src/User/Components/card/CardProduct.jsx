import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
// import { MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";
function CardProduct({img,name,description,rate,id,section,offer}) {


    
    const { wishListClick} = useContext(AppContext);
    
  return (
    <>
    
    <Link to={`/cardview/${id}/${section}`}>
    <div className="hover:scale-105 transition duration-1000 border border-black rounded-lg mt-5 group shadow-lg ">
        <div>
            <img className="m-auto w-56" src={img} alt="" />
        </div>
        <div>
            <h2 className="text-lg font-mono max-[355px]:text-[15px] text-center mt-1">{name}</h2>
            <p className=" text-sm max-[355px]:text-[15px] text-center">{description}</p>
            <p className=" text-md max-[355px]:text-[15px] text-center mt-1 font-bold">{offer}</p>
            <p className=" text-md max-[355px]:text-[15px] text-center mt-1 font-bold">${rate}</p>
            <Link to={'/wishlist'}>
            <div className="text-center">
                <button onClick={() => wishListClick({ img, name, description, rate })} className="wish text-[#FBFADA] py-1 w-full md:flex  border-none text-md mt-2 invisible group-hover:visible hidden gap-3 justify-center">Wishlist<FaHeart className="mt-1" /></button>
            </div>
            </Link>
            <div className="">
                <button className="py-1 w-full text-md mt-2 invisible group-hover:visible flex md:hidden gap-3 justify-end"><FaHeart className="mt-1 me-2" /></button>
            </div>
        </div>
    </div>
    </Link>
   </>
  )
}

export default CardProduct
