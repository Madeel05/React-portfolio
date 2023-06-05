import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import Title from './Title';

const Portfolio = () => {
  const loadScript = (src) => {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script')
      script.src = src
      script.addEventListener('load', function () {
        resolve()
      })
      script.addEventListener('error', function (e) {
        reject(e)
      })
      document.body.appendChild(script)
      document.body.removeChild(script)
    })
  }

  useEffect(() => {
    loadScript(`${process.env.PUBLIC_URL}/assets/js/main.js`)
    setTimeout(() => {
      setTimeout(() => {
      }, 500)
      loadScript(`${process.env.PUBLIC_URL}/assets/js/main.js`)
    }, 200)
  }, [])
  return (
    <>
      <Head title="Protfolio" />
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">

          <Title title="Portfolio" >
          There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.
          Responsive Web Design always plays important role whenever going to promote your website.
          </Title>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">WebSite</li>
                <li data-filter=".filter-card">Web portal</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/1.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Healthy Stars</h4>
                  <p>Website</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/1.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Healthy Stars"><i className="bx bx-plus"></i></a>
                    <Link to="#"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/2.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Pulsetech</h4>
                  <p>Website</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/2.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Pulsetech"><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/3.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Taskbypay</h4>
                  <p>Web portal</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/3.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Taskbypay"><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/4.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Optemed-Telemedicine</h4>
                  <p>Website</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/4.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Optemed-Telemedicine"><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/5.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Japston</h4>
                  <p>Webite</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/5.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Japston"><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/6.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Carz Corner</h4>
                  <p>Webite</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/6.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Carz-corner"><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/7.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>School</h4>
                  <p>Web Portal</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/7.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="School"><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/10.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>IES</h4>
                  <p>Website</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/10.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Kehdo"><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/8.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Kehdo</h4>
                  <p>Web Portal</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/8.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Kehdo"><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/9.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Legacy Ventures</h4>
                  <p>Website</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/9.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Kehdo"><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
export default Portfolio