import { useState } from "react";
import { data3 } from '../../../api/data3';
import { data1 } from '../../../api/data1';
import { data4 } from '../../../api/data4';
import CardProduct from "../card/CardProduct";

function Shopping() {
  // Assuming each page will display 10 items
  const itemsPerPage = 10;

  // Assuming your data is an array of objects containing medicine information
  const allData = [...data1, ...data3, ...data4];

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center items-center">
          {currentItems.map((item, index) => (
            <CardProduct
              section={'topprdcts'}
              id={item.id}
              img={item.image}
              name={item.name}
              description={item.description}
              rate={item.rate}
              key={index}
            />
          ))}
        </div>
        <div className=" w-full h-10 flex justify-center items-center mt-2">
          {/* Render pagination buttons */}
          {Array.from({ length: Math.ceil(allData.length / itemsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 mx-1 rounded-full ${currentPage === i + 1 ? ' bg-[#FFE7E7] text-#944E63' : 'bg-[#944E63] text-white'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shopping;
