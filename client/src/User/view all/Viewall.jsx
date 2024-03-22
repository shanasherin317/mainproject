import { data1 } from "../../api/data1"
import CardProduct from "../Components/card/CardProduct"
import Section2 from "../section2/Section2"

function Viewall() {
  return (
    <>
    <Section2/>
    <div className="p-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center items-center">
        {data1.map((item, index) => <CardProduct img={item.image} name={item.para} para={item.para1} key={index} />)}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center items-center">
        {data1.map((item, index) => <CardProduct img={item.image} name={item.para} para={item.para1} key={index} />)}
      </div>
    </div>
    </>
  )
}

export default Viewall
