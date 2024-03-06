import { FaCartShopping } from "react-icons/fa6"

function Home1() {
  return (
    <div className=" bg-green-900 gap-3 max-[405px]:p-4 ">
    <div className=" h-fit-content flex justify-around items-center md:flex-row  flex-col ">
      <div>
      <h1 className="text-[40px] text-white font-bold max-[405px]:text-[35px]">Your prescription for <br /> affordable health <br /> solutions!</h1>
      <p className="text-white mt-3" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Sit beatae eos fugit culpa unde tempore! Quos <br /> placeat veritatis impedit illo?</p>
      <div>
       <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-green-600 to-lime-200 hover:to-purple-600 mt-5">
      <span className="relative text-sm text-white flex">Start Shopping</span>
      <div className="flex items-center -space-x-3 translate-x-3">
        <div className=" rounded origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"><FaCartShopping className="mt-1 text-white"/></div>
      </div>
    </button>
       </div>
      </div>
      <div className="">
        <img  src="/src/assets/img/doctor.png" alt="" />
      </div>
    </div>
    
      </div>
  )
}

export default Home1
