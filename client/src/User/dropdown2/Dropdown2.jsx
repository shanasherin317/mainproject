import { useState } from "react";
import { Link } from "react-router-dom";
const Dropdown2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="relative inline-block text-left">
    <a href="#"  onClick={handleDropdownToggle} className="w-8 text-[#944E63]">All Categories</a>
      <div
        id="dropdownDelay"
        className={`absolute z-10 left-4 top-2 ${isOpen ? '' : 'hidden'} bg-[#ffffff96]  divide-y divide-gray-100 rounded-lg shadow w-32 dropdown `}
      >
        <ul className="py-2 text-sm dark:text-gray-200 text-[#944E63]" aria-labelledby="dropdownDelayButton">
          <li>
            <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white">
            Cold Relief
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white ">
            Cold and Flu
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white ">
            Diabetes and Care
            </a>
          </li>

          <li>
            <Link to={'cart'}>
            <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white">
            Digestive Health
            </a>
            </Link>
          </li>
          <li>
            <a href="#" className="flex gap-2  px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white">
            First Aid
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2  px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white">
            Skin Care
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2  px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white">
            Child and Babycare
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2  px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white">
            Heart Health
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2  px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white">
            Eye and Ear Care
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2  px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-800 dark:hover:text-white">
            Respiratory Health
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Dropdown2



