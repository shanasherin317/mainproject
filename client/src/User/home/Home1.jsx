import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"

function Home1() {
  return (
    <>
    <div className=" bg-[#944E63] gap-3 max-[405px]:p-4 text-[#FBFADA]">
    <div className=" h-fit-content flex justify-around items-center lg:flex-row  flex-col ">
      <div className="p-5">
      <h1 className="protest-riot-regular text-[30px] font-bold max-[405px]:text-[25px] max-[400px]:text-[18px]">Your prescription for <br /> affordable health <br /> solutions!</h1>
      <p className="protest-riot-regular mt-3 max-[400px]:text-[15px]" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Sit beatae eos fugit culpa unde tempore! Quos <br /> placeat veritatis impedit illo?</p>
      <Link to={'shopping'}>
      <div className="mt-3">
       <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r bg-[#B47B84] hover:#CAA6A6">
      <span className="relative text-sm flex">Start Shopping</span>
      <div className="flex items-center -space-x-3 translate-x-3">
        <div className=" rounded origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"><FaCartShopping className="mt-1 text-white"/></div>
      </div>
    </button>
       </div>
       </Link>
      </div>
      <div className=" max-[400px]:mb-0">
        <img className="w-[620px]"  src="/src/assets/img/doctor.png" alt="" />
      </div>
    </div>
    
      </div>
    
      </>
  )
}

export default Home1
