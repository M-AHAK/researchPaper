import Footer from "@/Components/Layout/Footer";
import HeadPage from "@/Components/Layout/Header";
import Navbar from "@/Components/Layout/Navbar";
import PrePeerReview from "@/Components/Publication-supp-services/Individual-services/PrePeerReview";
import React from "react";

const PrePeerReviewPage =()=>{
    return(
        <>
        <HeadPage/>
        <Navbar/>
        <PrePeerReview/>
        <Footer/>
        </>
    )
}
export default PrePeerReviewPage