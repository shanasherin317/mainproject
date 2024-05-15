
import { useState, useEffect, useContext } from "react"; // Import useState and useEffect hooks

import { data1 } from "../../api/data1";
import { data3 } from "../../api/data3";
import { data4 } from "../../api/data4";
import { FaHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown2 from "../dropdown2/Dropdown2"
import Dropdown from "../dropdown/Dropdown"
import { FaCartShopping } from "react-icons/fa6";
import { AppContext } from "../../App";
import { categories } from "../../api/categories";
// import {} from "../UserLayout/"
import "./styles.css";

function Header() {

  const { cart,wishlist } = useContext(AppContext)
  const [searchQuery, setSearchQuery] = useState(""); // State variable for search query
  const [results, setResults] = useState([]); // State variable for search results

  useEffect(() => {
    // Combine all datasets into one
    const combinedData = [...data1, ...data3, ...data4];
    // Filter combined data based on search query
    const filteredResults = combinedData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Update search results state
    setResults(filteredResults);
  }, [searchQuery]); // Trigger effect whenever search query changes

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value); // Update search query state
  };

  return (
    <>
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="caesar-dressing-regular">
            <h1 className=" text-2xl text-[#B47B84]">FABPHARM</h1>
          </div>

          <div className="border py-0 rounded-lg max-[1000px]:hidden items-center">
            <div className="flex justify-center items-center">
            <Dropdown2 categories={categories} />
            <span className="bg-[#944E63] w-[3px] h-[20px] ms-3"></span>
              <input
                onChange={(e) => handleSearch(e)}
                value={searchQuery}
                placeholder="search medicines, medical products"
                className="ps-3 bg-transparent outline-none"
                type="text"
              /> 
              <div className="ms-[300px] bg-[#944E63] px-5 py-5 rounded">
                <FaSearch className="text-white" />
              </div>
            </div>
            {/* Conditionally display search results */}
            {searchQuery && (
              <div className="flex flex-col px-6 py-3 max-h-[300px] absolute top-[80px] overflow-scroll z-50 w-[600px] border bg-white shadow-lg">
                {results.length > 0 ? (
                  results.map((item, index) => (
                    <Link to={`/cardview/${item.id}/${item.section}`} key={index}>
                      <div className="flex gap-3 py-1 justify-start items-center ">
                        <img
                          src={item.image}
                          className="w-12 h-12 rounded-full"
                          alt=""
                        />
                        <div className="" key={index}>
                          {item.name}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div>No results found</div>
                )}
              </div>
            )}
          </div>
 <div className="flex">
              <Link to={'wishlist'}>
              
              <a href="#" className="anger flex"><FaHeart className="w-8 text-[#944E63] hover:text-black" /><div className="bg-[#944E63] text-white text-sm rounded-full ">{wishlist.length}</div></a>
              </Link>
              <span className="mx-3 text-[#944E63]">|</span>
              <Link to={'cart'}>
              <a href="#" className="anger flex"><FaCartShopping className="w-8 text-[#944E63] hover:text-black"/><div className="bg-[#944E63] text-white text-sm rounded-full">{cart.length}</div></a>
              </Link> 
              <span className="mx-3 text-[#944E63]">|</span>
        <Dropdown/>
        <span className="span"></span>
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;
