import Footer from "@/Components/Layout/Footer";
import HeadPage from "@/Components/Layout/Header";
import Navbar from "@/Components/Layout/Navbar";
import Overview from "@/Components/ResearchImpact/Overview";
import React from "react";

const OverviewPage =()=>{
    return (
        <>
        <HeadPage/>
        <Navbar/>
        <Overview/>
        <Footer/>
        </>
    )
}
export default OverviewPage