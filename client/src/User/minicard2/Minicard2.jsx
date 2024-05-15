
// import { IoIosArrowForward } from "react-icons/io";
function MiniCard2({style,icon,para,para1,name}) {

     

  return (
                <>
                <div className={`hover:animate-bounce flex px-6 py-5 gap-4 justify-evenly items-center flex-col lg:flex-row max-[990px]:ms-4 max-[633px]:mb-3 ${style} rounded-lg max-[766px]:mt-2 `}>
                    <div className="flex-row">
                
                <div className=" flex gap-4">
                    <i className="text-2xl mt-1 bg-white p-1">{icon}</i>
                    <p className="font-bold text-2xl">{name}</p>
                    </div>
                  <div className="">
                    <p className="font-semibold">{para}<span><br />{para1}</span></p>
                </div>
                </div>
                </div>
                </>
           
    
  )
}

export default MiniCard2


