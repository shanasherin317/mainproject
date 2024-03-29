import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
// import { IoPersonSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";
import Dropdown2 from "../dropdown2/Dropdown2";
import './styles.css'
function Header() {
    return (
      <>
        <div className="bg-gray-100 py-3">
          <div className="container mx-auto flex justify-between items-center">
           
            {/* <div className="text-black"> */}
              {/* <img className="w-[100px]" src="/src/assets/img/logo.png" alt="" /> */}
              {/* <h1 className="black-and font-bold text-2xl text-[#944E63]">pharmacie</h1> */}
            {/* </div> */}

            <div className="caesar-dressing-regular">
            {/* <h1 className="black-and font-bold text-2xl text-[#944E63]">pharmacie</h1> */}
            <h1 className="text-2xl text-[#B47B84]">FABPHARM</h1>
            </div>
            
            
            <div className="border py-0  rounded-lg max-[1000px]:hidden items-center ">
        <div className=" flex justify-center items-center">
           <Dropdown2/>
            <span className="bg-[#944E63] w-[3px] h-[20px] ms-3"></span>
            <input placeholder="search medicines,medical products" className="ps-3 bg-transparent outline-none " type="text" />

            <div className="ms-[300px] bg-[#944E63] px-5 py-5 rounded">
            <FaSearch className="text-white" />
            </div>
        </div>
       </div>
  
           
            <div className="flex">
              <Link to={'wishlist'}>
              
              <a href="#" className="anger"><FaHeart className="w-8 text-[#944E63] hover:text-black" /></a>
              </Link>
              <span className="mx-2 text-[#944E63]">|</span>
              <Link to={'cart'}>
              <a href="#" className="anger"><FaCartShopping className="w-8 text-[#944E63] hover:text-black"/></a>
              </Link>
              <span className="mx-2 text-[#944E63]">|</span>
        <Dropdown/>
        <span className="span"></span>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Header;

