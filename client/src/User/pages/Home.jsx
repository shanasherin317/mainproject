
import { data1 } from "../../api/data1";
import CardProduct from "../Components/card/CardProduct";
import MiniCards from "../minicards/MiniCards";
import { data2 } from "../../api/data2";
import { data3 } from "../../api/data3";
import Homebanner from "../Components/homebanner/Homebanner";
import { IoIosArrowRoundForward } from "react-icons/io";
import Offers from "../offers/Offers";
import { data4 } from "../../api/data4";
// import { data5 } from "../../api/data5";
import Orders from "../orders/Orders";
import Blogs from "../blogs/Blogs";
function Home() {
  return (
    <>

      <div className="">
        <Homebanner />
      </div>
      <div className="flex justify-evenly p-10 mt-2 flex-col sm:flex-row md:flex-row">
        {
          data2.map((item, index) => <MiniCards icon={item.icon} para={item.para} para1={item.para1} style={item.style} key={index} />)}
      </div>

      {/* carddetails */}
      <div className="p-10">
        <div className="flex  justify-between  flex-col sm:flex-row ">
          <h2 className="text-2xl font-medium">New Products</h2>
          <div className="flex animate-bounce">
            <button className="text-green-500 text-m font-bold font-mono">View All</button>
            <IoIosArrowRoundForward className="text-green-500 text-3xl mt-1 cursor-pointer " />
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap">
          {data1.map((item, index) => <CardProduct img={item.image} name={item.para} para={item.para1} key={index} />)}
        </div>
      </div>

      {/* carddetails */}
      <div className="p-10">
        <div className="flex  justify-between  flex-col sm:flex-row ">
          <h2 className="text-2xl font-medium">Popular Products</h2>
          <div className="flex animate-bounce">
            <button className="text-green-500 text-m font-bold font-mono">View All</button>
            <IoIosArrowRoundForward className="text-green-500 text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap mb-6">
          {data3.map((item, index) => <CardProduct img={item.image} name={item.para} para={item.para1} key={index} />)}
        </div>
      </div>

      <Offers/>

      {/* card details-second */}

      <div className="p-10">
        <div className="flex  justify-between  flex-col sm:flex-row ">
          <h2 className="text-2xl font-medium">Top Products</h2>
          <div className="flex animate-bounce">
            <button className="text-green-500 text-m font-bold font-mono">View All</button>
            <IoIosArrowRoundForward className="text-green-500 text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap">
          {data4.map((item, index) => <CardProduct img={item.image} name={item.para} para={item.para1} key={index} />)}
        </div>
      </div>

   {/* minicards second */}
      {/* <div className="flex justify-evenly p-10 mt-2 flex-col sm:flex-row md:flex-row">
        {
          data5.map((item, index) => <MiniCards icon={item.icon} para={item.para} para1={item.para1}  name={item.name} style={item.style} key={index} />)}
      </div> */}

      {/* card details-third */}

      <div className="p-10">
        <div className="flex  justify-between  flex-col sm:flex-row ">
          <h2 className="text-2xl font-medium">Medical Products</h2>
          <div className="flex animate-bounce">
            <button className="text-green-500 text-m font-bold font-mono">View All</button>
            <IoIosArrowRoundForward className="text-green-500 text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap">
          {data1.map((item, index) => <CardProduct img={item.image} name={item.para} para={item.para1} key={index} />)}
        </div>
      </div>

      <div className="p-10">
        <div className="flex  justify-between  flex-col sm:flex-row ">
          <h2 className="text-2xl font-medium">Upcoming Products</h2>
          <div className="flex animate-bounce">
            <button className="text-green-500 text-m font-bold font-mono">View All</button>
            <IoIosArrowRoundForward className="text-green-500 text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap">
          {data1.map((item, index) => <CardProduct img={item.image} name={item.para} para={item.para1} key={index} />)}
        </div>
      </div>

    <Orders/>
    <Blogs/>
    </>
  )
}

export default Home

