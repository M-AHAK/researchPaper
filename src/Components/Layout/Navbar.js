import React from "react"
import Head from "next/head"
import Link from 'next/link'

const Navbar =()=>{
    
    return(

        <>

        <Head>
        <link rel="icon" href="/assets/images/home/fevicon.svg"/> 
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" rel="stylesheet"/>
    <link href="/assets/css/owl.carousel.min.css" rel="stylesheet"/>
    <link href="/assets/css/owl.theme.default.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="/assets/css/intlTelInput.css" />
    <link href="/assets/css/Research-custom.css" rel="stylesheet"/>
    <link href="/assets/css/responsive.css?v=141" rel="stylesheet"/>

    {/* <link href="/assets/css/responsive.css?v=141" rel="stylesheet"/> */}
        </Head>

        <nav class="fixed-top bg-white">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-end top-head">
        <ul>
          <li><a href="/#">+1-702-605-8532, +91-700-053-0247 <span>Mon - Fri 4:00-18:00(GMT)|Sat 4:00-12:00(GMT)</span></a></li>
          <li><Link href="/get-a-quote">Get a Free Quote</Link></li>
        </ul>
      </div>
    </div>
  </div>

  <section class="navbar navbar-expand-lg navbar-light pt-0 pb-0">
    <div class="container">
      <Link class="navbar-brand" href="/"><img src="/assets/images/home/logo.svg" class="img-fluid" alt=""/></Link>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
        <div class="hamburger-toggle">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </button>
      
      <div class="collapse navbar-collapse" id="navbar-content">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown dropdown-mega position-static">
            <a class="nav-link dropdown-toggle active" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside">Publication Support Services</a>
            <div class="dropdown-menu shadow">
              <div class="mega-content px-4">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-12 col-sm-4 col-md-4 py-4">
                      <h5>Publication Support Packages</h5>
                      <div class="list-group">
                        <div class="levelthreeitemsmenu"><Link href="/advance-editing-full-support-pac">Advance Editing Full Support Pack</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/advance-editing-easy-go-pack">Advance Editing Easy-Go Pack</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/custom-pack">Custom Pack</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/compare">Compare</Link></div>
                        {/* <div class="levelthreeitemsmenu"><Link href="/publication-support-service">Publication Support Pricing</Link></div> */}
                      </div>
                    </div>
                    <div class="col-12 col-sm-4 col-md-4 py-4">
                      <h5>Additional Services and Information</h5>
                      <div class="list-group">
                        <div class="levelthreeitemsmenu"><Link href="/grant-writing-service">Grant Writing</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/statistical-analysis">Statistical Analysis</Link></div>
                        {/* <div class="levelthreeitemsmenu"><Link href="/graphical-abstract-service">Abstract Writing</Link></div>
                          <div class="levelthreeitemsmenu"><Link href="#">Service Samples</Link></div>  */}
                        <div class="levelthreeitemsmenu"><Link href="/faqs">FAQs</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/get-a-quote">Get a Quote</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/terms-of-use">Terms of Use</Link></div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-4 col-md-4 py-4">
                      <h5>Individual Services</h5>
                      <div class="list-group">

                        <div class="levelthreeitemsmenu"><Link href="/journal-selection">Journal Selection</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/pre-submission-peer-review">Pre-submission Peer Review</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/plagiarism-check">Plagiarism Check</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/formatting-and-artwork-editing">Formatting and Artwork Editing</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/journal-submission">Journal Submission</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/rejected-paper-editing">Rejected Paper Editing</Link></div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/pricing/">Pricing &amp; Quotation </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/about-us">About </Link>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="researcher-qna">Q &amp; A </a>
          </li> */}

          <li class="nav-item dropdown dropdown-mega position-static">
            <Link class="nav-link dropdown-toggle" href="/research-impact-services" data-bs-toggle="dropdown" data-bs-auto-close="outside">Research Impact</Link>
            <div class="dropdown-menu shadow researchImct">
              <div class="mega-content px-4">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-12 col-sm-6 col-md-6 py-4">
                      <h5>Research Impact</h5>
                      <div class="list-group">
                        <div class="levelthreeitemsmenu"><Link href="/research-impact-services/">Overview</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/video-development-services/">Video Abstract</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/graphical-abstract-service/">Graphical Abstract</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/poster-presentation/">Poster Presentation</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/scientific-news-report/">Scientific News Report</Link></div>
                        <div class="levelthreeitemsmenu"><Link href="/simplified-abstracts/">Simplified Abstract</Link></div>
                      </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-6 py-4">
                      <h5>Card</h5>
                      <div class="card">
                        <img src="/assets/images/home/grant-writing-img.png" class="img-fluid" alt="image"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</nav>

        
        </>
    )
}
export default Navbar