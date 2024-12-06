import React, { useEffect } from 'react'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import { NavLink } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
    useEffect(function () {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <main class="flex-shrink-0">
                <Navbar />
                <div>
                    <section className="py-5">
                        <div className="container px-5 mb-5">
                            <div className="text-center mb-5">
                                <h1 className="display-5 fw-bolder mb-0" data-aos="zoom-in-down"><span className="text-gradient d-inline">Projects</span></h1>
                            </div>
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-11 col-xl-9 col-xxl-8">
                                    {/* Project Card d1*/}
                                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5 descktopcard" data-aos="zoom-in-up">
                                        <div className="card-body p-0">
                                            <div className="d-flex align-items-center">
                                                <div className="p-5">
                                                    <h2 className="fw-bolder fs-4"><img src='/assets/guzo-planner-high-resolution-logo-black-transparent.svg' width={60} alt='/no' /> Guzo-Planner</h2>
                                                    <p>The Guzo-planner website is a platform that seamlessly connects hotels, airlines, and tour guides, offering travelers a wide range of choices to plan their trips. From a technical standpoint, the website is built using ReactJS for the frontend and ASP.NET for the backend. Furthermore, the payment system is implemented using Chapa, ensuring secure and convenient transactions.<b>(not Deployed)</b></p>
                                                </div>

                                                <img className="img-fluid " src="/assets/Guzo-Planner.png" alt="/no" width={400} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Project Card d2*/}
                                    <div className="card overflow-hidden shadow rounded-4 border-0 descktopcard  mb-5 " data-aos="zoom-in-up">
                                        <div className="card-body p-0">
                                            <div className="d-flex align-items-center">
                                                <div className="p-5">
                                                    <h2 className="fw-bolder"><i class="fa-solid fa-crown text-warning"></i> Sol-Movies </h2>
                                                    <p>Sol-movies is an online movie streaming website that provides users with access to a wide variety of movies. The website is built using ReactJS for the frontend and ASP.NET for the backend, ensuring a seamless and engaging user experience.<b>(not Deployed)</b></p>
                                                </div>

                                                <img className="img-fluid vidioimg cardimg" src="/assets/Sol-movies.png" alt="/no" width={400} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Project Card d3*/}
                                    <div className="card overflow-hidden shadow rounded-4 border-0 descktopcard  mb-5 " data-aos="zoom-in-up">
                                        <div className="card-body p-0">
                                            <div className="d-flex align-items-center">
                                                <div className="p-5">
                                                    <h2 className="fw-bolder">Bank Managment System</h2>
                                                    <p>The Bank Management System is a user-friendly software built with Java Swing. It streamlines banking operations, simplifies tasks, and enhances productivity. With its intuitive interface and secure architecture, it ensures efficient management and data integrity for banks.<b>(not Deployed)</b></p>
                                                </div>

                                                <img className="img-fluid vidioimg cardimg" src="/assets/Bankmanagmentsystem.png" alt="/no" width={400} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Project Card d4*/}
                                    <div className="card overflow-hidden shadow rounded-4 border-0 descktopcard  mb-5 " data-aos="zoom-in-up">
                                        <div className="card-body p-0">
                                            <div className="d-flex align-items-center">
                                                <div className="p-5">
                                                    <h2 className="fw-bolder">Solo-Brand</h2>
                                                    <p>Solo-Brand is an online shoe store that offers a wide selection of men's and women's shoes. The website is built using PHP, HTML, JavaScript, and CSS, ensuring a seamless and visually appealing shopping experience.<b>(not Deployed)</b></p>
                                                </div>

                                                <img className="img-fluid vidioimg cardimg" src="/assets/Solo-Brand.png" alt="/no" width={400} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Project Card m1 */}
                                    <div className="card mobilecard" style={{ width: '18rem' }} data-aos="zoom-in-up">
                                        <img src="/assets/Guzo-Planner.png" className="card-img-top" alt="/no" />

                                        <div className="card-body">
                                            <h5 className="card-title"><img src='/assets/guzo-planner-high-resolution-logo-black-transparent.svg' width={60} alt='/no' /> Guzo-Planner</h5>
                                            <p className="card-text">The Guzo-planner website is a platform that seamlessly connects hotels, airlines, and tour guides, offering travelers a wide range of choices to plan their trips. From a technical standpoint, the website is built using ReactJS for the frontend and ASP.NET for the backend. Furthermore, the payment system is implemented using Chapa, ensuring secure and convenient transactions.<b>(not Deployed)</b></p>
                                        </div>
                                    </div>
                                    {/* Project Card m2 */}
                                    <div className="card mobilecard" style={{ width: '18rem' }} data-aos="zoom-in-up">
                                        <img src="/assets/Sol-movies.png" className="card-img-top" alt="/no" />

                                        <div className="card-body">
                                            <h5 className="card-title"><i class="fa-solid fa-crown text-warning"></i> Sol-Movies </h5>
                                            <p className="card-text">Sol-movies is an online movie streaming website that provides users with access to a wide variety of movies. The website is built using ReactJS for the frontend and ASP.NET for the backend, ensuring a seamless and engaging user experience.<b>(not Deployed)</b></p>
                                        </div>
                                    </div>
                                    {/* Project Card m3 */}
                                    <div className="card mobilecard" style={{ width: '18rem' }} data-aos="zoom-in-up">
                                        <img src="/assets/Bankmanagmentsystem.png" className="card-img-top" alt="/no" />

                                        <div className="card-body">
                                            <h5 className="card-title">Bank Managment System</h5>
                                            <p className="card-text">The Bank Management System is a user-friendly software built with Java Swing. It streamlines banking operations, simplifies tasks, and enhances productivity. With its intuitive interface and secure architecture, it ensures efficient management and data integrity for banks.<b>(not Deployed)</b></p>
                                        </div>
                                    </div>
                                    {/* Project Card m4 */}
                                    <div className="card mobilecard" style={{ width: '18rem' }} data-aos="zoom-in-up">
                                        <img src="/assets/Solo-Brand.png" className="card-img-top" alt="/no" />

                                        <div className="card-body">
                                            <h5 className="card-title">Solo-Brand</h5>
                                            <p className="card-text">Solo-Brand is an online shoe store that offers a wide selection of men's and women's shoes. The website is built using PHP, HTML, JavaScript, and CSS, ensuring a seamless and visually appealing shopping experience.<b>(not Deployed)</b></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Call to action section*/}
                    <section className="py-5 bg-gradient-primary-to-secondary text-white">
                        <div className="container px-5 my-5">
                            <div className="text-center">
                                <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                                <NavLink className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/Contact">Contact me</NavLink>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div></main>

        </div>
    )
}

export default Projects
