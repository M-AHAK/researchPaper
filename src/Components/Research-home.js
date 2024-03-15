import React from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { homeFaqs } from './Publication-supp-services/Add-services-Info/Faqconst'

const inter = Inter({ subsets: ['latin'] })
 
const items = [
	{ 
	  icon: "24/7 support",
	  image: "/assets/images/home/24-7-support.svg",
	  data: "Get superior customer service from our experts, who are committed round the clock to making your paper published."
	},

	{
	  icon: "COMPETITIVE COSTING",
	  image: "/assets/images/home/competitive-costing.svg",
	  data: "Researchpaper uses Latest Technology Innovations that help with Cost-competitive services."
	},

	{
	  icon: "High-Quality Delivery",
	  image: "/assets/images/home/high-quality-delivery.svg",
	  data: "Our services are tailored made, and no matter if you are a company or an individual, we guarantee the best cost available in the market."
	},

	{
	  icon: "Global Credibility",
	  image: "/assets/images/home/global-credibility.svg",
	  data: "Research papers being in collaboration with global universities, world leaders, and diverse fields increase the chances of acceptance of your paper."
	},

	{
	  icon: "End to End Publication Assistance",
	  image: "/assets/images/home/end-to-end-publication-assistance.svg",
	  data: "We ensure taking your raw manuscript to a final published paper and help you at all the stages involved."
	},

	{ 
	  icon: "Delivery within the timeline",
	  image: "/assets/images/home/delivery-within-the-timeline.svg",
	  data: "We understand the urgency of research paper publishing and never fail to deliver it before the time requested."
	},

	{
	  icon: "Individual Stage support",
	  image: "/assets/images/home/individual-stage-support.svg",
	  data: "We understand that you may be interested in using only a few of our services, and thus we provide specific stage support as well."
	},

	{
	  icon: "Rejection Shield",
	  image: "/assets/images/home/rejection-shield.svg",
	  data: "As promised, we hold your hand in reworks and resubmissions even if somehow the manuscript gets rejected by a journal."
	}
  ];

  const itemsArray = [
	{
	  image: "/assets/images/home/give-us-your-raw-manuscript.svg",
	  heading: "Give us your raw manuscript",
	  para: "We expect you to hand over the raw manuscript that you have prepared and let us take care of the rest."
	},
	{
	  image: "/assets/images/home/we-make-the-journal-selection.svg",
	  heading: "We make the Journal selection",
	  para: "After a deep and thorough analysis of the manuscript, our experts recommend the top suited 3-5 Journals for publication."
	},
	{
	  image: "/assets/images/home/we-do-the-substantive-editing-and-plagiarism-check.svg",
	  heading: "We do the Substantive editing and Plagiarism Check",
	  para: "Once we know which journals to target, the formatting part comes, which has to be exactly according to the journal guidelines and author’s choice."
	},
	{
	  image: "/assets/images/home/we-do-the-pre-submission-peer-review.svg",
	  heading: "We do the Pre Submission Peer Review",
	  para: "When the manuscript is all formatted, indexed, and edited as per the journal’s guidelines, then comes the peer review process, which is done by our panel of experts."
	},
	{
	  image: "/assets/images/home/we-submit-your-manuscript-for-publication.svg",
	  heading: "We submit your Manuscript for Publication",
	  para: "After we are all set for the submission, we then do a final review, write an authentic cover letter and submit your manuscript for the final publication."
	},
	{
	  image: "/assets/images/home/rejection-shield-revision.svg",
	  heading: "Rejection Shield / Revision",
	  para: "We understand the urgency of your manuscript getting published. Hence, we hold your hand even when the manuscript is rejected by a journal and ensure that it is successfully resubmitted and published."
	}
  ];
  const servicesArray = [
	{
	  image: "/assets/images/home/pre-sub-img1.png",
	  heading: "Typesetting Services",
	  para: "It is easy but a very important step to ensure the texts and images in your manuscript are well aligned, and the indexing is proper before the printing of the final copy.",
	  link: "/"
	},
	{
	  image: "/assets/images/home/pre-sub-img2.png",
	  heading: "Color Formatting",
	  para: "This will ensure the exact right combination of text color on a white page background to make it easily readable for the audience.",
	  link: "/"
	},
	{
	  image: "/assets/images/home/pre-sub-img3.png",
	  heading: "Plagiarism Check",
	  para: "No matter how good the Formatting is, a little plagiarism is more than enough to get your manuscript rejected, and this comes directly on the author's reputation. With us, however, you do not have to worry about it.",
	  link: "/"
	}
  ];  

  const PostArray = [
	{
	  image: "/assets/images/home/english-editing-pg1.png",
	  heading: "Rejection Shield",
	  para: "Our Publication Support offers a customized editing service to assist you with the revision of your research paper wherever and whenever needed, re-submission of your manuscript, and responding to the comments made by the reviewer.",
	  link: "/"
	},
	
	{
	  image: "/assets/images/home/statistical-analysispg1.png",
	  heading: "Submission Report",
	  para: "It is important for you to know transparently about whatever is happening. The submission report will consist of all the necessary details required to understand how exactly the submission has been made and to which journals it has been submitted.",
	  link: "/"
	},
	{
	  image: "/assets/images/home/translations-service-pg1.png",
	  heading: "Certificate of Editing",
	  para: "We will help you with the proper certificate of editing to let you know the exact changes that we have done before the resubmission of your manuscript and takes care of the customized cover letter as well.",
	  link: "/"
	}
  ];
  

export default function Home() {
  return (
    <>

      <div class="clearfix"></div><section class="banner-home">
	<div class="container">
		<div class="row">
			<div class="col-md-6 text-left mb-4">
				<div class="text-banner pt-4">
					<h1>Get the world’s <span>top editors</span> for your next journal publication.</h1>
					<ul class="get-quote mt-5">
						<li><Link href="/get-a-quote" class="active">Get an Estimate Now</Link></li>
					</ul>
				</div>
			</div>
			<div class="col-md-6 text-right">
				<div class="bannerHImg"><img src="/assets/images/home/banner-img.png" class="img-fluid" alt=""/>
					<span class="bannerHicon"><img src="/assets/images/home/banner-icon.png" class="img-fluid" alt=""/></span>
				</div>
			</div>
		</div>
	</div>
</section>   


<section class="ourwork">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<div class="ourclient ourclient1">
				<h3 data-max="800" class="ms-animated">800<span><i class="fas fa-plus"></i></span></h3>
					<span><img src="/assets/images/home/client.svg" class="img-fluid" alt="clients"/></span>
					
					<p>Clients</p>
				</div>
				<div class="ourclient ourclient2">
				<h3 data-max="14" class="ms-animated">14K<span><i class="fas fa-plus"></i></span></h3>
					<span><img src="/assets/images/home/project.svg" class="img-fluid" alt="project"/></span>
					
					<p>Project</p>
				</div>
				<div class="ourclient ourclient3">
				<h3 data-max="250" class="ms-animated">250<span><i class="fas fa-plus"></i></span></h3>
					<span><img src="/assets/images/home/language-support.svg" class="img-fluid" alt="language support"/></span>
					
					<p>Language Support</p>
				</div>
				<div class="ourclient ourclient4">
				<h3 data-max="50" class="ms-animated">50M<span><i class="fas fa-plus"></i></span></h3>
					<span><img src="/assets/images/home/word-translation.svg" class="img-fluid" alt="Word Translation"/></span>
					
					<p>Word Translation</p>
				</div>
				<div class="ourclient ourclient5">
				<h3 data-max="150" class="ms-animated">150<span><i class="fas fa-plus"></i></span></h3>
					<span><img src="/assets/images/home/employees.svg" class="img-fluid" alt="Employees"/></span>
					
					<p>Employees</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="sec-manuscript bg-lightgray">
	<div class="container">
		<div class="row">
			<div class="col-md-8 text-left">
				<div class="manuscriptBTx">
					<h2>We hold your hand till your manuscript gets published in International Journals</h2>
					<div class="manuscripttext">
						<p>We are dedicated to providing top-notch research paper editing and publication support services. Our team of experienced editors specialists has extensive knowledge in academic writing and publishing, ensuring that your research analysis paper meets the highest standards. From editing for grammar, clarity, and consistency to formatting and referencing, we provide comprehensive support to help you turn your research into a publishable paper. Our goal is to help you communicate your research effectively and efficiently and to ensure that your work receives the recognition it deserves. Contact us today to learn more about how we can help you with your research paper needs.</p>
						
					</div>
				</div>
			</div>
			<div class="col-md-4 text-right">
				<div class="imgget">
					<span><img src="/assets/images/home/imgget.png" class="img-fluid" alt=""/></span>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="sec-availability">

<div className="container">
      <div className="row">
	  <div class="hdingh2 text-center">
					<h2>Changing the lives of thousands of writers and letting them get the recognition they deserve. Wondering how?</h2>
				</div>
        {items.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-3 availabis1">
            <div className="availabilitybg">
              <div className="availabilityImg d-flex align-items-center">
                <span>
                  <img src={item.image} alt={item.icon} className="img-fluid" />
                </span>
                <div>
                  <h3>{item.icon}</h3>
                </div>
              </div>
              <div className="availabilityText">
                <p>{item.data}</p>
              </div>
            </div>
          </div>
        ))}

<div class="col-md-12 col-lg-12">
				<div class="">
					<ul class="get-quote mt-0">
						<li><Link href="/get-a-quote" class="active">Try us now</Link></li>
					</ul> 
				</div>
			</div>

      </div>
    </div>
</section>

<section class="sec sec-manuscript">
   <div class="container">
      <div class="row"> 
		  <div class="col-md-12 text-left">
         <div class="ourhighlyT">
            <h3>Let’s have a look at the Publication Journey of a manuscript!</h3>
            <ul>
               <li><span class="icon"><i class="fas fa-check"></i></span> <strong>Pre Submission Peer review and Plagiarism Check</strong> Manuscript review by an expert reviewer or a group of reviewers focused on the scope of the study, reporting methods used, ethical and field significance, and data analysis.  </li>
               <li><span class="icon"><i class="fas fa-check"></i></span> <strong>Journal Selection Support</strong> We ensure matching you with the most appropriate journals for your specific research and requirements. Our team of diversified experts holds vast experience in peer reviewing and editing for international journals in your field of study. </li>
               <li><span class="icon"><i class="fas fa-check"></i></span> <strong>Substantive Editing, Artwork Editing, and Submission checklist</strong> Substantive Editing is a premium service and is specifically customized to the needs of the global scientific research community. Quality-conscious authors aiming to submit their work to high-impact peer-reviewed international journals will ultimately need this service. Substantive Editing service is an advanced form of Copy Editing. It also includes advanced editing focused on your manuscript’s logic, structure, and presentation. </li> 
				 <li><span class="icon"><i class="fas fa-check"></i></span> <strong>Manuscript Submission Assistant</strong> We provide the easiest submission process by taking care of all the above stages. We double-check the formatting of your manuscript and ensure that it is ready for publication, as per author guidelines for offline or online codex submission. </li> 
            </ul>
         </div>
      </div>
      </div>
      </div>     
</section>
  
<section class="sec-submission Pre-Submission">
	<div class="container">
		<div class="row">

			<div class="col-md-12 text-center">
				<div class="hdingh2">
					<h2>Pre-Submission Services</h2>
				</div>
			</div>

        {servicesArray.map((service, index) => (
          <div key={index} className="col-md-4 text-center">
            <div className="submissionstps">
              <ul>
                <div className="submission-img">
                  <span>
                    <img src={service.image} alt={service.heading} className="img-fluid" />
                  </span>
                </div>
                <div className="submissionText">
                  <h3>{service.heading}</h3>
                  <p>{service.para}</p>
                  <a href={service.link}><i className="fa fa-angle-right"></i></a>
                </div>
 
              </ul>
           </div>
		   </div>
        ))}

		</div>
	</div>
</section>

<section class="sec-submission Post-Submission">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<div class="hdingh2">
					<h2>Post-Submission Services</h2>
					<h3>Researchpaper is a multifaceted language service provider that targets all our clients’ linguistic requirements.</h3>
				</div>
			</div> 
				    
			{PostArray.map((item, index) => (
          <div key={index} className="col-md-4 text-center">
			  <div className="submissionstps">
              <ul>
			  <div className="submission-img">
                  <span>
           
              <img src={item.image} alt={item.heading} className="img-fluid" />
			  </span>
			  </div>
                <div className="submissionText">
              <h3>{item.heading}</h3>
              <p>{item.para}</p>
              <a href={item.link}><i className="fa fa-angle-right"></i></a>
			  </div>
          </ul>
</div>
</div>
        ))}
		</div>
	</div>
</section>

<section class="sec-winAcdcft">
   <div className="container">
      <div className="row">
	  <div class="col-md-12 text-center">
				<div class="hdingh2">
					<h2>How to Succeed Using Researchpaper</h2>
				</div>
			</div>

        {itemsArray.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4 text-left winAcdcb1 bdbtm1">
            <div className="winAcdc">
              <div className="winAcdcImg">
                <span>
                  <img src={item.image} alt={item.heading} className="img-fluid" />
                </span>
                <div>
                  <h3>{item.heading}</h3>
                  <p>{item.para}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</section>

<section class="sec-areasresearch">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-lg-5 text-left">
				<div class="areasresearch hdingh2">
					<h2>We Cover More Than <span>1,000 Research</span> Areas for you.</h2>
					<div class="areasre-services">
						<div class="areasre-service1">
							<span class="img"><img src="/assets/images/home/icon5.svg" class="img-fluid" alt=""/></span>
							<div class="areasreTxt">
								<h5>Social Sciences</h5>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-12 col-lg-7 text-left">
				<div class="areasre-services2">
					<div class="areasre-service1">
						<span class="img active"><img src="/assets/images/home/icon1.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Life Sciences</h5>
						</div>
					</div>
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/icon2.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Physical Sciences</h5>
						</div>
					</div>
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/icon3.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Business &amp; Economics</h5>
						</div>
					</div>
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/icon4.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Medicine Sciences</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12 col-lg-12 text-left">
				<div class="areasre-services3">
					<div class="areasre-service1">
						<span class="img active"><img src="/assets/images/home/biology.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Biology   </h5>
						</div>
					</div>
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/material-science.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Material Science  </h5>
						</div>
					</div>
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/enginnering.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Engineering  </h5>
						</div>
					</div> 
					
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/microbiology.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Meteorology     </h5>
						</div>
					</div>
					
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/chemistry.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Chemistry        </h5>
						</div>
					</div>
					
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/geophysics.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Geophysics        </h5>
						</div>
					</div>
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/meteorology.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Microbiology       </h5>
						</div>
					</div>
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/computer-science.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Computer Science       </h5>
						</div>
					</div>
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/atmospheric-science.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Atmospheric Science        </h5>
						</div>
					</div>
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/earth-science.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Earth Science       </h5>
						</div>
					</div> 
					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/agriculture.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Agriculture    </h5>
						</div>
					</div>

					<div class="areasre-service1">
						<span class="img"><img src="/assets/images/home/geology.svg" class="img-fluid" alt=""/></span>
						<div class="areasreTxt">
							<h5>Geology    </h5>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</section>
 
<section class="sec-promise bg-darkblue">
   <div class="container">
      <div class="row">
         <div class="col-md-6 col-lg-3 text-center">
            <div class="promise1">
               <p>The ResearchPaper </p>
               <h2>Guarantee</h2>
               <span><img src="/assets/images/home/quality-icon.svg" class="img-fluid" alt=""/></span>
               <h3>( Best Quality, Least Price )</h3>
               <a href="/">Let’s Get Started</a>
            </div>
         </div>
         <div class="col-md-6 col-lg-3 text-center">
            <div class="promise2">
               <span class="img"><img src="/assets/images/home/icon2(1).svg" class="img-fluid" alt=""/></span>
               <h3>100% Top-Rated <span>Guarantee</span> </h3>
               <p>In the extremely unlikely event that you are not delighted with our work, we will revise it until you are. </p>
               <div class="promiseTxts">
                  <p>Furthermore, you receive a complete refund with no questions asked if you are still unsatisfied. </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-3 text-center">
            <div class="promise2">
               <span class="img"><img src="/assets/images/home/icon3(1).svg" class="img-fluid" alt=""/></span>
               <h3>Always <span>punctual </span></h3>
               <p>We always assist you in meeting deadlines, frequently by completing work in just 8 hours. </p>
               <div class="promiseTxts">
                  <p>Additionally, we provide a full refund if we ever fail to meet a deadline by even a single minute. </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-3 text-center">
            <div class="promise2">
               <span class="img"><img src="/assets/images/home/icon4(1).svg" class="img-fluid" alt=""/></span>
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

<section class="sec-respond-time">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="respond-timeImg">
					<img src="/assets/images/home/img1.png" class="img-fluid" alt=""/>
					<span><img src="/assets/images/home/img2.png" class="img-fluid" alt=""/></span>
				</div>
			</div>
			<div class="col-md-6">
				<div class="respond-timeTxt">
					<h2>We Respond <span>24*7</span> and within just <span>10 Minutes</span>.</h2>
					<p><span>Get an instant quote in less than 10 minutes! We're available 24/7 to meet your urgent requirements.</span>
						We refrain from making our clients wait when they work with us!
					</p>
					<p>All the stages involved in the publication process are equally important to us, and there is a dedicated account manager assigned to you to take care of all the tasks at all levels when you hand over your project to us.</p>
					<div class="contmsrt1">Connect me to Researchpaper Client Support</div>
					<Link href="/get-a-quote">Get Started </Link>
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
				<h2>Why choose Research Paper Writing Services?</h2>

<h3>Subject Area Editors</h3>

<p>We match every manuscript submitted to us with an editor who has a deep understanding of the content and subject matter.</p>

<h3>Twofold Editor system</h3>

<p>We utilize a "Two Editor" system where every manuscript is reviewed by at least two Ph.D./Masters degree-level editors to ensure a flawless quality edit in an appropriate research paper format.</p>

<h3>Native English Experts</h3>

<p>We only employ native English-speaking editors from the US, UK, Australia, and Canada, India ensuring consistently perfect language usage.</p>

<h3>Our Commitment</h3>

<p>We are committed to providing a top-quality service that is trusted by authors, publishers, and universities worldwide.</p>

<p>With Research Paper Writing Services, you can trust that your manuscript is in the best possible hands.</p>

				<h3>Providing Quality Scholarly Research Paper Publications To Leading Universities Worldwide</h3>

<ul>
				<li>Our services are trusted by leading universities, publishers, and academic societies around the globe, and we're dedicated to helping them disseminate high-quality scholarly and scientific information.</li>

				<li>Our team of experts offers a wide range of services including copy editing, research paper format, APA style paper or MLA research paper format, and scientific manuscript editing, among others.</li>

				<li>Our commitment to quality and attention to detail set us apart from the competition, making us the preferred partner for all your research needs.</li>
				</ul>

<p>We're proud to offer exceptional services to help you achieve your goals, and we look forward to partnering with you on your next project.</p>

<h3>Need help with your Research paper outline? We can help!</h3>

<p>Our team of expert writers has years of experience in academic writing and can help you with all aspects of your research paper from selecting a topic to polishing your final draft. We understand how stressful research papers can be, and we're here to make the process as easy and stress-free as possible. Our paper writing services are affordable, convenient, and reliable - just what you need when you're under a tight deadline. So why wait? Let us help you get the grade you deserve on your research paper.</p>

<h3>Need help with statistical analysis? We can help!</h3>

<p>Our experienced statisticians are well-versed in a variety of quantitative research methods and excel at analyzing complex data sets. Whether you need assistance with outlining best research paper examples ,data cleaning, descriptive statistics, or inferential analyses, we can help. Our team uses state-of-the-art statistical software to ensure accurate and efficient analyses, and we are dedicated to delivering high-quality results that meet your specific needs.</p>

<h3>Need help with submitting your journal article? We can help!</h3>

<p>Whether you're struggling to pick the right journal or you're unsure about the research paper format guidelines, we've got the expertise to guide you every step of the way. Our team of experts is well-versed in the ins and outs of academic publishing, and we'll work with you to make sure your article gets the attention it deserves. So don't let submission anxiety get the best of you - let us help you take the first step toward publishing success!</p>

<h3>Need help with formatting and artwork editing? We can help!</h3>

<p>Our team of experts has years of experience in formatting the best examples of Research Papers and editing artwork to ensure that they meet your exact specifications. From adjusting margins and spacing to ensuring that your images are optimized for printing, we have the skills and expertise necessary to make your documents look their best. Whether you're looking to create a professional report, a beautifully designed brochure, or anything in between, we're here to help you achieve the perfect look and feel for your project.</p>

<h3>Need help with peer review and plagiarism check? We can help!</h3>

<p>Our team of expert reviewers and editors can help you ensure that your work is up to publication standards and free of any unintentional plagiarism. We understand how important it is to

produce original work and provide useful feedback to help you improve your paper-writing skills. Our review process is thorough and detailed, aimed at helping you achieve your desired outcomes.</p>

<h3>Need help with Research Paper format &amp; revised paper editing? We can help!</h3>

<p>We understand the importance of presenting well-written and grammatically correct documents, and we are committed to providing the best quality editing services to our clients. Our team of editors has years of experience in editing a variety of documents, from academic papers to business reports in <strong>research paper publications</strong>. We will work with you to ensure that your revised paper meets your needs and exceeds your expectations. Our editing process includes a thorough review of grammar, punctuation, spelling, and syntax, as well as suggestions for improving the overall flow and clarity of your writing</p>
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
            {homeFaqs.map((faq) => (
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
    
 <script
dangerouslySetInnerHTML={{__html:`
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:3364055,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
    <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ftz11i3ch5");


    jQuery(document).ready(function() {
		document.addEventListener('click', function(e) {
			// Hamburger menu
			if (e.target.classList.contains('hamburger-toggle')) {
				e.target.children[0].classList.toggle('active');
			}
		})
	});
    function inVisible(element) {
		//Checking if the element is
		//visible in the viewport
		var WindowTop = $(window).scrollTop();
		var WindowBottom = WindowTop + $(window).height();
		var ElementTop = element.offset().top;
		var ElementBottom = ElementTop + element.height();
		//animating the element if it is
		//visible in the viewport
		if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
			animate(element);
	}

	function animate(element) {
		//Animating the element if not animated before
		if (!element.hasClass('ms-animated')) {
			var maxval = element.data('max');
			var html = element.html();
			element.addClass("ms-animated");
			$({
				countNum: element.html()
			}).animate({
				countNum: maxval
			}, {
				//duration 5 seconds
				duration: 500,
				easing: 'linear',
				step: function() {
					element.html(Math.floor(this.countNum) + html);
				},
				complete: function() {
					element.html(this.countNum + html);
				}
			});
		}

	}

	//When the document is ready
	$(function() {
		//This is triggered when the
		//user scrolls the page
		$(window).scroll(function() {
			//Checking if each items to animate are 
			//visible in the viewport
			$("h3[data-max]").each(function() {
				inVisible($(this));
			});
		})
	});


    $('.client-slider1').owlCarousel({
		margin: 10,
		loop: true,
		animateOut: 'fadeOut',
		items: 10,
		nav: false,
		autoplay: true,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 4,

			},
			600: {
				items: 6,

			},
			1000: {
				items: 10,
			}
		}
	})
</script>
<script>
	$('.Published-slider1').owlCarousel({
		margin: 30,
		loop: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		animateOut: 'fadeOut',
		items: 2,
		nav: true,
		autoplay: true,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,

			},
			600: {
				items: 1,

			},
			1000: {
				items: 2,
			}
		}
	})
</script>
<script>
	$('.ourexpert-slider').owlCarousel({
		margin: 60,
		loop: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		animateOut: 'fadeOut',
		items: 3,
		center: true,
		nav: true,
		autoplay: true,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,

			},
			600: {
				items: 1,

			},
			768: {
				items: 2.2,

			},
			1000: {
				items: 3,
			}
		}
	})

`}}
>
</script>


</section>





    </>
  )
}
