import { useParams } from 'react-router-dom'

function CardView() {

    const { prdctlayout } = useParams();

  return (
    <>
    { prdctlayout }

    <div className="flex flex-wrap justify-center items-center">
      <div className="m-5">
        <img src="https://media.istockphoto.com/id/1370358685/photo/multicolored-pills-scattered-from-white-plastic-medicine-container.jpg?s=612x612&w=0&k=20&c=zknrVfCELovlvvXKrAlWKLnFLfkMQF8nh9k2d97pJkE=" alt="" className='bg-slate-100 w-[200px] sm:w-[410px] sm:h-[300px] mb-3' />
        <div className="flex">
          <img src="https://media.istockphoto.com/id/1370358685/photo/multicolored-pills-scattered-from-white-plastic-medicine-container.jpg?s=612x612&w=0&k=20&c=zknrVfCELovlvvXKrAlWKLnFLfkMQF8nh9k2d97pJkE=" alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] hover:scale-105' />
          <img src="https://media.istockphoto.com/id/1370358685/photo/multicolored-pills-scattered-from-white-plastic-medicine-container.jpg?s=612x612&w=0&k=20&c=zknrVfCELovlvvXKrAlWKLnFLfkMQF8nh9k2d97pJkE=" alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] hover:scale-105 ml-1' />
          <img src="https://media.istockphoto.com/id/1370358685/photo/multicolored-pills-scattered-from-white-plastic-medicine-container.jpg?s=612x612&w=0&k=20&c=zknrVfCELovlvvXKrAlWKLnFLfkMQF8nh9k2d97pJkE=" alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] hover:scale-105 ml-1' />
          <img src="https://media.istockphoto.com/id/1370358685/photo/multicolored-pills-scattered-from-white-plastic-medicine-container.jpg?s=612x612&w=0&k=20&c=zknrVfCELovlvvXKrAlWKLnFLfkMQF8nh9k2d97pJkE=" alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] hover:scale-105  ml-1' />
        </div>
        <div className="mt-4">
          <button className='bg-[#944E63] py-1 px-2 sm:py-2 sm:px-8 m-2 rounded hover:bg-[#B47B84] text-white text-xs sm:text-base'><i className="fa-solid fa-cart-shopping"></i> ADD TO CART</button>
          <button className='bg-[#944E63] py-1 px-2 sm:py-2 sm:px-10 m-2 rounded hover:bg-[#B47B84] text-white text-xs sm:text-base'><i className="fa-solid fa-bolt"></i> BUY NOW</button>
        </div>
      </div>

      <div className="m-5">
        <div className="border-b-2 p-5">
          <p className='text-[#944E63] text-lg sm:text-xl font-semibold'>product name</p>
          <p className='text-[#944E63] text-xs sm:text-base mb-1'><i className="fa-solid fa-indian-rupee-sign mr-1"></i>price</p>
          <p className='text-[#944E63] text-xs sm:text-base mb-1'><i className="fa-solid fa-truck mr-1"></i>Free Delivery</p>
        </div>

        <div className="mt-5">
          <p className='text-[#944E63] text-xs sm:text-base'><i className="fa-solid fa-bag-shopping"></i> Faster checkout</p>
          <p className='text-[#944E63] text-xs sm:text-base'><i className="fa-solid fa-retweet"></i> Easier returns and exchanges</p>
          <p className='text-[#944E63] text-xs sm:text-base'><i className="fa-solid fa-circle-info"></i> Quick order information and tracking</p>
          <p className='text-[#944E63] text-xs sm:text-base'><i className="fa-solid fa-truck"></i>Cash on Delivery Available</p>
        </div>

        <div className="mt-10">
          <p className='sm:text-2xl text-slate-500'>Product Details</p>
          <p className='text-xs sm:text-base'>name :pd_name</p>
          <p className='text-xs sm:text-base'>price : rate</p>
          <p className='text-xs sm:text-base'>Details : details of prdct and other data</p>
          <p className='text-xs sm:text-base'>Quantity :quantities</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default CardView
