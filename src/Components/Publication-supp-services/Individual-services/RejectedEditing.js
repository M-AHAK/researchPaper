import React from "react";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
import Link from 'next/link'
import { rejectedfaq } from "../Add-services-Info/Faqconst";
import rejected from "./Rejected";

const RejectedEditing =()=>{
    return(
        <>

 
        <div class="clearfix"></div>
        <section class="banner-home">
  <div class="container">
    <div class="row">
      <div class="col-md-6 text-left mb-4">
        <div class="text-banner">
          <h1>Revised / Rejected Paper editing services </h1>
          <p>One of the most frustrating parts of being a research scientist is when your work doesn't meet the exact standard that is required for publication. However, it is important to remember that this process is always a part of the learning curve and that every paper will have its unique challenges. If you've already tried different revisions but still haven't been able to get your manuscript accepted, then you might be thinking of giving up but here comes our expertise of rewriting and resubmitting the work without failing.</p>
          <ul class="get-quote">
                <li><Link href="/get-a-quote" class="active">Get an Estimate Now</Link></li>
               </ul>
        </div>
      </div>
      <div class="col-md-6 text-center">
        <div class="bannerHImg"><img src="/assets/images/rejected-paper-editing/revised-rejected-paper-editing-services.png" class="img-fluid" alt=""/> </div>
      </div>
    </div>
  </div>
</section>

<section class="client-icons">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        
      <OwlCarousel
key={Math.random()}
className="owl-carousel owl-theme client-slider1 owl-loaded owl-drag"
loop ={true}
autoplay={true}
nav ={false}
dots={false}
margin={30}
responsiveClass= {true}
responsive= {{
0: {
items: 3,
},
600: {
items: 5,
},
1000: {
items: 10,
},
}}
>           

        <div class="owl-stage-outer"><div class="owl-stage" style={{transform: "translate3d(-1958px, 0px, 0px)", transition: "all 0.25s ease 0s", width: "3788px"}}><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/textbookrush.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/cambridge.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/cocubes.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/dreamtechpress.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/fitkids.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/niitnguru.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/schiffer.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/scholor.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/sifytechnologies.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/textbookrush.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/cambridge.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/cocubes.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/dreamtechpress.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/fitkids.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/niitnguru.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item active" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/schiffer.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item active" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/scholor.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item active" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/sifytechnologies.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item active" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/textbookrush.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned active" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/cambridge.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned active" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/cocubes.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned active" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/dreamtechpress.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned active" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/fitkids.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned active" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/niitnguru.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned active" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/schiffer.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/scholor.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/sifytechnologies.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/textbookrush.webp" class="img-fluid" alt=""/></a></div></div><div class="owl-item cloned" style={{width: "120.6px", marginRight: "10px"}}><div class="item"><a href="javascript:void(0);"><img src="/assets/images/rejected-paper-editing/cambridge.webp" class="img-fluid" alt=""/></a></div></div></div></div>
        {/* <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div>
        <div class="owl-dots disabled"></div> */}
        </OwlCarousel>
        </div>
      </div>
    </div>
</section>
  

<section class="sec sec-manuscript">
  <div class="container">
    <div class="row">
      <div class="col-md-8 text-left">
        <div class="manuscriptBTx">
          <h2>Advantages of The Journal Selection Assistant Service</h2>
          <div class="manuscripttext pl-0 border-0">
            <p>We thoroughly review your manuscript and match it with a database of international journals, such as SCI, SSCI, Web of Science, Scopus, etc., to recommend the top 3-5 journals for better chances of publication. However, some journal recommendations are based on the author's preferences and the manuscript's quality, and some are only based on the manuscript's quality. If our recommended journals reject your manuscript due to a scope mismatch, we will provide a maximum of 2 additional journal recommendations.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 text-right">
        <div class="imgget imgget2"> <span><img src="/assets/images/rejected-paper-editing/advantages-of-the-journal-selection-assistant-service.png" class="img-fluid" alt=""/></span>  </div>
      </div>
    </div>
    <div class="col-md-12 text-left">
      <div class="ourhighlyT">
        <h3>Our highly experienced subject-matter experts will provide vital feedback on:</h3>
        <ul>
          <li><span class="icon"><i class="fas fa-check"></i></span>Language of the manuscript</li>
          <li><span class="icon"><i class="fas fa-check"></i></span>Publication readiness in its current state and required changes</li>
          <li><span class="icon"><i class="fas fa-check"></i></span>Significance of results</li>
          <li><span class="icon"><i class="fas fa-check"></i></span>Manuscript length vis-à-vis the suggested journals</li>
          <li><span class="icon"><i class="fas fa-check"></i></span>Whether all the findings are appropriately stated and backed by substantial evidence</li>
          <li><span class="icon"><i class="fas fa-check"></i></span>Novelty of researc</li>
        </ul>
      </div>
      <div class="ourhighlyT mt-4">
        <h3>Reasons why you might need Editing Services: </h3>
        <ul>
          <li><span class="icon"><i class="fas fa-check"></i></span>Revised/rejected something while you were writing, and someone else checked the accuracy of your work.</li>
          <li><span class="icon"><i class="fas fa-check"></i></span>You may have made mistakes while editing or need help correcting them.</li>
          <li><span class="icon"><i class="fas fa-check"></i></span>Your document is way too long and needs to be split into multiple parts for easier reading/transcription/translation.</li>
          <li><span class="icon"><i class="fas fa-check"></i></span>A section of your text is in one language, but the others are in another, and you want each section properly edited so that there are no linguistic errors present.</li>
        </ul>
      </div>
	  <div class="">
 <ul class="get-quote mt-4">
 <li><Link href="/get-a-quote" class="active">Get Customized Quote</Link></li>
 </ul> 
 </div>
    </div>
  </div>
</section>


<section class="sec">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="hdingh2">
          <h2>Let’s have a look at the client type who may seek help at revised paper editing </h2>
        </div>
      </div>
      <div class="col-md-12">


<div class="shortlistBg shortli2">

      { rejected.map((reject) => (

  
          <div class="text-center shortlist" dangerouslySetInnerHTML={{ __html: reject.content}}> 
          </div>


))}
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
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>
      <div class="col-md-12 text-left">
        <div class="accordion" id="accordionExample">


        {rejectedfaq.map((faq) => (
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

        </div>
      </div>
    </div>
  </div>
</section>


<section class="secfqsNew">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="">
          <h2>Reasons why you might need Editing Services for your Research Paper?</h2>
          <ul>
            <li>Revised/rejected something while you were writing and someone else checked the accuracy of your work.</li>
            <li>You may have made mistakes while editing or need help correcting them.</li>
            <li>Your document is longer than normal and needs to be split into multiple parts for easier reading/transcription/translation.</li>
            <li>One section of your text is in one language but the rest is in another, and you want each section properly edited so that there are no linguistic errors present.</li>
          </ul>
          <h3>Benefits of Expert Revision Editing Services</h3>
          <p>Revised/rejected editing services include: catching mistakes before they go live on your website, correcting grammar and spelling errors, tightening up sentence structure, improving readability and putting together accurate research paper format, reducing clutter and noise on pages, eliminating unidiomatic word usage, enhancing headings and subheadings with specific information in them.</p>

          <ul>
            <li>tighter word counts/less reworking needed</li>
            <li>the accurate final product, early detection of mistakes</li>
            <li>fewer rejections and improved confidence while submitting work.</li>
          </ul>
          <h3>Our Expert Services for Rejected Research Paper Publication</h3>
          <ul>

            <li>Edit your work carefully and thoroughly to make sure that all grammar mistakes are corrected, typos eradicated, and inconsistencies in sentence structure addressed before getting the published paper.</li>
            <li>Make sure that all research has been properly cited and that any data or statistics used have been validated according to agreed-upon standards.</li>
            <li>Address any changes in nomenclature made during peer review if they were not asked for beforehand (this is especially splitting with terminology such as sex/gender)</li>
            <li>Once revisions are complete, we provide expert advice to review them before submitting them again for further scrutiny by an editorial board or individual reviewers (depending on the journal).</li>
          </ul>
          <h3>How can we help you?</h3>
          <p>Our two rounds of Substantive Editing specializing in your research field will ensure that your work is properly edited and proofread. A revision may include fixing grammar and spelling mistakes, correcting inconsistencies in your research outline, adjusting sentence structure, and making sure your arguments are logically organized. </p>
          <p>Our team will ensure that your revised manuscript fully addresses the issues raised by the reviewers and that it is error-free. In addition, our team will help you polish the research paper manuscript for a better presentation</p>
          <ul>
            <li>We ensure that all questions are answered in your reply to the reviewer's letter. </li>
            <li>We want your revised manuscript to be as perfect as possible so that it receives positive feedback from reviewers and ultimately gets published.</li>
          </ul>

          <h3>Re-writing rounds </h3>
          <p>We ensure that your paper is revised at least twice before it is ready for final editing. This will help ensure that all of your mistakes have been corrected and that the content is well-organized and engaging. Once we have completed our initial review, our experts will then need to revise the paper again to get it perfect from a stylistic perspective. Our Editing Department strives for perfection, so please don't hesitate to contact us if you find any typos or formatting errors after you receive your edited copy.</p>
          <h3>We Deliver</h3>
          <ul>
            <li>- Quality paper writing that meets your specifications.</li>
            <li>- Customizable writing that meets your specific needs.</li>
            <li>- On-time delivery that guarantees your satisfaction.</li>
            <li>- You get a paper that is well-researched, error-fre,e and follows all the required research formatting and mla or apa style paper guidelines.</li>
            <li>- We follow a strict plagiarism detection process to ensure that all our papers are original.</li>
          </ul>

          <h3>Our Well-defined process for providing Continuous support.</h3>
          <p>Our support team will</p>
          <ul>
            <li>constantly monitor the journal for any issues that might crop up and resolve them as soon as possible.</li>
            <li>Proactively monitor the journal submissions-submissions process.</li>
            <li>kin touch with the authors at regular intervals to check on the status of their submissions</li>
            <li> Unlimited times of re-editing up to 30% of the content, Editing your reply to rev viewer letter, and Reformatting your manuscript (allowing changes of journals)New cover supports you with content editing through email or phone calls to ensure that you are fully satisfied with our services.</li>
          </ul>

        </div>
      </div>
    </div>
  </div>

</section>

        </>
    )
}
export default RejectedEditing