
import { IoIosArrowForward } from "react-icons/io";
function MiniCards({style,icon,para,para1,name}) {

     

  return (
                <>
                <div className={`hover:animate-ping flex px-6 py-5 gap-4 justify-evenly items-center flex-col md:flex-row max-[990px]:ms-4 max-[633px]:mb-3 ${style} rounded-lg`}>
                <div className=" bg-white p-2">
                    <i className="text-2xl">{icon}</i>
                    </div>
                  <div>
                    <p className="font-bold text-2xl">{name}</p>
                  </div>
                  <div className="">
                    <p className="font-semibold">{para}<span><br />{para1}</span></p>
                </div>
             <IoIosArrowForward className="ms-6"/>
                </div>
                </>
           
    
  )
}

export default MiniCards


