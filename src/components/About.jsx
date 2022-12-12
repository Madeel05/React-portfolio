import React, { useEffect } from 'react';
import Skills from './Skills';
import Facts from './Facts';
// import Testimonials from './Testimonials';
import Head from './Head';
import Title from './Title';

const About = () => {
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
            <Head title="About" />
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <Title title="About us">
                    Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an ecommerce webapp, customer web portal and documentary launch websites.
                    </Title>
                    <div className="row">
                        <div className="col-lg-1">
                          
                        </div>
                        <div className="col-lg-10 pt-4 pt-lg-0 content">
                            <h3>Web Developer & Designer</h3>
                            <p className="fst-italic">
                            I don’t just build websites, we build websites that SELLS
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-rounded-right"></i> <strong>Birthday:</strong> 4 August 2001</li>
                                        <li><i className="bi bi-rounded-right"></i> <strong>Website:</strong> adeelempire05@gmail.com</li>
                                        <li><i className="bi bi-rounded-right"></i> <strong>Phone:</strong> 03084497356</li>
                                        <li><i className="bi bi-rounded-right"></i> <strong>City:</strong> City : Lahore, Pakistan</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-rounded-right"></i> <strong>Age:</strong> 21</li>
                                        <li><i className="bi bi-rounded-right"></i> <strong>Degree:</strong> Intermidate</li>
                                        <li><i className="bi bi-rounded-right"></i> <strong>PhEmailone:</strong> adeelempire05@gmail.com</li>
                                        <li><i className="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                web developer & programmer living in pakistan. I have a good skills in HTML, CSS BOOSTRAP, PHP & Codeigniter. Easily Customize any website and design. 2 years experience now available for you.  
                            </p>
                        </div>
                        <div className='col-lg-1'>

                        </div>
                    </div>

                </div>
            </section>
            <Skills />
            <Facts />
            {/* <Testimonials /> */}
        </>
    )
}

export default About