import Footer from "@/Components/Layout/Footer";
import HeadPage from "@/Components/Layout/Header";
import Navbar from "@/Components/Layout/Navbar";
import JournalSubmission from "@/Components/Publication-supp-services/Individual-services/JournalSubmission";
import React from "react";

const JournalSubmissionPage =()=>{
    return(
        <>
        <HeadPage/>
        <Navbar/>
        <JournalSubmission/>
        <Footer/>
        </>
    )
}
export default JournalSubmissionPage