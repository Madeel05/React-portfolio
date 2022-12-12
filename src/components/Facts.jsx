import React from 'react'

const Facts = () => {
  return (
    <>
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Facts</h2>
          <p>We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.</p>
        </div>

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hours Of Support</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hard Workers</p>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Facts