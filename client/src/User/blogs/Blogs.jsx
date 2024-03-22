import { SlCalender } from "react-icons/sl";
import { FaBookReader } from "react-icons/fa";
function Blogs() {
  return (
    <>
    <div className="flex justify-center items-center">
            <h1 className="text-3xl font-semibold  max-[465px]:text-[20px]">Our Latest News & Blogs</h1>
        </div>
    <div className="p-10 m-6 flex gap-3 flex-col lg:flex-row">
      <div className="border rounded-md">
     <div>
        <img className="w-[450px] h-64 max-[405px]:w-[300px] max-[405px]:h-40" src="https://www.who.int/images/default-source/wpro/countries/viet-nam/health-topics/thuoc-thiet-yeu.tmb-1024v.jpg?Culture=en&sfvrsn=a0b4a101_16" alt="" />
     </div>
     <div className="flex gap-6 mt-2 p-3">
        <p className="text-[#B47B84] bg-gray-200 rounded-lg px-1">Doctor</p>
        <div className="flex gap-2">
            <SlCalender className="mt-1"/>
            <p className="text-gray-500">24 Dec,2024</p>
        </div>
     </div>
     <div className="p-3">
        <h1 className="text-3xl font-normal leading-snug  max-[465px]:text-[20px]">In this Section,we devel into <br /> various aspects of health</h1>
        <p className="mt-5 text-sm text-gray-500">Explore the world of medical specialities through <br /> our blogs spotlight
        feature.from cardiology to padiatrics, <br />we share-in depth articles written <br />
        by our expert physicians.
        </p> 
       {/* <button className="mt-3 px-5 py-1 bg-green-600 text-white rounded-lg hover:scale-105">Read More</button> */}
      
       <div className="button-container-1">
      <span className="mas flex justify-center items-center"><FaBookReader className="text-3xl text-[#B47B84]" /></span>
    <button className="button" id='work' type="button" name="Hover">Read More</button>
  </div>
     </div>
      </div>
    
    <div className="flex-row">

    {/* fristrow */}
    <div className="border rounded-md ">

      <div className="flex flex-col lg:flex-row">
        <div>
          <img className="w-60 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStO9su5ZWNYuf10LQqrE5PkuiToN9B_AeLML10qDciyL65xugrHvmtmSxm95Quyl79okI&usqp=CAU" alt="" />
        </div>
        <div className="flex">
     <div className="p-3">
      <div className="flex gap-4">
      <p className="text-[#B47B84] bg-gray-200 rounded-lg px-1">Doctor</p>
      <SlCalender className="mt-1"/>
            <p className="text-gray-500">24 Dec,2024</p>
      </div>
        <h1 className="text-md font-normal leading-snug mt-2">In this Section,we devel into <br /> various aspects of health</h1>
        <p className="mt-1 text-sm text-gray-500">Healthy eating emphasizes fruits, vegetables, whole grains, dairy,<br /> and protein. Dairy recommendations.
        </p>
        <button className="hover:scale-105 mt-3 px-2 text-sm bg-[#944E63] text-white rounded-lg py-1">Read More</button>
     </div>
        </div>
      </div>

    </div>

    {/* secondrow */}
    <div className="border rounded-md mt-2">

<div className="flex flex-col lg:flex-row">
  <div>
    <img className="w-60 h-48" src="https://medlineplus.gov/images/Medicines_share.jpg" alt="" />
  </div>
  <div className="flex">
<div className="p-3">
<div className="flex gap-4">
<p className="text-[#B47B84] bg-gray-200 rounded-lg px-1">Doctor</p>
<SlCalender className="mt-1"/>
      <p className="text-gray-500">24 Dec,2024</p>
</div>
  <h1 className="text-md font-normal leading-snug mt-2">In this Section,we devel into <br /> various aspects of health</h1>
  <p className="mt-1 text-sm text-gray-500">Healthy eating emphasizes fruits, vegetables, whole grains, dairy,<br /> and protein. Dairy recommendations.
  </p>
  <button className="hover:scale-105 mt-3 px-2 text-sm bg-[#944E63] text-white rounded-lg py-1">Read More</button>
</div>
  </div>
</div>
</div>

{/* third row */}
<div className="border rounded-md mt-2">

<div className="flex flex-col lg:flex-row">
  <div>
    <img className="w-60 h-48" src="https://www.who.int/images/default-source/wpro/countries/viet-nam/health-topics/thuoc-thiet-yeu.tmb-1024v.jpg?Culture=en&sfvrsn=a0b4a101_16" alt="" />
  </div>
  <div className="flex">
<div className="p-3">
<div className="flex gap-4">
<p className="text-[#B47B84] bg-gray-200 rounded-lg px-1">Doctor</p>
<SlCalender className="mt-1"/>
      <p className="text-gray-500">24 Dec,2024</p>
</div>
  <h1 className="text-md font-normal leading-snug mt-2">In this Section,we devel into <br /> various aspects of health</h1>
  <p className="mt-1 text-sm text-gray-500">Healthy eating emphasizes fruits, vegetables, whole grains, dairy,<br /> and protein. Dairy recommendations.
  </p>
  <button className="hover:scale-105 mt-3 px-2 text-sm bg-[#944E63] text-white rounded-lg py-1">Read More</button>
</div>
  </div>
</div>
</div>


</div>
   </div>
   </>
  )
}

export default Blogs
