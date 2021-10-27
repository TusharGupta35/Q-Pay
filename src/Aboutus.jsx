import React, { useState } from 'react'
import howToUseApp from "./API/howToUse.js"

const Aboutus = () => {

    useState(howToUseApp);

    return (
        <div>
            <section className='common-section our-services my-5'>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-services-leftside-img"><img src="./images/hero3.jpg" alt="aboutus-img" /></div>
                        <div className="col-12 col-lg-7 our-services-list text-start">
                            <h3 className="mini-title">-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
                            <h1 className="main-heading text-start">How to use the App?</h1>
                            {howToUseApp.map((curElm) => {
                                const { id, title, info } = curElm;
                                return (
                                    <div className="row our-services-info">
                                        <div className="col-1 our-services-number mx-3">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className='main-hero-para'>{info}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            <button className='btn-style btn-style-border mt-5'>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            {/*--------------------------------------------------------------------------------------------------------- Second part */}
            <section className='common-section our-services'>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-7 our-services-list text-start mt-5">
                            <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
                            <h1 className="main-heading text-start">World class support is available 24/7</h1>
                            {howToUseApp.map((curElm) => {
                                const { id, title, info } = curElm;
                                return (
                                    <div className="row our-services-info">
                                        <div className="col-1 our-services-number mx-3">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className='main-hero-para'>{info}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            <button className='btn-style btn-style-border mt-5'>Learn More</button>
                        </div>
                        <div className="col-12 col-lg-5 text-center our-services-leftside-img"><img src="./images/callcenter.jpg" alt="aboutus-img" /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutus;
