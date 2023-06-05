import React from 'react'

const Skills = () => {
  return (
    <>
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Web developer responsible for end-to-end web app development. Responsible for full stack web development for all client projects. Responsible for mobile application back-end api’s.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Php Codeigniter <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Php Laravel <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Node & Express <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">

          <div className="progress">
              <span className="skill">CSS <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">React <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Mongodb <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Skills