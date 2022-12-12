import React from 'react'
import Head from './Head'

const Submitted = () => {
    return (
        <>
            <Head title="Submitted" />
            <section>
                <div className='submitted d-flex align-items-center'>
                    <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Submitted !</h1>
                    <h2>Your application submitted we contact u shortly </h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Submitted