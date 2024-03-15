import Footer from "@/Components/Layout/Footer";
import HeadPage from "@/Components/Layout/Header";
import Navbar from "@/Components/Layout/Navbar";
import PlagiarismCheck from "@/Components/Publication-supp-services/Individual-services/PlagiarismCheck";
import React from "react";

const PlagiarismCheckPage =()=>{
    return(
        <>
        <HeadPage/>
        <Navbar/>
        <PlagiarismCheck/>
        <Footer/>
        </>
    )
}
export default PlagiarismCheckPage