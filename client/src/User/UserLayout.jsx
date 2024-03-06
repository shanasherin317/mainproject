import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"

function UserLayout() {
  return (
    <div>
    <Header/>
    {/* <Item/> */}
    <Outlet/>
    {/* <MiniCards/>
    <Cards/>
    <Cards2/> */}
    <Footer/>
    </div>
  ) 
}

export default UserLayout
