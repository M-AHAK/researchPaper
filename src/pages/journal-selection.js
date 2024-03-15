import Footer from "@/Components/Layout/Footer";
import HeadPage from "@/Components/Layout/Header";
import Navbar from "@/Components/Layout/Navbar";
import JournalSelection from "@/Components/Publication-supp-services/Individual-services/JournalSelection";
import React from "react";

const JournalSelectionPage =() =>{
    return(
        <>
        <HeadPage/>
        <Navbar/>
        <JournalSelection/>
        <Footer/>
        </>
    )
}
export default JournalSelectionPage