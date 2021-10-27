import React, { useState } from 'react'
import workapi from "./API/workApi.js";

const HowWorks = () => {

    useState(workapi);

    return (
        <section>
            <div className="work-contiainer container">
                <h1 className="main-heading text-center">How Does It Works</h1>
                <div className="row">
                    {workapi.map((curElem) => {
                        const { logo, title, info } = curElem;
                        return (
                            <>
                                <div className="col-12 col-lg-4 text-center work-container-subdiv">
                                    <i className={`fontawesome-style ${logo}`}></i> 
                                    <h2 className='sub-heading'>{title}</h2>
                                    <p className="main-hero-para w-100">{info}</p>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default HowWorks;

