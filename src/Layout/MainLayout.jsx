import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar/Navbar"
import Footer from "../Components/Shared/Footer/Footer"
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // You can customize the duration or other settings
  }, []);
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout