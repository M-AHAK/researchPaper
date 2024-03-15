import React from "react";
import faqs from "./Faqconst";


const Faqs=() =>{
    return(
        <>
        <div class="clearfix"></div><section class="sec-faqs mb-5">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="hdingh2 text-center">
               <h2>FAQs on Research Paper manuscript publishing service</h2>
            </div>
         </div>
            
         <div class="col-md-12 text-left">
            <div class="accordion" id="accordionExample">
            {faqs.map((faq) => (
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

   <script
dangerouslySetInnerHTML={{__html:`
  
   jQuery(document).ready(function() {
      document.addEventListener('click', function(e) {
         // Hamburger menu
         if (e.target.classList.contains('hamburger-toggle')) {
            e.target.children[0].classList.toggle('active');
         }
      })
   })

   $('.client-slider1').owlCarousel({
      margin: 10,
      loop: true,
      animateOut: 'fadeOut',
      items: 10,
      nav: false,
      autoplay: true,
      dots: true,
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

`}}
>
</script>

</section>



        </>
    )
}
export default Faqs