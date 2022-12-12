import React from 'react';
import Head from './Head';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Head title="Home"/>
            <section id="hero" className="d-flex align-items-center">
                <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Muhammad Adeel</h1>
                    <h2>I'm a professional Web Developer from Pakistan</h2>
                    <Link to='about' className="btn-about">About Me</Link>
                </div>
            </section>
        </>
    )
}

export default Home