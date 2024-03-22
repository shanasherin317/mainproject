import { SlCalender } from "react-icons/sl"

function Cart() {
  return (
    <div className="m-5 flex flex-wrap">
      <div className="border rounded-md mt-2">

<div className="flex flex-col lg:flex-row">
  <div>
    <img className="w-60 h-fit" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfvV5XqxSPPboJTcFG9nN_1KMqiLtkOmpmkvxMBk3P3f_SCeCX" alt="" />
  </div>
  <div className="flex">
<div className="p-3">
<div className="flex gap-4">
<p className="text-green-600 bg-gray-200 rounded-lg px-1">Doctor</p>
<SlCalender className="mt-1"/>
      <p className="text-gray-500">24 Dec,2024</p>
</div>
  <h1 className="text-md font-normal leading-snug mt-2">In this Section,we devel into <br /> various aspects of health</h1>
  <p className="mt-1 text-sm text-gray-500">Healthy eating emphasizes fruits, vegetables, whole grains, dairy,<br /> and protein. Dairy recommendations.
  </p>
  <button className="hover:scale-105 mt-3 px-2 text-sm bg-green-600 text-white rounded-lg">Read More</button>
</div>
  </div>
</div>
</div>

    </div>
  )
}

export default Cart
