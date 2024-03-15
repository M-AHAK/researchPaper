import React from "react";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
import Link from 'next/link'

const Overview =()=>{
    return(
        <>
        
<div class="clearfix"></div>
<section class="banner-home">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center mb-4">
        <div class="text-banner pt-0">
          <h1>Research Impact Services</h1>
          <p>With our Research Impact Services, we are not only assisting you in making your research significant for the only scientific community but worthwhile to general society also. Our goal is to make your research fruitful in terms of socio-cultural and political constraints. The significance of your work reflects in the whole research journey.</p>
        <ul class="get-quote">
                <li><Link href="/get-a-quote" class="active">Get an Estimate Now</Link></li>
               </ul>
		</div>
      </div>
      
      <div class="col-md-12 text-center">
        <div class="bannerHImg"><img src="/assets/images/research-impact/banner-img.png" class="img-fluid" alt=""/> </div>
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

        {/* <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div> */}
        </OwlCarousel>
        </div>
      </div>
    </div>
</section>


<section class="sec sec-create-global">
  <div class="container">
    <div class="row">
      <div class="col-md-5 text-left">
        <div class="hdingh2">
          <h2>Make a Difference in the World with Your Research</h2>
        </div>
      </div>
      <div class="col-md-7 text-left">
        <div class="hdingh2 bgLtxs">
          <p>By making your research impactful, you are able to reach out to a wider audience with the help of our experts and best services. Our well-qualified and collaborative team offers quality, and their talent makes all the difference in your research worth notable. </p>
        </div>
      </div>
    </div>
    <div class="row rtl">
      <div class="col-md-7">
        <div class="createglobal-img bgLtxs"> <span><img src="/assets/images/research-impact/create-global-img.png" class="img-fluid" alt=""/></span>
          <div class="createglobal-imgText">
            <ul>
              <li>11+ years <span>Experience </span></li>
              <li><span>58</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="createglobal-Text">
          <ul>
            <li><span><img src="/assets/images/research-impact/icon1.svg" class="img-fluid" alt=""/></span>
              <div class="">
                <h3>Illustrations, videos, and graphics </h3>
                <p>By adding spectacular videos and graphics to your research will help your research communicate more impactfully and comprehensively. </p>
              </div>
            </li>
            <li><span><img src="/assets/images/research-impact/icon2.svg" class="img-fluid" alt=""/></span>
              <div class="">
                <h3>Posters and Presentations </h3>
                <p>Our experts also add attractive posters and informative presentations to give a glimpse of your work to the target audience. It helps you to present your research with an impactful presentation. </p>
              </div>
            </li>
            <li><span><img src="/assets/images/research-impact/icon3.svg" class="img-fluid" alt=""/></span>
              <div class="">
                <h3>Research Promotion </h3>
                <p>Our experts are also well versed in creating marketing strategies through impressive texts and written content for news and social media advertisements resulting in getting enough attention. </p>
              </div>
            </li> 
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec individualPack">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="">
          <h2>Graphics, videos, and Illustrations </h2>
          <p>With the use of appealing designs, colors, shapes, images, effects, etc., the user’s attention is grabbed. Therefore, our talented designers will produce visually appealing artwork like illustrations, videos, and graphics. Meanwhile, we make sure that the artwork and videos accurately convey the findings of your study.</p>
        </div>
      </div>
      <div class="col-md-12">
        <div class="tabsGra1">
          <div class="tabsGra1Btn">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-video-tab" data-bs-toggle="pill" data-bs-target="#pills-video" type="button" role="tab" aria-controls="pills-video" aria-selected="true"><span><img src="/assets/images/research-impact/icon1(1).svg" class="img-fluid img1" alt=""/><img src="/assets/images/research-impact/icon-1.svg" class="img-fluid img2" alt=""/></span> Video Abstract</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-scientific-tab" data-bs-toggle="pill" data-bs-target="#pills-scientific" type="button" role="tab" aria-controls="pills-scientific" aria-selected="false"><span><img src="/assets/images/research-impact/icon2(1).svg" class="img-fluid img1" alt=""/><img src="/assets/images/research-impact/icon-2.svg" class="img-fluid img2" alt=""/></span> Scientific Illustrations</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-journal-tab" data-bs-toggle="pill" data-bs-target="#pills-journal" type="button" role="tab" aria-controls="pills-journal" aria-selected="false"><span><img src="/assets/images/research-impact/icon3(1).svg" class="img-fluid img1" alt=""/><img src="/assets/images/research-impact/icon-3.svg" class="img-fluid img2" alt=""/></span> Journal Cover Art</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-infographics-tab" data-bs-toggle="pill" data-bs-target="#pills-infographics" type="button" role="tab" aria-controls="pills-infographics" aria-selected="false"><span><img src="/assets/images/research-impact/icon4.svg" class="img-fluid img1" alt=""/><img src="/assets/images/research-impact/icon-4.svg" class="img-fluid img2" alt=""/></span> Infographics</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-graphical-tab" data-bs-toggle="pill" data-bs-target="#pills-graphical" type="button" role="tab" aria-controls="pills-graphical" aria-selected="false"><span><img src="/assets/images/research-impact/icon5.svg" class="img-fluid img1" alt=""/><img src="/assets/images/research-impact/icon-5.svg" class="img-fluid img2" alt=""/></span> Graphical Illustrate</button>
              </li>
            </ul>
          </div>
          <div class="tabsGra1Text">
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                <div class="tabsGra1KTxt">
                  <div class="text-center pt-4 pb-4">
                    <p>With the help of a visually appealing video presentation to demonstrate the goal of your research, you can reach out to a wider audience.</p>
                  </div>
                  <div class="tabsGra1KTxt1">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tabsGra1KList">
                          <h3>Key features</h3>
                          <ul>
                            <li><i class="fas fa-check"></i> HD animations and subtitles</li>
                            <li><i class="fas fa-check"></i> Promotion (paid option)</li>
                            <li><i class="fas fa-check"></i> 5-step process model</li>
                            <li><i class="fas fa-check"></i> Soundtrack</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tabsGra1Kdtail">
                          <h3>More details</h3>
                          <p>We have a team of professionals with collaborative writers, graphic designers, and video editors who make your research attractive and presentable in the form of 1-3 minute PowerPoint presentations. The presentation will be consisting attractive animations and graphics with a clear and impressive soundtrack, along with subtitles, that help your work to be illustrated on various social media platforms. To make it possible, we have a team of subject matter experts in the respective field to make your presentation mind-blowing.</p>
                          <div class="text-left mt-4"><Link href="/get-a-quote" class="btnClor">Get Customized Quote</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-scientific" role="tabpanel" aria-labelledby="pills-scientific-tab">
				<div class="tabsGra1KTxt">
                  <div class="text-center pt-4 pb-4">
                    <p>Through scientific illustrations we help you to expand the horizons of your research to not only the scientific world but to common people also. Your research concepts are exposed to a wider audience. </p>
                  </div>
                  <div class="tabsGra1KTxt1">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tabsGra1KList">
                          <h3>Key features</h3>
                          <ul>
                            <li><i class="fas fa-check"></i> Aesthetically and scientifically sound scientific illustration</li>
                            <li><i class="fas fa-check"></i> Streamlined process of SME/author intervention</li>
                            <li><i class="fas fa-check"></i> A figure caption or legend </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tabsGra1Kdtail">
                          <h3>More details</h3>
                          <p>Our services also include a scientific illustration that ensures collaborative work by both science and art experts in order to balance creativity and the scientific soul also. To demonstrate the scientific illustration our experts will provide you with 50-75 words captions along with sketches depicting the research purpose. Your illustration will have a perfect blend of colors and other artwork to create a scientific yet attractive visual effect. Throughout the process of its creation, our team will be in touch and make you updated with the slightest developments. You will be also given the choice of keeping the most appropriate among many options.</p>
                          <div class="text-left mt-4"><Link href="/get-a-quote" class="btnClor">Get Customized Quote</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
				</div>
              <div class="tab-pane fade" id="pills-journal" role="tabpanel" aria-labelledby="pills-journal-tab"> 
				<div class="tabsGra1KTxt">
                  <div class="text-center pt-4 pb-4">
                    <p>These days the famous publishers like Nature, Springer, Elsevier, ACS, etc have started giving a beautiful feature as cover art so that your research gets quick attention. The attractive cover gains the visual attention of readers and makes your research worth seeing. </p>
                  </div>
                  <div class="tabsGra1KTxt1">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tabsGra1KList">
                          <h3>Key features</h3>
                          <ul>
                            <li><i class="fas fa-check"></i> Sophisticated and eye-catching illustration</li>
                            <li><i class="fas fa-check"></i> A 30 to 35 word summary for impact statement, if needed </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tabsGra1Kdtail">
                          <h3>More details</h3>
                          <p>Our team will help your research in getting a creative makeover in the form of journal cover. You can guide our designers about your demands that demonstrates the nature of your research. It will consist of various creative ideas that include perfect color combinations and that so in a very presentable form. If needed, we will provide a short summary of about 30-35 words. You can also get concise abstracts that you can share on various social media platforms. Our team will also assist you in the submission of your research in the top journals as per your list.</p>
                          <div class="text-left mt-4"><Link href="/get-a-quote" class="btnClor">Get Customized Quote</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
				</div>
              <div class="tab-pane fade" id="pills-infographics" role="tabpanel" aria-labelledby="pills-infographics-tab">
				<div class="tabsGra1KTxt">
                  <div class="text-center pt-4 pb-4">
                    <p>Through infographics we can represent the research in an effective way by combining the elements of data, graphs, chart, text, diagram and even video and impressively present to the audience. </p>
                  </div>
                  <div class="tabsGra1KTxt1">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tabsGra1KList">
                          <h3>Key features</h3>
                          <ul>
                            <li><i class="fas fa-check"></i> Insightful and attractive infographics</li>
                           <li><i class="fas fa-check"></i>Streamlined process of SME/author intervention </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tabsGra1Kdtail">
                          <h3>More details</h3>
                          <p>With the help of a trained and intellectual team we help you to prepare an attractive infographics that will present your research in a captivating manner. For this our team collaborates with the best graphic designers and subject matter experts that we have for creating an appealing research according to the format of the website or the journal where to be published. Also we help you to avail the infographic design used to be shared on any platform for its promotion. </p>
                          <div class="text-left mt-4"><Link href="/get-a-quote" class="btnClor">Get Customized Quote</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
				</div>
              <div class="tab-pane fade" id="pills-graphical" role="tabpanel" aria-labelledby="pills-graphical-tab">
				<div class="tabsGra1KTxt">
                  <div class="text-center pt-4 pb-4">
                    <p>We also help your research to become more elucidated by representing it through attractive images and graphics in the form of graphical illustrations to make it more presentable and appealing. </p>
                  </div>
                  <div class="tabsGra1KTxt1">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tabsGra1KList">
                          <h3>Key features</h3>
                          <ul>
                            <li><i class="fas fa-check"></i> Visualize the data in simplified form</li>
                            <li><i class="fas fa-check"></i>Graphical representation in high resolution and clarity</li>
                            <li><i class="fas fa-check"></i>Use of tools and final report consisting of the visual representation </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tabsGra1Kdtail">
                          <h3>More details</h3>
                          <p>Our expert team develops a graphical representation of your research using computer aided tools and techniques. Our graphic designers use creative charts and symbols to visualize the data and combine them to form a visualization report as per the journal guidelines. They also do this with the help of many tools and softwares like Adobe Illustrator, Coreldraw or even Microsoft PPT. This way our team helps your research concept to be presented in a visual representation that can be easily conceptualized. Use of charts, diagrams, text, pictures, etc help the data to be connected in an easy assimilative form to be published.</p>
                          <div class="text-left mt-4"><Link href="/get-a-quote" class="btnClor">Get Customized Quote</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
				</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


<section class="sec individualPack">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="">
          <h2>Presentations and Posters</h2> 
			<p>Presenting your research that piques the interest of the audience is essential for them to read and cite it. By using compelling posters and PowerPoint presentations, you can effectively explain the purpose of your research.</p>
        </div>
      </div>
      <div class="col-md-12">
        <div class="tabsGra1">
          <div class="tabsGra1Btn tabsGra1Btn2">
            <ul class="nav nav-pills mb-3" id="pills-tab2" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-poster-tab" data-bs-toggle="pill" data-bs-target="#pills-poster" type="button" role="tab" aria-controls="pills-poster" aria-selected="true"><span><img src="/assets/images/research-impact/icon1(2).svg" class="img-fluid img1" alt=""/><img src="/assets/images/research-impact/icon-1(1).svg" class="img-fluid img2" alt=""/></span> Poster Presentation</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-research-tab" data-bs-toggle="pill" data-bs-target="#pills-research" type="button" role="tab" aria-controls="pills-research" aria-selected="false"><span><img src="/assets/images/research-impact/icon2(2).svg" class="img-fluid img1" alt=""/><img src="/assets/images/research-impact/icon-2(1).svg" class="img-fluid img2" alt=""/></span> Research Presentation</button>
              </li>
            </ul>
          </div>
          <div class="tabsGra1Text">
            <div class="tab-content" id="pills-tabContent2">
              <div class="tab-pane fade show active" id="pills-poster" role="tabpanel" aria-labelledby="pills-poster-tab">
                <div class="tabsGra1KTxt">
                  <div class="text-center pt-4 pb-4">
                    <p>A poster can be a creative way to represent the concept of your research and make them in an attractively presentable form. </p>

                  </div>
                  <div class="tabsGra1KTxt1">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tabsGra1KList">
                          <h3>Key attributes</h3>
                          <ul>
                            <li><i class="fas fa-check"></i> Summarize the concept by a subject specialist</li> 
                            <li><i class="fas fa-check"></i> Creative designing of the poster through expert graphic designers.</li> 
                            <li><i class="fas fa-check"></i>Presentation in accordance with the organization color or pattern</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tabsGra1Kdtail">
                          <h3>More specifics</h3>
                          <p>Our subject matter experts prepare attractive and creative posters by using different types of graphics and charts that better represent the theme of your research. Our services are not only limited to the ones who are looking to represent their research work for conferences, seminars, or lectures but also to the ones who want to promote any product or services at corporate junctures. Thus, our services are open to every sector and can benefit them in certain ways.</p>
                          <div class="text-left mt-4"><Link href="/get-a-quote" class="btnClor">Get Customized Quote</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-research" role="tabpanel" aria-labelledby="pills-research-tab">
<div class="tabsGra1KTxt">
                  <div class="text-center pt-4 pb-4">
                    <p>Research presentation is a creative way to represent your research at any platform that promotes it publicly and makes it reachable to a wider audience. </p>

                  </div>
                  <div class="tabsGra1KTxt1">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tabsGra1KList">
                          <h3>Key attributes</h3>
                          <ul>
                            <li><i class="fas fa-check"></i> Authentic and engaging language of the content</li>
                            <li><i class="fas fa-check"></i> Easily accessible slides for sharing</li>
                            <li><i class="fas fa-check"></i> Get experience from experts</li>
                            <li><i class="fas fa-check"></i> Sharing the research work on multiple platforms with a promotional toolkit </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tabsGra1Kdtail">
                          <h3>More specifics </h3>
                          <p>Our team of experts also includes subject specialists who review the research work after publishing and accordingly suggest a creative and attractive presentation of your manuscript clearly adapting the purpose of your research. Once they collect all the details regarding the manuscript from you, they start creating an interesting and informative presentation of your research that accord with the university or the publishers’ guidelines. We also help you polish your presentation skills by providing practice sessions with our experts. This makes you present the best version of your research and that too in an elucidate form. </p>
                          <div class="text-left mt-4"><Link href="/get-a-quote" class="btnClor">Get Customized Quote</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec individualPack">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="">
          <h2>Research promotion</h2>
          <p>To make your research read by proper people is an essential part for anyone. To achieve the same and receive the credit, your merit could be achieved with our effective research marketing techniques. With our effective services, we ensure that the scope of your research provides a greater impact and consistently increases the number of citations. </p>
        </div>
      </div>
      <div class="col-md-12">
        <div class="tabsGra1">
          <div class="tabsGra1Btn tabsGra1Btn2">
            <ul class="nav nav-pills mb-3" id="pills-tab3" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-scientific1-tab" data-bs-toggle="pill" data-bs-target="#pills-scientific1" type="button" role="tab" aria-controls="pills-scientific1" aria-selected="true"><span><img src="/assets/images/research-impact/icon1(3).svg" class="img-fluid img1" alt=""/><img src="/assets/images/research-impact/icon-1(2).svg" class="img-fluid img2" alt=""/></span> Scientific News Report</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-simplified1-tab" data-bs-toggle="pill" data-bs-target="#pills-simplified1" type="button" role="tab" aria-controls="pills-simplified1" aria-selected="false"><span><img src="/assets/images/research-impact/icon2(3).svg" class="img-fluid img1" alt=""/><img src="/assets/images/research-impact/icon-2(2).svg" class="img-fluid img2" alt=""/></span> Simplified Abstract</button>
              </li>
            </ul>
          </div>
          <div class="tabsGra1Text">
            <div class="tab-content" id="pills-tabContent3">
              <div class="tab-pane fade show active" id="pills-scientific1" role="tabpanel" aria-labelledby="pills-scientific1-tab">
                <div class="tabsGra1KTxt">
                  <div class="text-center pt-4 pb-4">
                    <p>A perfect media platform is a boon for your research. It makes your research reach out to mass and in an effective manner that can expand the horizons of your work.</p>
                  </div>
                  <div class="tabsGra1KTxt1">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tabsGra1KList">
                          <h3>key attributes</h3>
                          <ul>
                            <li><i class="fas fa-check"></i> Shareable presentation </li>

                           <li><i class="fas fa-check"></i> Highlighting the creative side of the research </li>

                           <li><i class="fas fa-check"></i> Review by a subject matter expert as well as a language specialist </li>

                           <li><i class="fas fa-check"></i> A media-ready press release </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tabsGra1Kdtail">
                          <h3>More specifics </h3>
                          <p>We can also offer you a press-ready presentation of approx. 1000 words for sharing on various media platforms. This makes your research promoted to the general public and gets noticed by several magazines, newspapers, or any other funders. The press-ready presentation is also made available to the universities or scientific organizations who want to give a chance to new research and ideas of scholarly enthusiasm. The purpose of this service is to make your manuscripts reachable to different experts and scholars.</p>
                          <div class="text-left mt-4"><Link href="/get-a-quote" class="btnClor">Get Customized Quote</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-simplified1" role="tabpanel" aria-labelledby="pills-simplified1-tab"> 
<div class="tabsGra1KTxt">
                  <div class="text-center pt-4 pb-4">
                    <p>We help you in summarizing your research report into a concise and simplified form to attract maximum audience and readers.  </p>
                  </div>
                  <div class="tabsGra1KTxt1">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tabsGra1KList">
                          <h3>key attributes</h3>
                          <ul>
                            <li><i class="fas fa-check"></i> Simple language for general readers and scholars </li>
                            <li><i class="fas fa-check"></i>Summarized research in an assimilative  language  </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tabsGra1Kdtail">
                          <h3>More specifics </h3>
                          <p>Our subject matter experts make your research presentation in a simple and engaging report of lesser words (200 approx) to be understandable by general readers also. The research report will cover all the main points and maintain the theme of the research by including all the essential aspects. Native english experts also help the report to be written in a simple yet impressive language that suits the general magazines and students who can easily get the purpose of the research. </p>
                          <div class="text-left mt-4"><Link href="/get-a-quote" class="btnClor">Get Customized Quote</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
				</div>
            </div>
          </div>
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
				<h2>Overview </h2>

 
<p>Research is not a solitary pursuit, but rather a collaborative effort that often involves a diverse range of stakeholders. Our Research Impact services are designed to help you make the most of your <strong>research paper</strong> journey by demonstrating the objective and significance of your work not only to the scientific community but also to the general public. This will create a notable impact on the cultural, social, economic, and political environment. Through our services, we can assist you in getting</p>

<p><strong>Increased visibility and credibility :</strong> more citations for your work, which can increase its visibility and credibility within the academic world.</p>

<p><strong>Attract adequate attention</strong>
More comprehension from journalists, policymakers, and other influential individuals who can help promote your research beyond academia. </p>

<p><strong>Establish additional Connection</strong>
Our services can help you establish more connections with other researchers and institutions that share your interests and goals. By working together, we can create a more meaningful impact on society through research.
</p>
 <h3>Expand your audience with Research Paper Impact Services </h3>

<p>Creating a global impact with your <strong>research report</strong> can be challenging, but our team of experts is here to help. We understand that the purpose of your research deserves to be communicated effectively and creatively, and that's where we come in. Our team of subject-matter experts, illustrators, and designers will work together to develop a comprehensive strategy for getting your research out there. We'll help you identify key audiences and tailor your message to resonate with them. With our specialized services, you can create a wider reach for your journal paper and make a real difference in the world. Let us help you make an impact today!</p>
<h3>Measuring research impact : citation metrics </h3>
<p>Citation metrics are a popular method for measuring the impact of research. Citation metrics take into account the number of times a given article has been cited by other researchers. This is an important measure of research impact because it indicates how influential and relevant a particular study is to other researchers in the field. While citation metrics are not without their limitations, they remain one of the most widely used methods for assessing research impact. By tracking citation metrics, researchers can gain valuable insights into their own work and gauge the influence of their <strong>research report</strong> on the broader scientific community. In this way, citation metrics serve as an important tool for evaluating and improving the quality of scientific research.</p>
				
				<h3>Increase your research impact with citation metrics </h3>
				<ol>
				<li> Publish in high-impact journals: Publishing in prestigious or widely read journals can increase the visibility and reach of your research, leading to more citations.</li> 

				<li>Promote your work: Share your research on social media, academic networks, and other platforms to increase its visibility and attract more readers and potential citations.</li> 

				<li>Collaborate with other researchers: Collaborating with other researchers in related fields can help you reach a wider audience and potentially attract more citations.</li> 

				<li>Improve the quality of your research: Conduct thorough and rigorous research that is well-designed, executed, and reported. High-quality research is more likely to be cited by others in the field.</li> 

				<li>Stay up-to-date on relevant literature: Continuously monitor developments in your field and cite relevant studies in your own work. This demonstrates your knowledge of the field and helps you build a network of connections within it. </li> 
				</ol>
				
				
				<h3>Calculate your research impact using our citation metrics</h3>

<p>To calculate your <strong>research report</strong> impact using citation metrics, we follow these steps: </p>
<ol>
				<li> We identify the publications you want to track and gather their citation data.</li> 

				<li> The specialists Calculate the total number of citations for each publication.</li> 

				<li> Our experts Determine the h-index, which is a measure of both productivity (number of publications) and impact (number of citations). To calculate the h-index, arrange your publications in descending order by the number of citations they have received. The h-index is the highest number such that the corresponding number of publications have at least that many citations.</li> 

				<li> Finally they calculate other metrics such as the i10-index, which measures the number of publications with at least 10 citations, and the g-index, which takes into account both the number of publications and their level of impact. </li> 
				</ol>				
				<p>It is important to remember that citation metrics is the best way to measure <strong>research paper</strong> impact and should be used in conjunction with other factors such as qualitative assessments, peer review, and real-world applications. </p>

 

<h3>Advantages of Research paper Impact Services </h3>
				<ol>
				<li>Increased visibility and recognition for your research<br/>
Our services are designed to help you showcase your <strong>research presentation</strong> and increase its impact, making it more visible to potential collaborators, funders, and stakeholders. </li>

				<li>Improved research dissemination<br/>
 We can help you develop effective strategies for sharing your research findings with a wider audience, through channels such as social media, academic networks, and the press. </li>

				<li> Enhanced reputation and credibility<br/>
By demonstrating the impact of your research through our services, you can build a stronger reputation and establish yourself as an expert in your field. </li>

				<li> Access to new funding opportunities<br/>
Our services can help you identify new funding opportunities based on your research interests and impact goals. </li>

				<li> Support for career development<br/>
 By working with us, you can gain valuable experience in developing <strong>research presentations</strong> and implementing research impact strategies, which can be useful for advancing your career in academia or other fields. </li>
				</ol>
				<p>If you have any specific questions or concerns about our services, please don't hesitate to ask – we're here to help!
</p> 
				<div class="text-left mt-4"><Link href="/get-a-quote" class="btnClor">Enquire now</Link></div>
				</div>
			</div>
</div>
	</div>
</section>

        </>
    )
}
export default Overview