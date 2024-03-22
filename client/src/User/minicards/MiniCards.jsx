
import { IoIosArrowForward } from "react-icons/io";
function MiniCards({style,icon,para,para1}) {

     

  return (
                <>
                <div className={`hover:animate-bounce flex px-6 py-5 gap-4 justify-evenly items-center flex-col lg:flex-row max-[990px]:ms-4 max-[633px]:mb-3 ${style} rounded-lg `}>
                <div className=" p-2">
                    <i className="text-2xl">{icon}</i>
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


