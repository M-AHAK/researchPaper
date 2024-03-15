import AboutUs from "@/Components/AboutUs";
import Footer from "@/Components/Layout/Footer";
import HeadPage from "@/Components/Layout/Header";
import Navbar from "@/Components/Layout/Navbar";
import React from "react";

const AboutUsPage =()=>{
    return(
        <>
        <HeadPage/>
        <Navbar/>
        <AboutUs/>
        <Footer/>
        </>
    )
}
export default AboutUsPage 