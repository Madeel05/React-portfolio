import React from 'react'
import Head from './Head'

const Error = () => {
    return (
        <>
            <Head title="ERROR" />
            <section>
                <div className='submitted d-flex align-items-center'>
                    <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                        <h1>Not Found !</h1>
                        <h2>This Page You requested is not Found</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error