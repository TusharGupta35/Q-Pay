import React, { useState } from 'react'
import serviceapi from './API/serviceApi'

const Services = () => {

    useState(serviceapi);

    return (
        <div>
            <section className='service-main-container'>
                <div className="container">
                    <h1 className='main-heading py-5'>How to send money</h1>
                    <div className="row p-5 six-box">
                        {serviceapi.map((curElm) => {
                            const { logo, title, info } = curElm;
                            return (
                                <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv services-container">
                                    <i className={`fontawesome-style ${logo}`}></i>
                                    <h2 className='sub-heading'>{title}</h2>
                                    <p className='main-hero-para fw-lighter'>{info}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
