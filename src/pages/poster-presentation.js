import Footer from "@/Components/Layout/Footer";
import HeadPage from "@/Components/Layout/Header";
import Navbar from "@/Components/Layout/Navbar";
import PosterPresentation from "@/Components/ResearchImpact/PosterPresentation";
import React from "react";

const PosterPresentationPage =()=>{
    return(
        <>
        <HeadPage/>
        <Navbar/>
        <PosterPresentation/>
        <Footer/>
        </>
    )
}
export default PosterPresentationPage