import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useRouter } from "next/router";
import { useState } from "react"; 
import axios from "axios";

const GetQuote =()=>{
  
    const history = useRouter();
    const [mobileNo,setMobile] = useState();
    const [callingCode,setCallingCode] = useState();
    const [showAlert, setShowAlert] = useState(false);
    {
        const [formData, setFormData] = useState({
            title:"",
            lname:"",
            email:"",
            service_category:"",
            mobileNo:"",
            word_count:"",
        });


    const  handlePhoneOnChange = async (value, data, event, formattedValue) => {
        setCallingCode(data.dialCode); 
        setMobile(value);
        setFormData({ ...formData, ["mobileNo"]: value }); 
  }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


//       const handleDropdownChange = (e) => {
//     const newValue = e.target.value;
//     setFormData({ ...formData, ["mobileNo"]: value }); 
//     // Perform any other actions based on the selected value
//   };

      const handleSubmit = async (e) => {
        e.preventDefault();
        // Store the data in local storage
    
    
        const { title, lname, email,service_category, mobileNo, word_count  } = formData;
    
        const url = "http://localhost:5000/researchPaperForm/";
    
        const data = {
        
          lname,
          email,
          service_category,
          mobileNo,
          word_count,
          title,
        };
        console.log("data", data);
        const response = await axios.post(url, data);
        setShowAlert(true);
        
      };
    

    return(

        
        <>
        
        <div class="clearfix"></div>
 
        <section class="sec fond54v persd21b1">
    <div class="container">
        <div class="row">
		<div class="rightftyty">
<div class="" style={{position:" relative", top: "50%", transform: "translateY(-50%)", maxWidth:" 80%", margin: "0 auto"}}>
<h2>You are just one step away !</h2>
    <p>Get Your Manuscripts Published Quickly and Easily with Professional Editing
We would be happy to hear from you; kindly fill out this form to proceed.</p> 
</div>
            </div>
            <p id="cntrepmsg"></p>
                <div>

                  {showAlert ? (
                    <div class="alert alert-success" role="alert">
                      Form submitted successfully!
                    </div>
                  ) : null}

            <div class="yourprBgColor mt-0">
                <div class="formContact">
                    <form method="POST" onSubmit={handleSubmit} action="/get-a-quote">
                    <div class="row">
                            <div class="col-md-12">
                                <div class="d-flex justify-content-between align-items-center abper">
                                    <h3><span> Order Form </span></h3>
                                </div>
                            </div>
                            <div class="col-md-12">
							<div class="SalutationbgNm">
							<div class="abutYorPr salutation">
							<label class="form-label">Salutation *</label>
							<select class="form-select" name="title"  value={formData.title}
                            onChange={handleChange}> 
										 <option value="Dr. ">Dr. </option>
										 <option value="Mr. ">Mr. </option> 
										 <option value="Prof. ">Prof.</option>  
										 <option value="Ms. ">Ms. </option> 
										 <option value="Mrs. ">Mrs.</option>
										 </select>
							</div>

                                <div class="abutYorPr fullname">
                                    <label class="form-label">Full Name *</label>
                                    <input type="text" name="lname"  value={formData.lname}
                            onChange={handleChange} required="" class="form-control" placeholder="First Name"/>
                                </div>
                                </div>
                            </div>
							<div class="col-md-12">
                                <div class="abutYorPr">
                                    <label class="form-label">Email Address</label>
                                    <input type="string" name="email" value={formData.email}
                            onChange={handleChange}  required="" class="form-control" placeholder="Email address"/>
                                </div>
                            </div>

							<div class="col-md-6">
                                <div class="abutYorPr">
                                    <label class="form-label">Select Service Category *</label> 
                                         <select class="form-select" name="service_category"  value={formData.service_category}
                            onChange={handleChange}>  
										 <option>Select Category</option>
										 <option>End to end publication support</option>
										 <option>Advance editing support</option>
										 <option>Journal selection assistance</option>
										 <option>Pre submission peer review</option>
										 <option>Formatting and typesetting</option>
										 <option>Plagiarism check and proofreading</option>
										 <option>Journal submission support</option>
										 <option>Rejected paper editing</option>
										 <option>Grant writing</option>
										 <option>Statistical Analysis</option>
										 <option>Abstract writing support</option>
										 </select> 
                                  </div>
                            </div> 

                            </div> 
                            <div class="col-md-6">
                                <div class="abutYorPr">
                                    <label class="form-label">Phone Number *</label>
                            <PhoneInput
                                country={"us"}
                                enableSearch={false} 
                                placeholder="Phone Number"
                                value={formData.mobileNo}
                                onChange={handlePhoneOnChange}
                                // onChange={(phone) => setMobile(phone)}
                                />
                                </div>
                                </div>
                                <div class="col-md-6">
                                <div class="abutYorPr">
                                    <label class="form-label">Approximate Word Count *</label> 
                                          <input type="number" name="word_count" value={formData.word_count}
                                onChange={handleChange} required="" class="form-control" maxlength="10" placeholder=""/>
                                  </div>
                            </div>
							
                            <div class="col-md-12">
							<div class="fbtmtxt"><p>You will receive a call from our service experts within 15 minutes of filling up this form to understand your detailed requirement and provide you the solution</p></div>

                                <div class="text-start abutYorPr mt-3"><input type="submit" class="btnClor" value="Submit" name="submit"/></div>
                            </div>
                            </form>
                        </div>
                </div>
                </div>
            </div>
        </div>
        </section>

        <script src="./Get A Quote_files/jquery.min.js(1).download"></script>
<script src="./Get A Quote_files/utils.js.download"></script>
<script src="./Get A Quote_files/intlTelInput-jquery.js.download"></script>

        </>
    )
}}
export default GetQuote