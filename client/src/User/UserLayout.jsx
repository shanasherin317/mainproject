import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"

function UserLayout() {

  return (
      <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  ) 
}

export default UserLayout
