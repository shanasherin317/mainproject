import { FaCartShopping } from "react-icons/fa6"

function Home3() {
  return (
    <div className="home gap-3 max-[405px]:p-4 text-[#FBFADA]">
    <div className=" h-fit-content flex justify-around items-center lg:flex-row  flex-col ">
      <div className=" max-[400px]:mb-0">
        <img className="w-[1500px] max-[1023px]:w-[700px]"  src="/src/assets/img/doctorfemale.png" alt="" />
      </div>
      <div className="text-center max-[1022px]:text-center p-4 w-[1500px] max-[1060px]:w-auto">
      <h1 className="text-[30px] font-bold max-[405px]:text-[25px] max-[400px]:text-[18px] text-center mr-64 max-[1022px]:mr-0">Your prescription for <br /> affordable health <br /> solutions!</h1>
      <p className=" mt-3 max-[400px]:text-[15px] text-center mr-64 max-[1022px]:mr-0" >Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sit beatae eos fugit culpa unde tempore! Quos placeat veritatis impedit illo?</p>
      <div className="mt-7 ml-24 max-[1135px]:ml-0 max-[1020px]:flex justify-center">
       <button className="relative group overflow-hidden px-6 h-12 rounded-full flex items-center space-x-2  bg-gradient-to-r bg-[#B47B84] hover:#CAA6A6 mb-4">
      <span className="relative text-sm text-white flex">Start Shopping</span>
      <div className="flex items-center -space-x-3 translate-x-3">
        <div className=" rounded origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"><FaCartShopping className="mt-1 text-white"/></div>
      </div>
    </button>
       </div>
      </div>
    </div>
    
    
      </div>
  )
}

export default Home3
