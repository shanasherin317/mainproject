function Offers() {
  return (
    <div className="p-10 flex justify-center items-center flex-col lg:flex-row gap-3 ">
      <div className="flex bg-[#FFE7E7] m-3 p-10 rounded-lg ">
        <div className="">
        <button className="px-5 py-2 bg-[#944E63] text-white rounded-lg">25% OFF</button>
        <h1 className="text-3xl font-semibold font-mono mt-5 max-[449px]:text-lg">BLACK GARLIC OIL</h1>
        <p className="text-2xl font-semibold mt-4 max-[449px]:text-sm">Stronger and Thicker <br /> Hair With Black Garlic <br /> Oil.</p>
        <p className="text-gray-500 text-md line-through mt-4 max-[449px]:text-sm">$47</p>
        <p className="font-semibold text-3xl mt-3 max-[449px]:text-sm">$37 <span className="text-sm font-normal">Including tax</span></p>
       </div>
       <div>
        <img className="w-64 max-[609px]:hidden" src="/src/assets/img/oil.png" alt="" />
       </div>
      </div>

  <div className="flex-row ">
  <div className="flex bg-amber-50  p-10 pb-4 mt-1 rounded-lg ">
        <div className="">
        <button className="px-2 py-1 bg-[#944E63] text-white rounded-lg">25% OFF</button>
        <p className="text-xl font-semibold mt-2 max-[409px]:text-sm">Dental Care Set For Vivid <br /> And Bright Smiles. </p>
        <p className="text-gray-500 text-md line-through mt-3">$47</p>
        <p className="font-semibold text-xl mt-3">$37 <span className="text-sm font-normal">Including tax</span></p>
       </div>
       <div>
        <img className="w-36 max-[409px]:hidden" src="/src/assets/img/paste.png" alt="" />
       </div>
      </div>
   
      <div className="flex  bg-[#F9C5D5]  p-8 pb-4 rounded-lg mt-4">
        <div className="">
        <button className="px-2 py-1  bg-[#944E63] text-white rounded-lg">25% OFF</button>
        <p className="text-xl font-semibold mt-1 max-[409px]:text-sm">BANANA FLAVOURED<br />TOUTHPASTE. </p>
        <p className="text-gray-500 text-md line-through mt-1">$47</p>
        <p className="font-semibold text-xl mt-1">$37 <span className="text-sm font-normal">Including tax</span></p>
       </div>
       <div>
        <img className="w-36 max-[409px]:hidden" src="/src/assets/img/bein.png" alt="" />
       </div>
      </div>


  </div>
     



    </div>
  )
}

export default Offers
