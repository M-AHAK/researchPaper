import React from "react";
import HeadPage from "@/Components/Layout/Header";

import dynamic from 'next/dynamic'
const Home = dynamic(() => import('@/Components/Research-home'), { ssr: false })

// import Home from "@/Components/Research-home";

import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";

const HomePage =() =>{
  return(
    <>
     <HeadPage/> 
    <Navbar/>
    <Home/>
    <Footer/>
     
    </>
  )
}
export default HomePage