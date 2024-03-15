import React from "react";
import { useState } from "react";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
import Link from 'next/link'

const AboutUs=()=>{


    const items = [
        { src: "/assets/images/about/cambridge.webp", alt: "Cambridge" },
        { src: "/assets/images/about/cocubes.webp", alt: "Cocubes" },
        { src: "/assets/images/about/dreamtechpress.webp", alt: "DreamTech Press" },
        { src: "/assets/images/about/fitkids.webp", alt: "FitKids" },
        { src: "/assets/images/about/niitnguru.webp", alt: "NIIT nGuru" },
        { src: "/assets/images/about/schiffer.webp", alt: "Schiffer" },
        { src: "/assets/images/about/scholor.webp", alt: "Scholor" },
        { src: "/assets/images/about/sifytechnologies.webp", alt: "Sify Technologies" },
        { src: "/assets/images/about/tcy.webp", alt: "TCY" },
        { src: "/assets/images/about/textbookrush.webp", alt: "TextbookRush" },
      ];
 

      const [displayedItems, setDisplayedItems] = useState(4);

  const showMoreItems = () =>
    {setDisplayedItems(displayedItems + 4);}
    
    return(
        <>



        <div class="clearfix"></div><section class="banner-home">
    <div class="container">
        <div class="row">
            <div class="col-md-6 text-left mb-4">
                <div class="text-banner pt-4 pb-5 padnsc1">
                    <h1>About Us </h1>
                    <p>At Editing Services and Publishing Support, we understand the importance of professional editing and publishing support to make your work stand out. We offer a wide range of services to meet the needs of authors, academics, and businesses alike. Our team of experienced editors and publishing specialists are dedicated to helping you turn your work into a polished and publishable masterpiece.</p>
                   <p>We provide comprehensive editing services, including developmental editing, copy editing, and proofreading, to ensure that your work is error-free and clear. Our editors work closely with you to ensure that your unique voice and vision shine through in your work. </p>
                    <ul class="get-quote">
                        <li><Link href="/get-a-quote" class="active">Get Customized Quote</Link></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 text-center">
                <div class="bannerHImg"><img src="/assets/images/about/banner-img.png" class="img-fluid" alt=""/>
                </div>
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
    
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/cambridge.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/cocubes.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/dreamtechpress.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/fitkids.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/niitnguru.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/schiffer.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/scholor.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/sifytechnologies.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/tcy.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/textbookrush.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/cambridge.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/cocubes.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/dreamtechpress.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/fitkids.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/niitnguru.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/schiffer.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/scholor.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/sifytechnologies.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/tcy.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/textbookrush.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/cambridge.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/cocubes.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/dreamtechpress.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/fitkids.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/niitnguru.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/schiffer.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/scholor.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/sifytechnologies.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/tcy.webp" className="img-fluid" alt=""/></a></div>
<div className="item"><a href="javascript:void(0);"><img src="/assets/images/about/textbookrush.webp" className="img-fluid" alt=""/></a></div>

                </OwlCarousel>
                {/* <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div> */}


                </div>
            </div>
        </div>
   </section>



<section class="sec sec-editingfull mt-5">
    <div class="container">

        <div class="row ltr">
		 <div class="col-md-5 text-right CompareDarck ml-auto">
                <div class="alsoinclude">
                    <span><img src="/assets/images/about/who-we-are.png" class="img-fluid" alt=""/></span>
                    <div class="thnyerex">10 years Experience</div>
                </div>
            </div> 




            
            <div class="col-md-6 text-left"> 
                <div class="manuscriptBTx pt-4 prspn0">
                    <h2>Our Identity </h2>
                    <div class="manuscripttext pl-0 border-0">
                        <p>We also offer publishing support services to help guide you through the publishing process, from selecting the right publisher to marketing your book. Our team is knowledgeable about the latest publishing trends and technologies, and we work with you every step of the way to make sure that your work reaches the right audience. </p>
                        <p>We are committed to providing our clients with the highest level of quality and customer service. We understand that every client is unique and we tailor our services to meet your individual needs. Whether you're a first-time author or a seasoned professional, we are here to help you achieve your publishing goals. </p>
						<p>So if you're looking for reliable and professional editing and publishing support services, look no further than Editing Services and Publishing Support. Contact us today to learn more about how we can help you bring your work to life. </p>
                    </div>
                </div>
            </div> 
            </div>
    </div>
</section>
 
<section class="sec-ourexpert bg-lightgray">
    <div class="container">
        <div class="row ltr">
		 <div class="col-md-8 text-right">
                <div class="">
                    <span><img src="/assets/images/about/numberimgs.svg" class="img-fluid" alt=""/></span>
                </div>
            </div>
                   <div class="col-md-4">
                <div class="numbatgl">
                    <h2>Numbers at glance </h2>
                    <p>Strong industry expertise is an important factor in the development of our brands as leaders on the world stage. Our goal is to provide innovative English language solutions that are of the highest caliber possible. </p>
                 <ul class="get-quote mt-2">
 <li><Link href="/get-a-quote" class="active">Try us now</Link></li>
 </ul> 
 </div>
				</div>
            </div> 
        </div>
</section>

<section class="sec-ourexpert">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="hdingh2">
                    <h2>Some of Our Partners &amp; Clients</h2>
                </div>
            </div>                         
            <div>
      {items.slice(0, displayedItems).map((item, index) => {
        
       return(
        <div key={index} className={`iconLogo1`}>
          <a href="javascript:void(0);">
            <img src={item.src} alt={item.alt} className="img-fluid" />
          </a>
        </div>
      )})}
      {displayedItems < items.length && (
        <button className="loadMore" onClick={showMoreItems}>
          Load More
        </button>
      )}
    </div>
    
    </div>
    </div>
</section>


<script
dangerouslySetInnerHTML={{__html:`
d$(document).ready(function() {
    $(".iconLogo1").slice(0, 4).show();
    $(".loadMore").on("click", function(e) {
        e.preventDefault();
        $(".iconLogo1:hidden").slice(0, 4).slideDown();
        if ($(".iconLogo1:hidden").length == 0) {
            $(".loadMore").text("").addClass("noContent");
        }
    });

})
`}}
>
</script> 
    

        </>
    )
}
export default AboutUs