import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { data1 } from "../../api/data1";
import { data3 } from "../../api/data3";
import { data4 } from "../../api/data4";

const Dropdown2 = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('')
  const navigate = useNavigate()
  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <a href="#" onMouseEnter={handleDropdownToggle} className="w-8 text-[#944E63]">
        All Categories
      </a>
      <div
        id="dropdownDelay"
        className={`bg-white absolute flex  w-[500px]  max-h-[200px] overflow-scroll z-10 left-4 top-2 ${isOpen ? '' : 'hidden'} bg-[#ffffff96]  divide-y divide-gray-100 rounded-lg shadow dropdown`}
      >
        <ul className="flex-1 py-2 text-sm dark:text-gray-200  text-[#944E63]" aria-labelledby="dropdownDelayButton">
          {categories.map((category, index) => (
            <li className="px-3 py-3" onMouseEnter={() => {
              setCategory(category)
            }} onClick={() => {
              setCategory(category)
            }} key={index}>
              {/* <Link
                to={`/category/${category.id}`} // Adjust the link destination based on your route structure
                className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white"
              > */}
              {category.category}
              {/* </Link> */}
            </li>
          ))}
        </ul>

        <div className="flex-1 flex flex-col bg-white w-auto">
          {category && [...data1,...data3,...data4].filter((item) => item.categoryId === category.id).map((i) => {
            return (<div onClick={()=>navigate(`/cardview/${i.id}/${i.section}`)}  key={i.id} className="bg-white flex items-center gap-3 py-2  ps-3">
              <img src={i.image} alt="" className="w-12 h-12 rounded-md" />
              <p>{i.name}</p>
            </div>)
          })
        }
        </div>




        {/* 
      
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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      */}
      </div>
    </div>
  );
};

export default Dropdown2;
