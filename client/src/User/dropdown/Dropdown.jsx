import { useState } from "react";
import {  BsFillBoxFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoPersonCircle, IoPersonSharp } from "react-icons/io5";
import { MdOutlinePersonAddAlt } from "react-icons/md";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="relative inline-block text-left">
    <a href="#"  onClick={handleDropdownToggle} className=""><IoPersonSharp  className="w-8 hover:text-black text-green-600" /></a>
      <div
        id="dropdownDelay"
        className={`absolute z-10 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dropdown `}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
          <li>
            <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white">
             sign In or Log in <MdOutlinePersonAddAlt className="text-2xl"/>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white ">
            My profile <IoPersonCircle className="text-2xl"/>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white ">
            orders <BsFillBoxFill />
            </a>
          </li>

          <li>
            <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white">
             wishlist <FaHeart/>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2  px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white">
            Settings <IoIosSettings className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Dropdown