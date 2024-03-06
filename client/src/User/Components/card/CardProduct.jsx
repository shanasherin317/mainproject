function CardProduct({img,name,para}) {
  return (
    <>
    <div className="hover:scale-105 transition duration-1000 px-10 py-5 bg-slate-00 border-1 rounded-lg shadow-lg w-60 mt-5 ">
        <div>
            <img className="w-32" src={img} alt="" />
        </div>
        <div>
            <h2 className="text-xl font-mono font-bold">{name}</h2>
            <p className=" font-bold text-lg">{para}</p>
            <div className="text-center">
                <button className="bg-green-600 py-2 w-full text-white rounded-lg text-lg">Add To Cart</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default CardProduct
