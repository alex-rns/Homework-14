import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Banner from './sections/Banner'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper main-page">

          <Header/>


          <Banner/>


          <section className="about-us-section text-center">
            <h3>About us</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of
              type
              and scrambled.</p>
            <a href="about-us.html" className="button-main button-main-margin">Read More</a>

            <div className="container about-carousel">
              <ul id="aboutCarousel">

                <li>
                  <a>
                    <img src="images/about-us-logo1.png" alt="about-us-logo"/>
                  </a>
                </li>
                <li>
                  <a>
                    <img src="images/about-us-logo2.png" alt="about-us-logo"/>
                  </a>
                </li>
                <li>
                  <a>
                    <img src="images/about-us-logo3.png" alt="about-us-logo"/>
                  </a>
                </li>
                <li>
                  <a>
                    <img src="images/about-us-logo4.png" alt="about-us-logo"/>
                  </a>
                </li>
                <li>
                  <a>
                    <img src="images/about-us-logo5.png" alt="about-us-logo"/>
                  </a>
                </li>
                <li>
                  <a>
                    <img src="images/about-us-logo1.png" alt="about-us-logo"/>
                  </a>
                </li>
                <li>
                  <a>
                    <img src="images/about-us-logo2.png" alt="about-us-logo"/>
                  </a>
                </li>
              </ul>
            </div>
          </section>


          <section className="our-features-section gray-bg text-center">
            <h3>our features</h3>
            <div className="container">

              <div className="row align-items-center mb-5">
                <div className="col-md-5 text-right">
                  <div
                    className="features-item-left icon-features icon-features-right icon-features-support mb-5">
                    <h5>24 hour support</h5>
                    <p> containing Lorem Ipsum passages, and more recently with desktop publishing
                      software like
                      Aldus</p>
                  </div>
                  <div
                    className="features-item-left icon-features icon-features-right icon-features-security">
                    <h5>FUll security</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has
                      been the</p>
                  </div>
                </div>

                <div className="col-sm-2 middle-circle">
                  <div className="circle-for-logo d-flex align-items-center justify-content-center">
                    <img src="images/logo-icon.png" alt="logo-icon"/>
                  </div>
                </div>
                <div className="col-md-5 text-left">
                  <div
                    className="features-item-right icon-features icon-features-left icon-features-business-boosting mb-5">
                    <h5>24 hour support</h5>
                    <p> containing Lorem Ipsum passages, and more recently with desktop publishing
                      software like
                      Aldus</p>
                  </div>

                  <div
                    className="features-item-right icon-features icon-features-left icon-features-creative-process">
                    <h5>FUll security</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has
                      been the</p>
                  </div>
                </div>
              </div>

              <div className="row boost-business align-items-center justify-content-between">
                <p>If you want to boost your business Contact us</p>
                <a className="button-main" href="contact-us.html">Boost your business</a>
              </div>
            </div>

          </section>


          <section className="projects-section">
            <h3>Projects</h3>
            <div className="container projects-wrapper">
              <div className="row">
                <div className="col-lg-4 card border-0">
                  <a href="industry.html" className="button-main button-card">Banking</a>
                  <img className="card-img-top card-project" src="images/project-card.png"
                       alt="Card image"/>

                  <div className="card-block card-block-accent">
                    <a href="industry.html">
                      <h5>Project Heading</h5>
                    </a>
                    <p className="card-text">Popularised in the 1960s with the release
                      Letraset sheets containing Lorem.</p>
                  </div>
                </div>

                <div id="projectCarousel"
                     className="project-carousel col-lg-8 card-slider card border-0">

                  <div className="project-slider-item">
                    <a href="industry.html" className="button-main button-card">Real Estate</a>
                    <img className="card-img-top" src="images/project-slider-img.png"
                         alt="Slider image"/>

                    <div className="card-block bg-white">
                      <a href="industry.html">
                        <h5>Project Heading</h5>
                      </a>
                      <p className="card-text">Popularised in the 1960s with the release of
                        Letraset sheets containing
                        Lorem Ipsum
                        passages. fact that a reader will be distracted by the readable of a
                        page when.</p>
                    </div>
                  </div>

                  <div className="project-slider-item">
                    <a href="industry.html" className="button-main button-card">Real Estate</a>
                    <img className="card-img-top" src="images/project-slider-img.png"
                         alt="Slider image"/>

                    <div className="card-block bg-white">
                      <a href="industry.html">
                        <h5>Project Heading</h5>
                      </a>
                      <p className="card-text">Popularised in the 1960s with the release of
                        Letraset sheets containing
                        Lorem Ipsum
                        passages. fact that a reader will be distracted by the readable of a
                        page when.</p>
                    </div>
                  </div>

                  <div className="project-slider-item">
                    <a href="industry.html" className="button-main button-card">Real Estate</a>
                    <img className="card-img-top" src="images/banner.png" alt="Slider image"/>

                    <div className="card-block bg-white">
                      <a href="industry.html">
                        <h5>Project Heading</h5>
                      </a>
                      <p className="card-text">Popularised in the 1960s with the release of
                        Letraset sheets containing
                        Lorem Ipsum
                        passages. fact that a reader will be distracted by the readable of a
                        page when.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a className="button-main button-main-margin" href="industry.html">Full Projects</a>
            </div>
          </section>


          <section className="services-section">
            <h3>Services</h3>
            <div className="container">
              <div className="row">

                <a href="industry.html"
                   className="col-md-4 services-item icon-services icon-business-consultation">
                  <h5>business consultation</h5>
                  <p>Many variations of passages of Lorem available, but the majority have suffered
                    alteration in some form, by injected humour</p>
                </a>
                <a href="industry.html"
                   className="col-md-4 services-item icon-services icon-boost-local-business">

                  <h5>business consultation</h5>
                  <p>Many variations of passages of Lorem available, but the majority have suffered
                    alteration in some form, by injected humour</p>
                </a>
                <a href="industry.html"
                   className="col-md-4 services-item icon-services icon-accounting">

                  <h5>business consultation</h5>
                  <p>Many variations of passages of Lorem available, but the majority have suffered
                    alteration in some form, by injected humour</p>
                </a>
              </div>
            </div>

            <div className="text-center">
              <a className="button-main button-main-margin" href="industry.html">Full Services</a>
            </div>
          </section>


          <section className="testimonials-section text-center">
            <div className="container">
              <h3 className="text-white">Testimonials</h3>

              <div className="blockquote-thumb-nav">
                <img src="images/testimonials-client-1.png" alt="testimonials-client"/>
                <img src="images/testimonials-client-2.png" alt="testimonials-client"/>
                <img src="images/testimonials-client-3.png" alt="testimonials-client"/>
              </div>

              <div className="blockquote-carousel">

                <blockquote>
                  <p className="blockquote-text">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem
                    Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and
                    scrambled it to make a type specibook. It has survived not only five centuries,
                    but also the leap into
                    electronic typesetting.unchanged.</p>
                  <p className="blockquote-client-name text-uppercase">Client Name</p>
                  <p>Designation</p>
                </blockquote>

                <blockquote>
                  <p className="blockquote-text">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem
                    Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and
                    scrambled it to make a type specibook. It has survived not only five centuries,
                    but also the leap into
                    electronic typesetting.unchanged.</p>
                  <p className="blockquote-client-name text-uppercase">Client Name</p>
                  <p>Designation</p>
                </blockquote>

                <blockquote>
                  <p className="blockquote-text">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem
                    Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and
                    scrambled it to make a type specibook. It has survived not only five centuries,
                    but also the leap into
                    electronic typesetting.unchanged.</p>
                  <p className="blockquote-client-name text-uppercase">Client Name</p>
                  <p>Designation</p>

                </blockquote>
              </div>
            </div>
          </section>


          <section className="our-blog-section">
            <h3>Our Blog</h3>
            <div className="container">
              <div className="row justify-content-center">

                <div className="col-lg-6 our-blog-card">
                  <a href="blog-post.html">
                    <img className="our-blog-slide-img" src="images/our-blog-slide-img.png" alt=""/>
                    <div className="our-blog-card-wrap">
                      <span className="our-blog-date">February 22, 2016 </span>
                      <h5>Blog Heading here</h5>
                      <p>Established fact that a reader will be distracted by the readable of a
                        page when looking at its
                        layout...</p>
                    </div>
                  </a>
                </div>

                <div className="col-lg-6 our-blog-card">
                  <a href="blog-post.html">
                    <img className="our-blog-slide-img" src="images/our-blog-slide-img.png" alt=""/>
                    <div className="our-blog-card-wrap">
                      <span className="our-blog-date">February 22, 2016 </span>
                      <h5>Blog Heading here</h5>
                      <p>Popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages. fact that a reader will be distracted
                        by the readable of a page
                        when...</p>
                    </div>
                  </a>
                </div>

              </div>
            </div>
            <div className="text-center">
              <a className="button-main button-main-margin" href="blog.html">Full blog</a>
            </div>
          </section>


          <section className="quick-contact-section">
            <h3>Quick contact</h3>
            <div className="container">
              <div className="row">

                <a href="mailto:info@consultplus.com" className="col-sm-4 quick-contact-block">
                  <div className="quick-contact-block-wrap icon-quick-contact icon-email">
                    <div className="quick-contact-block-info">
                      <h5>Email</h5>
                      <span>info@consultplus.com</span>
                    </div>
                  </div>
                </a>

                <a href="callto:9188798767990" className="col-sm-4 quick-contact-block">
                  <div className="quick-contact-block-wrap icon-quick-contact icon-call-us">
                    <div className="quick-contact-block-info">
                      <h5>Call us</h5>
                      <span>+91 8879 8767 990</span>
                    </div>
                  </div>
                </a>

                <a href="mailto:consult@career.com" className="col-sm-4 quick-contact-block">
                  <div className="quick-contact-block-wrap icon-quick-contact icon-career">
                    <div className="quick-contact-block-info">
                      <h5>Career</h5>
                      <span>consult@career.com</span>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </section>


        </div>


        <Footer/>
      </div>
    );
  }
}

export default App;
