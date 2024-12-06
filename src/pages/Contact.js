import React, { useEffect } from 'react'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import Aos from "aos";
import "aos/dist/aos.css";
function Contact() {
    useEffect(function () {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <Navbar />
            <section className="">
                <div className="container px-5">
                    {/* Contact form*/}
                    <div className=" rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5" data-aos="zoom-in-down">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope" /></div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6" data-aos="zoom-in-right">
                                <div className='phonecontianer'>
                                    <div className='phone text-gradient shadow '>
                                        <i className="fa-solid fa-phone-volume" />
                                        <h2>Phone</h2>
                                    </div>
                                    <a href='tel: 0941212097' className='contactlink'>0941212097</a>
                                </div>

                            </div>
                            <div className="col-lg-8 col-xl-6" data-aos="zoom-in-left">
                                <div className='phonecontianer'>
                                    <div className='phone text-gradient shadow '>
                                        <i className="fa-solid fa-envelope" />
                                        <h2>Email</h2>
                                    </div>
                                    <a href='mailto: solomoneshetu41@gmail.com' className='contactlink'>solomoneshetu41@gmail.com</a>
                                </div>

                            </div>
                            <div className="col-lg-8 col-xl-6" data-aos="zoom-in-up">
                                <div className='phonecontianer'>
                                    <div className='phone text-gradient shadow '>
                                        <i className="fa-solid fa-location-dot" />
                                        <h2>Address</h2>
                                    </div>
                                    <a href='https://www.google.com/maps/place/Addis+Ababa/@8.9631404,38.6133313,11z/data=!3m1!4b1!4m6!3m5!1s0x164b85cef5ab402d:0x8467b6b037a24d49!8m2!3d9.0191936!4d38.7524635!16zL20vMGR0dGY?entry=ttu' className='contactlink'>Addis Ababa</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact
