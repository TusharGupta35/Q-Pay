import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className='contactus-section my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto my-5">
                            <div className="row my-5 d-flex align-items-center">
                                <div className="contactus-leftside col-12 col-lg-5 text-start">
                                    <h1 className="main-heading fw-bold">Connect with our <br />sales team</h1>
                                    <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi modi sed consequuntur, accusantium perspiciatis aliquid blanditiis doloribus enim. Delectus, nulla.</p>
                                    <figure>
                                        <img src="./images/hero1.jpg" alt="contactusImg" className='img-fluid' />
                                    </figure>
                                </div>
                                <div className="contactus-rightside col-12 col-lg-7">
                                    <form>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name='firstname' id='firstname' placeholder='First Name' className='form-control' />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name='lastname' id='lastname' placeholder='Last Name' className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="phone" name='phone' id='phone' placeholder='Phone Number' className='form-control' />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="email" name='email' id='email' placeholder='Email-id' className='form-control' />
                                            </div>
                                        </div>
                                        <input type="text" name='add' id='add' placeholder='Enter Address' className='form-control contact-input-field' />
                                        <input type="text" name='msg' id='msg' placeholder='Enter Your Message' className='form-control contact-input-field' />
                                        <div class="form-check">
                                            <label class="form-check-label main-hero-para" for="flexCheckChecked"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>I agree that the quickpay may contact me at the email address or phone number above</label>
                                        </div>
                                        <button type='submit' className='btn btn-style w-100'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
