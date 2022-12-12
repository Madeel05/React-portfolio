import React from 'react';
import Head from './Head';
import Title from './Title';

const Resume = () => {
  return (
    <>
      <Head title="Resume" />
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">

          <Title title="Resume" >
          Remember the two benefits of failure. First, if you do fail, you learn what doesn’t work; and second, the failure gives you the opportunity to try a new approach.
          </Title>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Muhammad Adeel</h4>
                <p><em>Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an ecommerce webapp, customer web portal and documentary launch websites.</em></p>
                <p>
                  <ul>
                    <li>City : Lahore, Pakistan</li>
                    <li>03084497356</li>
                    <li>adeelempire05@gmail.com</li>
                  </ul>
                </p>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Matric</h4>
                <h5>2017 - 2018</h5>
                <p>Obtained Marks (879/1100)</p>
              </div>
              <div className="resume-item">
                <h4>Intermediate (I.C.S) </h4>
                <h5>2019 - 2020</h5>
                <p><em>Govt. College for Boys, Gulberg, Lahore</em></p>
                <p>Obtained Marks (820/1100)</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Web developer</h4>
                <h5>2020 - 2021</h5>
                <p><em>A-tech Solutions </em></p>
                <p>
                  <ul>
                    <li>Web developer responsible for end-to-end web app development.</li>
                    <li>Responsible for full stack web development for all client projects.</li>
                    <li>Experience working as part of a team toward a singular goal</li>
                  </ul>
                </p>
              </div>
              <div className="resume-item">
                <h4>Web app developer </h4>
                <h5>2021 - *</h5>
                <p><em>Legacy Ventuers </em></p>
                <p>
                  <ul>
                    <li>Web developer responsible for front-end and back-end web app development.</li>
                    <li>Responsible for mobile application back-end api’s.</li>
                  </ul>
                </p>
              </div>
              <h3 className="resume-title">Certifications</h3>
              <div className="resume-item">
                <h4>MERN Stack + Native Developer</h4>
                <h5>JUNE 2022 - OCT 2022</h5>
                <p><em>Pny trainings</em></p>
                <p>
                  <ul>
                    <li>Completed certification in MERN (Mongo dB, Express, React, Nodejs) and React Native to improve development skills</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Resume