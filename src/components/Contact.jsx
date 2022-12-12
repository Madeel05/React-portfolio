import React, { useState } from 'react';
import Head from './Head';
import Title from './Title';
import {useNavigate} from 'react-router-dom';


const Contact = () => {
  const submittedPage = useNavigate();

  const [client, setClient] = useState({ name: '', email: '', subject: '', message: '' });

  function submitForm(){
      submittedPage('/submitted');
  }

  return (
    <>
      <Head title="Contact us" />
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

          <Title title="Contact us" >
          If you’d like to know more about my work or you have a project u want to discuss feel free to get in touch.I am here for help.
          </Title>

          {/* <div>
          <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        </div> */}

          <div className="row mt-5">

            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Lahore, Pakistan</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>adeelempire05@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>03084497356</p>
                </div>

              </div>

            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">

              <form  onSubmit={() => submitForm()} className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" autoComplete='off' onChange={e => setClient({ ...client, name: e.target.value })} value={client.name} id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" autoComplete='off' onChange={e => setClient({ ...client, email: e.target.value })} value={client.email} id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" autoComplete='off' value={client.subject} id="subject" onChange={e => setClient({ ...client, subject: e.target.value })} placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" onChange={e => setClient({ ...client, message: e.target.value })} value={client.message} required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Contact