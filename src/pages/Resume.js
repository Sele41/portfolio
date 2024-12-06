import React, { useState, useEffect } from 'react'
import Footer from '../componenets/Footer'
import Navbar from '../componenets/Navbar'
import Aos from "aos";
import "aos/dist/aos.css";
function Resume() {
    const [imgurl, setimgurl] = useState("")
    useEffect(function () {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <main class="flex-shrink-0">
                <Navbar />
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0" data-aos="zoom-in-down"><span className="text-gradient d-inline">Resume</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            {/* Experience Section*/}
                            <section>
                                <div className="d-flex align-items-center justify-content-between mb-4">

                                    {/* Download resume button*/}
                                    {/* Note: Set the link href target to a PDF file within your project*/}
                                    <a className="btn btn-primary px-4 py-3" href="/assets/Solomon Eshetu.pdf" data-aos="zoom-in-right" download={"Solomon Eshetu.pdf"}>
                                        <div className="d-inline-block bi bi-download me-2" />
                                        Download Resume
                                    </a>
                                </div>
                                <section />
                                <h2 className="text-secondary fw-bolder mb-4" data-aos="zoom-in-up">Education</h2>
                                {/* Education Card 1*/}
                                <div className="card shadow border-0 rounded-4 mb-5" data-aos="zoom-in-up">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <button className="col text-center text-lg-start mb-4 mb-lg-0 border border-none" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => (setimgurl("/assets/SuperGoal.JPG"))}>
                                                <img src='/assets/SuperGoal.JPG' width={200} className='' alt='/no' />
                                            </button>
                                            <div className="col-lg-8"><div>I am delighted to share that I have successfully completed a web development course from Super Goal Computer and Language Training Institute, for which I received a certificate. The course, conducted over a duration of 40 hours, provided comprehensive training in HTML, CSS, and JavaScript. I completed this course on October 22, 2022, gaining valuable skills and knowledge in web development.</div></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Education Card 2*/}
                                <div className="card shadow border-0 rounded-4 mb-5" data-aos="zoom-in-up">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <button className="col text-center text-lg-start mb-4 mb-lg-0 border border-none" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => (setimgurl("/assets/Dilla Universty.JPG"))}>
                                                <img src='/assets/Dilla Universty.JPG' width={100} className='' alt='/no' />
                                            </button>
                                            <div className="col-lg-8"><div>I obtained this certificate as a result of successfully completing my BSc degree in Computer Science at Dilla University in 2024, and I also passed the National Exit Exam.</div></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Divider*/}
                            <div className="pb-5" />
                            {/* Skills Section*/}
                            <section>
                                {/* Skillset Card*/}
                                <div className="card shadow border-0 rounded-4 mb-5" data-aos="zoom-in-up">
                                    <div className="card-body p-5">
                                        {/* Professional skills list*/}
                                        <div className="mb-5">

                                            <div className="d-flex align-items-center mb-4" >

                                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools" /></div>
                                                <h3 className="fw-bolder mb-0" ><span className="text-gradient d-inline">frameworks </span></h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4" >
                                                <div className="col mb-4 mb-md-0" ><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100" >ReactJS</div></div>
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">ASP.NET</div></div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                {/* <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">ASP.NET</div></div> */}

                                            </div>
                                        </div>
                                        {/* Languages list*/}
                                        <div className="mb-0" >
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash" /></div>
                                                <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0" ><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                                                <div className="col mb-4 mb-md-0" ><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0" ><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Java</div></div>
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">C#</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
            <div className="modal zoom-in" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border border-0">
                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Certificate</span></h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body ">
                            <img src={imgurl} className='cerificateimg' alt='/no' />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resume
