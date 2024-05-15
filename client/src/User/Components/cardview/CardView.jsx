import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../../../App';
import { data3 } from '../../../api/data3';
import { data1 } from '../../../api/data1';
import { data4 } from '../../../api/data4';
import { data6 } from '../../../api/data6';



function CardView({ img, name, description, rate,offer }) {
  const { addToCart } = useContext(AppContext);

  const { section, id } = useParams();

  // 
  //       
  // 
  // 
  // 

  const [data, setData] = useState({})
  useEffect(() => {


    switch (section) {
      case 'newprdcts':
        // eslint-disable-next-line no-case-declarations
        const newData1 = data1.find((item) => item.id === id);
        setData(newData1);
        break;
      case 'poplrprdcts':
        // eslint-disable-next-line no-case-declarations
        const newData2 = data3.find((item) => item.id === id);
        setData(newData2);
        break;

      case 'topprdcts':
        // eslint-disable-next-line no-case-declarations
        const newData3 = data1.find((item) => item.id === id);
        setData(newData3);
        break;
      case 'medclprdcts':
        // eslint-disable-next-line no-case-declarations
        const newData4 = data1.find((item) => item.id === id);
        setData(newData4);
        break;
        case 'upcomig':
        // eslint-disable-next-line no-case-declarations
        const newData5 = data4.find((item) => item.id === id);
        setData(newData5);
        break;
        case 'offers':
        // eslint-disable-next-line no-case-declarations
        const newData6 = data6.find((item) => item.id === id);
        setData(newData6);
        break;






      default:
        setData(null);
        break;
    }

  }, [section])
  const findData = data3.find((item) => item.id === id)
  console.log(findData, 'sss')



  return (
    <>
      {/* {section} */}
      {/* {id} */}

      <div className="flex flex-wrap justify-center items-center">
        <div className="m-5">
          <img src={data.image} alt="" className='bg-slate-100 w-[200px] sm:w-[410px] sm:h-[300px] mb-3' />
          <div className="flex">
            <img src={data.image} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] hover:scale-105' />
            <img src={data.image} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] hover:scale-105 ml-1' />
            <img src={data.image} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] hover:scale-105 ml-1' />
            <img src={data.image} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] hover:scale-105  ml-1' />
          </div>
          <div className="mt-4">
            <Link to={'/cart'}>
              <button onClick={() => addToCart({ image: data.image, name: data.name, description: data.description, rate: data.description })} className='bg-[#944E63] py-1 px-2 sm:py-2 sm:px-8 m-2 rounded hover:bg-[#B47B84] text-white text-xs sm:text-base'><i className="fa-solid fa-cart-shopping"></i> ADD TO CART</button>

            </Link>
            <Link to={'/buynow'}>
            <button className='bg-[#944E63] py-1 px-2 sm:py-2 sm:px-10 m-2 rounded hover:bg-[#B47B84] text-white text-xs sm:text-base'><i className="fa-solid fa-bolt"></i> BUY NOW</button>
            </Link>
          </div>
        </div>

        <div className="m-5">
          <div className="border-b-2 p-5">
            <p className='text-[#944E63] text-lg sm:text-xl font-semibold'></p>
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
            <p className='text-xs sm:text-base'>{data.name}</p>
            <p className='text-xs sm:text-base'>{data.description}</p>
            <p className='text-xs sm:text-base'>${data.rate}</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default CardView

