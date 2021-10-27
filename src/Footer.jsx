import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3 my-3">
                                    <h2>Company</h2>
                                    <ul>
                                        <li><a href="#/">About</a></li>
                                        <li><a href="#/">Jobs</a></li>
                                        <li><a href="#/">Terms of service</a></li>
                                        <li><a href="#/">Site map</a></li>
                                        <li><a href="#/">Pricing</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3 my-3">
                                    <h2>Product</h2>
                                    <ul>
                                        <li><a href="#/">Designer</a></li>
                                        <li><a href="#/">Interactions</a></li>
                                        <li><a href="#/">Editor</a></li>
                                        <li><a href="#/">Hosting</a></li>
                                        <li><a href="#/">Pricing</a></li>
                                        <li><a href="#/">Enterprise</a></li>
                                        <li><a href="#/">Templates</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3 my-3">
                                    <h2>Legal Info</h2>
                                    <ul>
                                        <li><a href="#/">Terms of service</a></li>
                                        <li><a href="#/">Refund policy</a></li>
                                        <li><a href="#/">Content policy</a></li>
                                        <li><a href="#/">Privacy policy</a></li>
                                        <li><a href="#/">Support</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3 my-3">
                                    <h2>Social Media Handles</h2>
                                    <div className="social">
                                        <a href="/#"><i className='fab fa-facebook fontawesome-style'></i></a>
                                        <a href="/#"><i className='fab fa-instagram fontawesome-style'></i></a>
                                    </div>
                                    <div className="social">
                                        <a href="/#"><i className='fab fa-youtube fontawesome-style'></i></a>
                                        <a href="/#"><i className='fab fa-twitter fontawesome-style'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr /><p className='main-hero-para'>Copyright © 2021-2022 QuickPay.com | All rights reserved!!</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
