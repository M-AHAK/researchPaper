import React from "react";
import Link from 'next/link'
import { useEffect } from "react";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

const Compare =()=>{

   // useEffect(() => {
   //    $(document).ready(function() {
   //      var bigimage = $("#big");
   //      var thumbs = $("#thumbs");
   //      var syncedSecondary = true;
  
   //      bigimage
   //        .owlCarousel({
   //          items: 1,
   //          slideSpeed: 2000,
   //          nav: false,
   //          autoplay: false,
   //          dots: false,
   //          loop: true,
   //          responsiveRefreshRate: 200,
   //          navText: [
   //            '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
   //            '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
   //          ]
   //        })
   //        .on("changed.owl.carousel", syncPosition);
  
   //      thumbs
   //        .on("initialized.owl.carousel", function() {
   //          thumbs
   //            .find(".owl-item")
   //            .eq(0)
   //            .addClass("current");
   //        })
   //        .owlCarousel({
   //          items: 4,
   //          dots: false,
   //          nav: true,
   //          navText: [
   //            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
   //            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
   //          ],
   //          smartSpeed: 200,
   //          slideSpeed: 500,
   //          slideBy: 4,
   //          responsiveRefreshRate: 100
   //        })
   //        .on("changed.owl.carousel", syncPosition2);
  
   //      function syncPosition(el) {
   //        var count = el.item.count - 1;
   //        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
  
   //        if (current < 0) {
   //          current = count;
   //        }
   //        if (current > count) {
   //          current = 0;
   //        }
  
   //        thumbs
   //          .find(".owl-item")
   //          .removeClass("current")
   //          .eq(current)
   //          .addClass("current");
   //        var onscreen = thumbs.find(".owl-item.active").length - 1;
   //        var start = thumbs
   //          .find(".owl-item.active")
   //          .first()
   //          .index();
   //        var end = thumbs
   //          .find(".owl-item.active")
   //          .last()
   //          .index();
  
   //        if (current > end) {
   //          thumbs.data("owl.carousel").to(current, 100, true);
   //        }
   //        if (current < start) {
   //          thumbs.data("owl.carousel").to(current - onscreen, 100, true);
   //        }
   //      }
  
   //      function syncPosition2(el) {
   //        if (syncedSecondary) {
   //          var number = el.item.index;
   //          bigimage.data("owl.carousel").to(number, 100, true);
   //        }
   //      }
  
   //      thumbs.on("click", ".owl-item", function(e) {
   //        e.preventDefault();
   //        var number = $(this).index();
   //        bigimage.data("owl.carousel").to(number, 300, true);
   //      });
   //    });
   //  }, []);
  

    return(
        <>
        
        <div class="clearfix"></div><section class="banner-home">
   <div class="container">
      <div class="row">
         <div class="col-md-6 text-left mb-4">
            <div class="text-banner">
               <h1>Re-invent your publication journey.</h1>
               <p>Increase acceptance chances through robust journal-readiness support</p>
               <ul class="get-quote ">
                  <li><Link href="/get-a-quote" class="active">Get an Estimate Now</Link></li>
               </ul>
            </div>
         </div>
         <div class="col-md-6 text-center">
            <div class="bannerHImg"><img src="/assets/images/compare/aaccelerate-the-process-of-publishing.png" class="img-fluid pb-5" alt=""/>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="sec sec-editingfull">
   <div class="container">
      <div class="row">
         <div class="col-md-12 text-center">
            <div class="editingfull">
               <ul>
                  <li><Link href="/advance-editing-full-support-pac">Advance Editing Full Support Pack </Link></li>
                  <li><Link href="/advance-editing-easy-go-pack">Advance Editing Easy-Go Pack </Link></li>
                  <li><Link href="/custom-pack">Custom Pack </Link></li>
                  <li><Link href="/compare" class="active"> Compare</Link></li>
               </ul>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-md-6 text-left">
            <div class="manuscriptBTx pt-0">
               <div class="manuscripttext pl-0 border-0 mt-3">
                  <p><strong>We offer the services that are available from the point your research ends. We have a one-stop shop for premium editorial and production services throughout the process of your journal submission with our advanced editing full support package. </strong> </p>
                  <p>From assisting you in choosing the best journal to gaining feedback on the caliber of your papers from industry professionals to have your manuscript edited, formatted, and submitted. We are here to guide and help you through every step of the process without being much of a hassle. </p>
                  <div class="text-left mt-4"><Link href="/get-a-quote" class="btnClor">Get Customized Quote</Link></div>
               </div>
            </div>
         </div>
         <div class="col-md-5 text-left CompareDarck ml-auto">
            <div class="alsoinclude bg-darkblue">
               <p>After receiving a rejection, Rejection Shield makes sure your article is prepared for resubmission and is limitless for up to a year or until journal acceptance.</p>
               {/* <!--<div class="CompareDarckbtn"><a href="#" class="text-red">Read More <i class="fas fa-angle-double-right"></i></a></div>--> */}
            </div>
         </div>
      </div>
   </div>
</section>

<section class="sec startDPlnbg bg-lightgray">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="bg-white startDPln">
               <div class="">
                  <div class="table-responsive startDPlnTbale bg-white text-center">
                     <table class="table">
                        <thead>
                           <tr>
                              <th>
                                 <div class="">Start Your Plan</div>
                              </th>
                              <th class="empt">
                                 <div class=""></div>
                              </th>
                              <th class="covr1">
                                 <div class=""></div>
                              </th>
                              <th>
                                 <div class="">Basic</div>
                              </th>
                              <th class="covr1">
                                 <div class=""></div>
                              </th>
                              <th class="empt">
                                 <div class=""></div>
                              </th>
                              <th class="covr1">
                                 <div class=""></div>
                              </th>
                              <th>
                                 <div class="">Advance</div>
                              </th>
                              <th class="covr1">
                                 <div class=""></div>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <div class="">Journal Selection</div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-times"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div class="">Pre-Submission Peer Review</div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-times"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div class="">
                                    <div class="">Substantive Editing</div>
                                    {/* <!-- <ul>
                                       <li>Word Count Reduction</li>
                                    </ul> --> */}
                                 </div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div class="">
                                    <div class="">Plagiarism Check </div>
                                 </div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>

                           <tr>
                              <td>
                                 <div class="">
                                    <div class="">SEAMLESS JOURNAL SUBMISSION</div>
                                    {/* <!-- <ul>
                                       <li>Formatting</li>
                                       <li>Artwork Editing</li>
                                       <li>Proofreading</li>
                                       <li>Cover Letter</li>
                                    </ul> --> */}
                                 </div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>

                           <tr>
                              <td>
                                 <div class="">
                                    <div class="">FORMATTING AND ARTWORK EDITING</div>
                                 </div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div class="">
                                    <div class="">RESUBMISSION ASSISTANCE</div>
                                 </div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>

                           <tr>
                              <td>
                                 <div class="">
                                    <div class="">ARTWORK ENHANCEMENT</div>
                                 </div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div class="">
                                    <div class="">UNLIMITED EDITING</div>
                                 </div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div class="">
                                    <div class="">REJECTION SHIELD</div>
                                 </div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div class="">
                                    <div class="">EXPERT DOUBT SUPPORT</div>
                                 </div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div class="">
                                    <div class="">CERTIFICATE OF EDITING</div>
                                 </div>
                              </td>

                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class=""><i class="fas fa-check"></i></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>

                           <tr class="last-child">
                              <td>
                                 <div class="">  </div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class="startat">
                                    {/* <div class="">Starts at</div>
                                    <div class="stprice">$840</div> */}
                                    <div class=""><Link href="/get-a-quote" class="btnClor">Order Now</Link></div>
                                 </div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td class="empt">
                                 <div class=""></div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                              <td>
                                 <div class="startat">
                                    {/* <div class="">Starts at</div>
                                    <div class="stprice">$840</div> */}
                                    <div class=""><Link href="/get-a-quote" class="btnClor">Order Now</Link> </div>
                                 </div>
                              </td>
                              <td class="covr1">
                                 <div class=""></div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
</div></section>

<section class="sec individualPack">
   <div class="container">
      <div class="row">
         <div class="col-md-12 text-center">
            <div class="hdingh2">
               <h2>You can also buy individual services and make your pack!</h2>
            </div>
         </div>
         <div class="col-md-4 PackStp1">
            <div class="PackStp">
                {/* <div class="d-flex justify-content-between align-items-center">
                  <div class="price text-blue">$99</div>
                  <div class="ChecbX d-flex">
                     <div class="timeDate">Time: 7 Days</div> <label class="check-bxs">
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                     </label>
                  </div>
               </div> */}
               <div class="">
                  <h3>Journal Submission</h3>
                  <p>Our team of experts take over and help you with everything that’s needed to submit your manuscript.</p>
                  <Link href="/compare" class="text-red">View Details</Link>
               </div>
            </div>
         </div>
         <div class="col-md-4 PackStp1">
            <div class="PackStp">
            {/* <div class="d-flex justify-content-between align-items-center">
                  <div class="price text-green">$99</div>
                  <div class="ChecbX d-flex">
                     <div class="timeDate">Time: 7 Days</div> <label class="check-bxs">
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                     </label>
                  </div>
               </div> */}
               <div class="">
                  <h3>Journal Recommendation</h3>
                  <p>Our experts go through your manuscript and recommend the top 3 to 5 most suitable journals.</p>
                  <Link href="/compare" class="text-red">View Details</Link>
               </div>
            </div>
         </div>
         <div class="col-md-4 PackStp1">
            <div class="PackStp">
               {/* <div class="d-flex justify-content-between align-items-center">
                  <div class="price text-darkblue">$99</div>
                  <div class="ChecbX d-flex">
                     <div class="timeDate">Time: 7 Days</div> <label class="check-bxs">
                        <input type="checkbox" checked="checked"/>
                        <span class="checkmark"></span>
                     </label>
                  </div>
               </div> */}
               <div class="">
                  <h3>Artwork Formatting</h3>
                  <p>Our graphic design specialists understand technical artwork guidelines and can modify complex figures with great accuracy and aesthetic improvements.</p>
                  <Link href="/compare" class="text-red">View Details</Link>
               </div>
            </div>
         </div>
         <div class="col-md-4 PackStp1">
            <div class="PackStp">
               {/* <div class="d-flex justify-content-between align-items-center">
                  <div class="price text-darkblue">$99</div>
                  <div class="ChecbX d-flex">
                     <div class="timeDate">Time: 7 Days</div> <label class="check-bxs">
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                     </label>
                  </div>
               </div> */}
               <div class="">
                  <h3>Plagiarism Check</h3>
                  <p>Our plagiarism check helps you identify parts of your manuscript that may get flagged by the journal for accidental plagiarism. </p>
                  <Link href="/compare" class="text-red">View Details</Link>
               </div>
            </div>
         </div>

         <div class="col-md-4 PackStp1">
            <div class="PackStp active">
                {/* <div class="d-flex justify-content-between align-items-center">
                  <div class="price text-darkblue">$99</div>
                  <div class="ChecbX d-flex">
                     <div class="timeDate">Time: 7 Days</div> <label class="check-bxs checkboxBlue">
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                     </label>
                  </div>
               </div> */}
               <div class="">
                  <h3>Premium Editing</h3>
                  <p>Improve the language, structure, &amp; flow of your manuscript and get unlimited re-editing and reformatting support for multiple journals</p>
                  <Link href="/compare" class="text-red">View Details</Link>
               </div>
            </div>
         </div>

         <div class="col-md-4 PackStp1">
            <div class="PackStp pre-sub">
               {/* <div class="d-flex justify-content-between align-items-center">
                  <div class="price text-yellow">$99</div>
                  <div class="ChecbX d-flex">
                     <div class="timeDate">Time: 7 Days</div> <label class="check-bxs checkboxYellow">
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                     </label>
                  </div>
               </div> */}
               <div class="">
                  <h3 class="text-yellow">Pre-submission Peer Review</h3>
                  <p>Our experts identify gaps in your methodology with a thorough technical review before your paper is submitted to your target journal.</p>
                  <Link href="/compare" class="text-red">View Details</Link>
               </div>
            </div>
         </div>

         <div class="col-md-12 text-center">
            <div class="text-center mt-4"><Link href="/get-a-quote" class="btnClor">Enquire now</Link></div>
         </div>
{/* 
         <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center noneneed">
               <div class="">
                  <h3>None of the aforementioned services are what you need? </h3>
                  <p>If all you need is editing help, we provide a wide range of options to suit different requirements and price ranges.</p>
               </div>
               <div class="">
                  <a href="#" class="text-blue">Click here to know more.</a>
               </div>
            </div>

         </div> */}
      </div>
   </div>
</section>


<section class="sec sec-researchersSupport bg-blue">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="outer rchersSupport row">
               <div class="col-md-4">
                  <div class="hdingh2">
                     <h2 class="text-white">Why researchers choose our Publication Support Services</h2>
                  </div>
                  <div class="">
                     <div id="thumbs" class="owl-carousel owl-theme owl-loaded owl-drag">
                        
                     <div class="owl-stage-outer"><div class="owl-stage" style={{transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "460px"}}><div class="owl-item active current" style={{width: "92px"}}><div class="item">
                           <div class="thumbsSldImg">
                              <span><img src="./Compare _ Research Paper_files/img-1.png" class="img-fluid" alt=""/></span>
                           </div>
                        </div></div><div class="owl-item active" style={{width: "92px"}}><div class="item">
                           <div class="thumbsSldImg">
                              <span><img src="./Compare _ Research Paper_files/img-2.png" class="img-fluid" alt=""/></span>
                           </div>
                        </div></div><div class="owl-item active" style={{width: "92px"}}><div class="item">
                           <div class="thumbsSldImg">
                              <span><img src="./Compare _ Research Paper_files/img-3.png" class="img-fluid" alt=""/></span>
                           </div>
                        </div></div><div class="owl-item active" style={{width: "92px"}}><div class="item">
                           <div class="thumbsSldImg">
                              <span><img src="./Compare _ Research Paper_files/img-4.png" class="img-fluid" alt=""/></span>
                           </div>
                        </div></div><div class="owl-item" style={{width: "92px"}}><div class="item">
                           <div class="thumbsSldImg">
                              <span><img src="./Compare _ Research Paper_files/img-2.png" class="img-fluid" alt=""/></span>
                           </div>
                        </div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev disabled"><i class="fa fa-angle-left" aria-hidden="true"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button></div><div class="owl-dots disabled"></div></div>
                  </div>
               </div>
               <div class="col-md-8">
                  <div id="big" class="owl-carousel owl-theme testimonail-Slider owl-loaded owl-drag">
                     
                     
                     
                  <div class="owl-stage-outer"><div class="owl-stage" style={{transform: "translate3d(-2520px, 0px, 0px)", transition: "all 0s ease 0s", width: "9240px"}}><div class="owl-item cloned" style={{width: "840px"}}><div class="item">
                        <div class="d-flex align-items-center">
                           <div class="slidrImg">
                              <div class=""><span><img src="./Compare _ Research Paper_files/img-1(1).png" class="img-fluid" alt=""/></span></div>
                           </div>
                           <div class="testimonail-Slider1 bg-white">
                              <div class="">
                                 <p>“Its really a high quality editing service and I'm quite pleased about the work. If an author is seeking qualified writing and publication support, this is really true address.”</p>
                                 <div class="clintXmn1">
                                    <h4><span>Ugur Erdemir , Associate Professor</span>
                                       Istanbul University
                                    </h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div></div><div class="owl-item cloned" style={{width: "840px"}}><div class="item">
                        <div class="d-flex align-items-center">
                           <div class="slidrImg">
                              <div class=""><span><img src="./Compare _ Research Paper_files/img-1(1).png" class="img-fluid" alt=""/></span></div>
                           </div>
                           <div class="testimonail-Slider1 bg-white">
                              <div class="">
                                 <p>“Its really a high quality editing service and I'm quite pleased about the work. If an author is seeking qualified writing and publication support, this is really true address.”</p>
                                 <div class="clintXmn1">
                                    <h4><span>Ugur Erdemir , Associate Professor</span>
                                       Istanbul University
                                    </h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div></div><div class="owl-item cloned" style={{width: "840px"}}><div class="item">
                        <div class="d-flex align-items-center">
                           <div class="slidrImg">
                              <div class=""><span><img src="./Compare _ Research Paper_files/img-1(1).png" class="img-fluid" alt=""/></span></div>
                           </div>
                           <div class="testimonail-Slider1 bg-white">
                              <div class="">
                                 <p>“Its really a high quality editing service and I'm quite pleased about the work. If an author is seeking qualified writing and publication support, this is really true address.”</p>
                                 <div class="clintXmn1">
                                    <h4><span>Ugur Erdemir , Associate Professor</span>
                                       Istanbul University
                                    </h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div></div><div class="owl-item active" style={{width: "840px"}}><div class="item">
                        <div class="d-flex align-items-center">
                           <div class="slidrImg">
                              <div class=""><span><img src="./Compare _ Research Paper_files/img-1(1).png" class="img-fluid" alt=""/></span></div>
                           </div>
                           <div class="testimonail-Slider1 bg-white">
                              <div class="">
                                 <p>“Its really a high quality editing service and I'm quite pleased about the work. If an author is seeking qualified writing and publication support, this is really true address.”</p>
                                 <div class="clintXmn1">
                                    <h4><span>Ugur Erdemir , Associate Professor</span>
                                       Istanbul University
                                    </h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div></div><div class="owl-item" style={{width: "840px"}}><div class="item">
                        <div class="d-flex align-items-center">
                           <div class="slidrImg">
                              <div class=""><span><img src="./Compare _ Research Paper_files/img-1(1).png" class="img-fluid" alt=""/></span></div>
                           </div>
                           <div class="testimonail-Slider1 bg-white">
                              <div class="">
                                 <p>“Its really a high quality editing service and I'm quite pleased about the work. If an author is seeking qualified writing and publication support, this is really true address.”</p>
                                 <div class="clintXmn1">
                                    <h4><span>Ugur Erdemir , Associate Professor</span>
                                       Istanbul University
                                    </h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div></div><div class="owl-item" style={{width: "840px"}}><div class="item">
                        <div class="d-flex align-items-center">
                           <div class="slidrImg">
                              <div class=""><span><img src="./Compare _ Research Paper_files/img-1(1).png" class="img-fluid" alt=""/></span></div>
                           </div>
                           <div class="testimonail-Slider1 bg-white">
                              <div class="">
                                 <p>“Its really a high quality editing service and I'm quite pleased about the work. If an author is seeking qualified writing and publication support, this is really true address.”</p>
                                 <div class="clintXmn1">
                                    <h4><span>Ugur Erdemir , Associate Professor</span>
                                       Istanbul University
                                    </h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div></div><div class="owl-item" style={{width: "840px"}}><div class="item">
                        <div class="d-flex align-items-center">
                           <div class="slidrImg">
                              <div class=""><span><img src="./Compare _ Research Paper_files/img-1(1).png" class="img-fluid" alt=""/></span></div>
                           </div>
                           <div class="testimonail-Slider1 bg-white">
                              <div class="">
                                 <p>“Its really a high quality editing service and I'm quite pleased about the work. If an author is seeking qualified writing and publication support, this is really true address.”</p>
                                 <div class="clintXmn1">
                                    <h4><span>Ugur Erdemir , Associate Professor</span>
                                       Istanbul University
                                    </h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div></div><div class="owl-item" style={{width: "840px"}}><div class="item">
                        <div class="d-flex align-items-center">
                           <div class="slidrImg">
                              <div class=""><span><img src="./Compare _ Research Paper_files/img-1(1).png" class="img-fluid" alt=""/></span></div>
                           </div>
                           <div class="testimonail-Slider1 bg-white">
                              <div class="">
                                 <p>“Its really a high quality editing service and I'm quite pleased about the work. If an author is seeking qualified writing and publication support, this is really true address.”</p>
                                 <div class="clintXmn1">
                                    <h4><span>Ugur Erdemir , Associate Professor</span>
                                       Istanbul University
                                    </h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div></div><div class="owl-item cloned" style={{width: "840px"}}><div class="item">
                        <div class="d-flex align-items-center">
                           <div class="slidrImg">
                              <div class=""><span><img src="./Compare _ Research Paper_files/img-1(1).png" class="img-fluid" alt=""/></span></div>
                           </div>
                           <div class="testimonail-Slider1 bg-white">
                              <div class="">
                                 <p>“Its really a high quality editing service and I'm quite pleased about the work. If an author is seeking qualified writing and publication support, this is really true address.”</p>
                                 <div class="clintXmn1">
                                    <h4><span>Ugur Erdemir , Associate Professor</span>
                                       Istanbul University
                                    </h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div></div><div class="owl-item cloned" style={{width: "840px"}}><div class="item">
                        <div class="d-flex align-items-center">
                           <div class="slidrImg">
                              <div class=""><span><img src="./Compare _ Research Paper_files/img-1(1).png" class="img-fluid" alt=""/></span></div>
                           </div>
                           <div class="testimonail-Slider1 bg-white">
                              <div class="">
                                 <p>“Its really a high quality editing service and I'm quite pleased about the work. If an author is seeking qualified writing and publication support, this is really true address.”</p>
                                 <div class="clintXmn1">
                                    <h4><span>Ugur Erdemir , Associate Professor</span>
                                       Istanbul University
                                    </h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div></div><div class="owl-item cloned" style={{width: "840px"}}><div class="item">
                        <div class="d-flex align-items-center">
                           <div class="slidrImg">
                              <div class=""><span><img src="./Compare _ Research Paper_files/img-1(1).png" class="img-fluid" alt=""/></span></div>
                           </div>
                           <div class="testimonail-Slider1 bg-white">
                              <div class="">
                                 <p>“Its really a high quality editing service and I'm quite pleased about the work. If an author is seeking qualified writing and publication support, this is really true address.”</p>
                                 <div class="clintXmn1">
                                    <h4><span>Ugur Erdemir , Associate Professor</span>
                                       Istanbul University
                                    </h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button></div><div class="owl-dots disabled"></div></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>


<section class="sec sec-scientific">
   <div class="container">
      <div class="row">
         <div class="col-md-6 text-center">
            <div class="scientificImg"><span>1100+</span><img src="/assets/images/compare/scientific-img.png" class="img-fluid" alt=""/>
            </div>
         </div>
         <div class="col-md-6 text-left">
            <div class="scientificText">
               <h3>Scientific Societies</h3>
               <p>are associated with <span>Researchpaper</span> across the globe</p>
            </div>
         </div>
         </div>
</div></section>


<section class="sec-promise bg-darkblue">
   <div class="container">
      <div class="row">
         <div class="col-md-6 col-lg-3 text-center">
            <div class="promise1">
               <p>The ResearchPaper </p>
               <h2>Guarantee</h2>
               <span><img src="/assets/images/compare/quality-icon.svg" class="img-fluid" alt=""/></span>
               <h3>( Best Quality, Least Price )</h3>
               <Link href="/compare">Let’s Get Started</Link>
            </div>
         </div>
         <div class="col-md-6 col-lg-3 text-center">
            <div class="promise2">
               <span class="img"><img src="/assets/images/compare/icon2.svg" class="img-fluid" alt=""/></span>
               <h3>100% Top-Rated <span>Guarantee</span> </h3>
               <p>In the extremely unlikely event that you are not delighted with our work, we will revise it until you are. </p>
               <div class="promiseTxts">
                  <p>Furthermore, you receive a complete refund with no questions asked if you are still unsatisfied. </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-3 text-center">
            <div class="promise2">
               <span class="img"><img src="/assets/images/compare/icon3.svg" class="img-fluid" alt=""/></span>
               <h3>Always <span>punctual </span></h3>
               <p>We always assist you in meeting deadlines, frequently by completing work in just 8 hours. </p>
               <div class="promiseTxts">
                  <p>Additionally, we provide a full refund if we ever fail to meet a deadline by even a single minute. </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-3 text-center">
            <div class="promise2">
               <span class="img"><img src="/assets/images/compare/icon4.svg" class="img-fluid" alt=""/></span>
               <h3>Maximum Level of <span>Data Security</span></h3>
               <p>We make a strong effort to protect your work by enforcing a tight NDA on all of our specialists and staff. </p>
               <div class="promiseTxts">
                  <p>Our most recent ISO-compliant systems (ISO/IEC 27001:2013 certified) keep your files secure as well.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   </section>


        </>
    )
}
export default Compare