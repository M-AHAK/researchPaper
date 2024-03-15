import Footer from "@/Components/Layout/Footer";
import HeadPage from "@/Components/Layout/Header";
import Navbar from "@/Components/Layout/Navbar";
import GetQuote from "@/Components/Publication-supp-services/Add-services-Info/GetQuote";
import React from "react";

const GetQuotePage =()=>{
    return(
        <>
        <HeadPage/>
        <Navbar/>
        <GetQuote/>
        <Footer/>
        </>
    )
}
export default GetQuotePage