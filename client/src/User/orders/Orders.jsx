function Orders() {
  return (
    <div className="p-20 bg-[#FFE7E7] m-8 flex  relative flex-col lg:flex-row">
      <div className="relative z-10 lg:w-1/2 text-[]">
        <p className="text-lg font-semibold">Todays hot Offer</p>
        <h1 className="text-4xl font-bold leading-snug max-[465px]:text-[20px]">Unlock 50% Off on <br />Essential Medicines.</h1>
        <p className="text-gray-500 font-serif mt-4 max-[465px]:text-[15px]">Embrace wellness without breaking the bank!Enjoy a generous <br />25% discount on a wide range of vital medicines at our online <br />
        pharmacy.Your health matters,and so does your budget.
        </p>
       <div>
       <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-[#B47B84] to-[#944E63] hover:to-[#6D2932] mt-5">
      <span className="relative text-sm text-white">Place an Order</span>
      <div className="flex items-center -space-x-3 translate-x-3">
        <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
       </div>
      </div>
      <div >
        <img className="w-[500px] absolute right-2 top-2  max-[932px]:w-[200px] " src="/src/assets/img/medi.png" alt="" />
       
      </div>
    </div>
  )
}

export default Orders
