// import { useEffect } from "react";
import { data1 } from "../../api/data1";
import CardProduct from "../Components/card/CardProduct";
import MiniCards from "../minicards/MiniCards";
import { data2 } from "../../api/data2";
// import { data3 } from "../../api/data3";
import Homebanner from "../Components/homebanner/Homebanner";
import { IoIosArrowRoundForward } from "react-icons/io";
import Offers from "../offers/Offers";
// import { data4 } from "../../api/data4";
// import { data5 } from "../../api/data5";
import Orders from "../orders/Orders";
import Blogs from "../blogs/Blogs";
import MiniCard2 from "../minicard2/Minicard2";
import { data5 } from "../../api/data5";
import { Link } from "react-router-dom";
import Section2 from "../section2/Section2";
import Whtsapp from "../whtsapp/Whtsapp";
// import axios from "axios";
import { data3 } from "../../api/data3";
import { data4 } from "../../api/data4";

// const options = {
//   method: 'GET',
//   url: 'https://skincare-api.p.rapidapi.com/skincare',
//   headers: {
//     'X-RapidAPI-Key': '98fd9cfb51msh1c151e9f2700b82p11b3cajsn9a2f4460e154',
//     'X-RapidAPI-Host': 'skincare-api.p.rapidapi.com'
//   }
// };


function Home() {

  // useEffect(() => {
  //   fetchdata()
  // }, [])

  // const fetchdata = async () => {
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  return (
    <>

      <div className="">
        <Homebanner />
        <Whtsapp />



      </div>
      <div className="flex justify-evenly p-10 mt-2 flex-col md:flex-row">
        {
          data2.map((item, index) => <MiniCards icon={item.icon} para={item.para} para1={item.para1} style={item.style} key={index} />)}
      </div>




      <Section2 />
      {/* carddetails */}
      <div className="p-10">
        <div className="flex  justify-between  flex-col sm:flex-row ">
          <h2 className="text-2xl font-medium text-[#944E63]">New Products</h2>
          <div className="flex animate-bounce">
            <Link to={'viewall'}>

              <button className=" text-[#944E63] text-m font-bold font-mono">View All</button>
            </Link>
            <IoIosArrowRoundForward className=" text-[#944E63] text-3xl mt-1 cursor-pointer " />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center items-center">
          {data1.map((item, index) => {
            if(index < 5){
              return <CardProduct section={'medclprdcts'} img={item.image} name={item.name} description={item.description} rate={item.rate} key={index} id={item.id} />
            }
          })}
        </div>
      </div>

      {/* carddetails */}
      <div className="p-10">
        <div className="flex  justify-between  flex-col sm:flex-row ">
          <h2 className="text-2xl font-medium text-[#944E63]">Popular Products</h2>
          <div className="flex animate-bounce">
            <Link to={'viewall/poppular-products'}>

              <button className=" text-[#944E63] text-m font-bold font-mono">View All</button>
            </Link>
            <IoIosArrowRoundForward className="text-[#944E63] text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center items-center">
          {data3.map((item, index) => <CardProduct section={'poplrprdcts'} id={item.id} img={item.image} name={item.name} description={item.description} rate={item.rate} key={index} />)}
        </div>
      </div>

      <Offers />

      {/* card details-second */}

      <div className="p-10">
        <div className="flex  justify-between  flex-col sm:flex-row ">
          <h2 className="text-2xl font-medium text-[#944E63]">Top Products</h2>
          <div className="flex animate-bounce">
            <Link to={'viewall'}>

              <button className=" text-[#944E63] text-m font-bold font-mono">View All</button>
            </Link>
            <IoIosArrowRoundForward className="text-[#944E63] text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center items-center">
          {data1.map((item, index) => {
            if(index < 5){
              return <CardProduct section={'medclprdcts'} img={item.image} name={item.name} description={item.description} rate={item.rate} key={index} id={item.id} />
            }
          })}
        </div>
      </div>

      {/* minicards second */}
      <div className="flex justify-evenly p-10 mt-2 flex-col sm:flex-row md:flex-row">
        {
          data5.map((item, index) => <MiniCard2 icon={item.icon} para={item.para} para1={item.para1} name={item.name} style={item.style} key={index} />)}
      </div>

      {/* card details-third */}

      <div className="p-10">
        <div className="flex  justify-between  flex-col sm:flex-row ">
          <h2 className="text-2xl font-medium text-[#944E63]">Medical Products</h2>
          <div className="flex animate-bounce">
            <Link to={'viewall'}>

              <button className=" text-[#944E63] text-m font-bold font-mono">View All</button>
            </Link>
            <IoIosArrowRoundForward className="text-[#944E63] text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center items-center">
          {data1.map((item, index) => {
            if(index < 5){
              return <CardProduct section={'medclprdcts'} img={item.image} name={item.name} description={item.description} rate={item.rate} key={index} id={item.id} />
            }
          })}
        </div>
      </div>

{/* -------upcoming -------------------------- */}
      <div className="p-10">
        <div className="flex  justify-between  flex-col sm:flex-row ">
          <h2 className="text-2xl font-medium text-[#944E63]">Upcoming Products</h2>
          <div className="flex animate-bounce">
            <Link to={'viewall'}>

              <button className=" text-[#944E63] text-m font-bold font-mono">View All</button>
            </Link>
            <IoIosArrowRoundForward className=" text-[#944E63]   text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center items-center">
          {data4.map((item, index) => <CardProduct section={'upcomig'} id={item.id} img={item.image} name={item.name} description={item.description} rate={item.rate} key={index} />)}
        </div>
      </div>
{/* -------upcoming -------------------------- */}


      <Orders />
      <Blogs />
    </>
  )
}

export default Home
