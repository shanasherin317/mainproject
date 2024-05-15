import { data6 } from "../../../api/data6"
import CardProduct from "../card/CardProduct"

function Orrde20() {
  return (
    <div className="p-10">
       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center items-center">
          {data6.map((item, index) => {
            if(index < 5){
              return <CardProduct section={'offers'} img={item.image} name={item.name} offer={item.offer} rate={item.rate} key={index} id={item.id} />
            }
          })}
        </div>
    </div>
  )
}

export default Orrde20
