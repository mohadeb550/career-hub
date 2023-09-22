import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


export default function Root() {
  return (
    <>
   <section className="max-w-[1280px] mx-auto">
        <Header/>
        <Outlet/>
   </section>

        <Footer/>
    </>
  )
}
