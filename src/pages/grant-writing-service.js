import Footer from "@/Components/Layout/Footer";
import HeadPage from "@/Components/Layout/Header";
import Navbar from "@/Components/Layout/Navbar";
import GrantWriting from "@/Components/Publication-supp-services/Add-services-Info/GrantWriting";
import React from "react";

const GrantPage =()=>{
    return(
        <>
        <HeadPage/>
        <Navbar/>
        <GrantWriting/>
        <Footer/>
        </>
    )
}
export default GrantPage