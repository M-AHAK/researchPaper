import React from "react";
import Link from 'next/link'

const GrantWriting =()=>{
    return(
        <>
        <div class="clearfix"></div><section class="banner-home psrtv mb-4">
   <div class="container">
      <div class="row">
         <div class="col-md-6 text-left mb-4">
            <div class="text-banner">
               <h1>Grant writing service </h1>
               <p>Looking for someone to help you out to get your research funded? No worries, you have landed on the right page. With the help of our expert grant writers, submit your research grant proposal today and get a competitive edge in the grant-writing process.</p>
             
               <ul class="get-quote">
                 <li><Link href="/get-a-quote" class="active">Get an Estimate Now</Link></li>
               </ul>
            </div>
         </div>
         <div class="col-md-6 text-right">
            <div class="bannerHImg"><img src="/assets/images/grant-writing/grant-writing.png" class="img-fluid" alt=""/>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="sec sec-ourexpert">
   <div class="container">
      <div class="row rtl">
         <div class="col-md-6 text-right">
            <div class="minWt grantImgBG">
               <div class="grantImg"><img src="/assets/images/grant-writing/grant-writing-img.png" class="img-fluid" alt=""/>
               </div>
            </div>
         </div>
         <div class="col-md-6">
            <div class="hdingh2 text-left vidoDvdevelopment">
               <h2>Unlock the potential of getting funded and bring your project to reality!</h2>
               
               <p>Writing a persuasive research grant proposal can be a daunting task. Of course, grabbing the reader’s attention to make your case for funding without overwhelming them with too much information at once. This is where our expert consultants come in. </p>

              <p>Making a persuasive grant proposal can help you secure funding from various sources, including private foundations, non-profit organizations, and philanthropic organizations. By targeting the right audience with content that matches their needs and crafting an appealing story that captures their imagination, our professional can help you succeed. </p> 

              <p>We offer a variety of services that include conceptualization and drafting of comprehensive proposals, proofreading, and editing to ensure the accuracy and cohesiveness of your proposal. We are here to support you throughout your submission process. Our professional writers will help you draft a powerful and engaging proposal that will stand out from the crowd. Let us help you out in boosting the chance to secure the funds!</p>

            </div>
         </div>
      </div>

      <div class="row puttingTxtbg">
         <div class="col-md-4">
            <div class="puttingTxt">
               <div class="PuttingImg"><img src="/assets/images/grant-writing/img1.png" class="img-fluid" alt=""/></div>
               <div class="">
                  <p>We identify government funding opportunities that are relevant to your project or business.  </p>
               </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="puttingTxt">
               <div class="PuttingImg"><img src="/assets/images/grant-writing/img2.png" class="img-fluid" alt=""/></div>
               <div class="">
                  <p>Secondly, we review and assess the potential benefits of every type of funding. </p>
               </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="puttingTxt">
               <div class="PuttingImg"><img src="/assets/images/grant-writing/img3.png" class="img-fluid" alt=""/></div>
               <div class="">
                  <p>Helping you get a competitive bid from someone truly interested in helping you achieve your goals.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="sec sec-ourexpert bg-blue mb-5">
   <div class="container">
      <div class="row rtl">
         <div class="col-md-12 text-center">
            <div class="txcsWhit">
               <h3 class="text-white">We understand that customer satisfaction is important, and thus, we aim to provide our customers with top-notch services at affordable prices. Our experts are well-versed in providing delivery within tight timeframes. In addition, we make sure to comply with all the guidelines and formatting requirements specified by your funding source so that there is no disruption in the process. Our goal is not only to provide grants but ensure that they succeed after receiving them!  </h3>
			    <h3 class="text-white">Get in touch with us now, and let us help you secure the funding you need for your research paper!</h3>
               <div class="text-center mt-4"><Link href="/get-a-quote" class="btnClor">Order now </Link></div>
            </div>
         </div>
      </div>
   </div>
</section>

        </>
    )
}
export default GrantWriting