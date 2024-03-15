import React from "react";
import Footer from "@/Components/Layout/Footer";
import HeadPage from "@/Components/Layout/Header";
import Navbar from "@/Components/Layout/Navbar";
import PricingQuotation from "@/Components/PricingQuotation";

const PricingQuotationPage =()=>{
    return(
        <>
        <HeadPage/>
        <Navbar/>
        <PricingQuotation/>
        <Footer/>
        </>
    )
}
export default PricingQuotationPage