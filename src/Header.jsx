import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className='container main-hero-container'>
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-start flex-column text-start">
                            <h1 className='display-2'>Online Payment Made <br /> Easy And Quick For You.</h1>
                            <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit perferendis est ratione ab labore recusandae, error quae, dolorum nemo nostrum, consequuntur voluptatum maiores dolores sequi eum! Modi nulla autem eaque temporibus repellat, distinctio sed quam praesentium voluptas quisquam nobis ipsam odit quas exercitationem nihil minima nesciunt accusamus corporis ratione!</p>
                            <h3>Get Early Acess For You</h3>
                            <div className="input-group m-3">
                                <input type="text" className='rounded-pill w-75 me-3 form-control-text p-2' placeholder='Enter Your Email'/>
                                <button type="button" class="btn btn-primary input-group-button">Get It Now</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-hero-section-img">
                            <img src="./images/hero1.jpg" alt="heroimg1" className='img-fluid' />
                            <img src="./images/hero4.jpg" alt="heroimg4" className='img-fluid main-hero-section-img2' />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;

