import React from "react"
import Footer from "@/Components/Layout/Footer"
import HeadPage from "@/Components/Layout/Header"
import Navbar from "@/Components/Layout/Navbar"
import RejectedEditing from "@/Components/Publication-supp-services/Individual-services/RejectedEditing"

const RejectedEditingPage =()=>{
    return(
        <>
        <HeadPage/>
        <Navbar/>
        <RejectedEditing/>
        <Footer/>
        </>
    )
}
export default RejectedEditingPage