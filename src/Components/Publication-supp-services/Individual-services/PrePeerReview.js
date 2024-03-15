import React from "react"
import Link from 'next/link'
import PrePeerconst from "./PrePeerconst"
import { prePeerfaq } from "../Add-services-Info/Faqconst"

const PrePeerReview =()=>{
    return(
        <>
        <div class="clearfix"></div><section class="banner-home">
   <div class="container">
      <div class="row">
         <div class="col-md-6 text-left mb-4">
            <div class="text-banner">
               <h1>Pre-submission Peer Review Service </h1>
               <p>A pre-submission peer review service provides you with the opportunity to have your article reviewed by field experts before it is submitted for publication. This reduces the number of mistakes that may be made during manuscript preparation, makes sure that your article meets all standards required by journals, and improves the chances of being published in a top-tier journal.</p>
<p>Pre-submission peer review helps your research paper to be reviewed by any peer or a group of peers before submitting it to a journal. Here, field experts other than the co-authors review the paper. This not only enhances the quality of the research analysis paper but reduces the overall load on the peer-review system of journals.</p>
            <ul class="get-quote">
                <li><Link href="/get-a-quote" class="active">Get an Estimate Now</Link></li>
               </ul>
			</div>
         </div>
         <div class="col-md-6 text-center">
            <div class="bannerHImg"><img src="/assets/images/pre-submission/pre-submission-peer-review-service2.png" class="img-fluid" alt=""/>

            </div>
         </div>
      </div>
   </div>
</section>

<section class="sec sec-manuscript">
   <div class="container">
      <div class="row">
         <div class="col-md-8 text-left">
            <div class="manuscriptBTx">
               <h2>Privileges of Using Research Paper Peer Review Service</h2> 
            </div>
         </div>
         <div class="col-md-4 text-right">
            <div class="imgget imgget2">
               <span><img src="/assets/images/pre-submission/privileges-of-using-research-paper-peer-reviewers-service.png" class="img-fluid" alt=""/></span> 
            </div>
         </div>
		  <div class="col-md-12 text-left">
         <div class="ourhighlyT">
            <h3>Our highly experienced subject-matter experts will provide vital feedback on:</h3>
            <ul>
               <li><span class="icon"><i class="fas fa-check"></i></span> We ensure the accuracy and completeness of your manuscript. </li>

               <li><span class="icon"><i class="fas fa-check"></i></span> Our professionals assist in improving grammar and syntax skills. </li>

               <li><span class="icon"><i class="fas fa-check"></i></span> It serves as an effective tool for refining the content before submission. </li>

               <li><span class="icon"><i class="fas fa-check"></i></span> It increases accuracy in content and makes it highly presentable. </li>

               <li><span class="icon"><i class="fas fa-check"></i></span> We help in speeding up the publishing process by identifying editorial changes that need to be made before the journal submission.</li>


            </ul>
         </div>
      </div>
      </div>
      </div>     
</section>

<section class="sec">

   <div class="container">
      <div class="row">
         <div class="col-md-12 text-center">
            <div class="hdingh2">
               <h2>Process of Conducting Peer Review </h2>
            </div> 
         </div>


            {PrePeerconst.map((process) => (
                        <div class="col-md-4">
                        <div class="shortlistBg">
               <div class="text-center shortlist border-bottom-0"  dangerouslySetInnerHTML={{ __html: process.content}}>
               </div>
         </div>
                  </div>

         ))}



      </div>
   </div>

</section>


<section class="sec sec-manuscript">
   <div class="container">
	     <div class="row"> 
      <div class="col-md-12 text-left">
         <div class="ourhighlyT">
            <h3>Our Final Review Report </h3>

			 <p>The pre-submission peer review service for journal submission from Ph.D. experts provides a comprehensive assessment of your article before submission. The peer review report typically includes the following:  </p>
			 <ul class="mb-4">
               <li><span class="icon"><i class="fas fa-check"></i></span> Target journal suitability analysis to assess if your manuscript is suitable for that particular journal. 

               </li><li><span class="icon"><i class="fas fa-check"></i></span>  Review of the research design and methodology. </li>

               <li><span class="icon"><i class="fas fa-check"></i></span>  Assessment of relevance, importance, and quality of the findings presented in your article(s).</li> 

               <li><span class="icon"><i class="fas fa-check"></i></span> Evaluation of the appropriateness of novel theoretical or methods concepts used by you in this study for this particular journal audience/sectional areas.</li>

               <li><span class="icon"><i class="fas fa-check"></i></span> Evaluation of the feasibility, significance, and originality of your research proposal</li>

               <li><span class="icon"><i class="fas fa-check"></i></span>  Identification of any potential weaknesses or biases in your methods and materials;</li>

               <li><span class="icon"><i class="fas fa-check"></i></span>  Comments on whether you have made adequate use of relevant literature.</li>

            </ul>
			 <p>Finally, recommendations are provided on how to address any issues that were identified.
</p>
 <div class="">
 <ul class="get-quote mt-0">
 <li class="pl-0"><Link href="/get-a-quote" class="active">Enquire now</Link></li>
 </ul> 
 </div>
         </div>
      </div>

   </div>
	</div>
</section>

<section class="sec bg-lightgray deliveryPricBg mb-5">
   <div class="container">
      <div class="row">
         <div class="col-md-12 text-center">
            <div class="hdingh2 bg-white radsb mb-0">
               <h2>Delivery and Pricing</h2>
               <h3>Our expert reviewer will recommend a list of 3-5 journals based on the following factors:</h3>
            </div>
         </div>

         <div class="col-md-12">
            <div class="deliveryPric">
               <div class="table-responsive bg-white text-center">
                  <table class="table deliveryPric1">
                     <thead>
                        <tr>
                           <th>No. of Reviewers</th>
                           <th>Turnaround Time</th>
                           <th>Price</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              <div class="busDay">1 Reviewer</div>
                           </td>
                           <td>
                              <div class="busDay">7 business days </div>
                           </td>
                           <td>
                              <div class="priceTxt"><span>$</span>288</div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div class="busDay">2 Reviewers</div>
                           </td>
                           <td>
                              <div class="busDay">7 business days </div>
                           </td>
                           <td>
                              <div class="priceTxt"><span>$</span>567</div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div class="busDay">3 Reviewers</div>
                           </td>
                           <td>
                              <div class="busDay">7 business days </div>
                           </td>
                           <td>
                              <div class="priceTxt"><span>$</span>846</div>
                           </td>
                        </tr>


                     </tbody>

                  </table>
               </div>
            </div>

         </div>
      </div>
</div>
</section>
 

	<section class="sec-faqs">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="hdingh2 text-center">
					<h2>FAQs on Peer Review Service </h2>
				</div>
			</div> 
         
         <div class="col-md-12 text-left">
            <div class="accordion" id="accordionExample">
             
            {prePeerfaq.map((faq) => (
            <div class="accordion-item">
                  <h2 class={`accordion-header ${faq.classId}`}>
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${faq.accordionId}`} aria-expanded="false" aria-controls={`${faq.accordionId}`}>
                        <span> {faq.sNo} </span> {faq.header}
                     </button>
                  </h2>
                  <div id={`${faq.accordionId}`} class="accordion-collapse collapse" aria-labelledby={` ${faq.classId}`}data-bs-parent="#accordionExample">
                     <div class="accordion-body">
                     <div dangerouslySetInnerHTML={{ __html: faq.para }} />
                     </div>
                  </div>
               </div>
			))}

                <div class="text-center mt-4"><Link href="/faqs" class="btnClor">View All</Link></div>
            </div>
         </div>
      
		</div>
	</div>
</section>

        </>
    )
}
export default PrePeerReview