import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
// import "./style.css"
export default function Navbar() {
    const [Collapse, setCollapse] = useState("")
    const [Show, setShow] = useState("")
    const [Expanded, setExpanded] = useState(false)
    const [Togglestatus, setToggelestatus] = useState(false)



    const Toggle = () => {
        if (!Togglestatus) {
            setCollapse("collapsed")
            setShow("show")
            setExpanded(true)

        } else {
            setCollapse("")
            setShow("")
            setExpanded(false)

        }
        setToggelestatus(!Togglestatus)
    }
    return (
        <div>
            <nav className="navbar navbar1 navbar-expand-lg bg-body-light mb-1">
                <div className="container-fluid">
                    <NavLink className="navbar-brand " to="/"><h1 className="fw-bolder ml-5 fs-5">Solomon Eshetu</h1></NavLink>
                    <button className={"navbar-toggler border border-0 " + Collapse} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={Expanded} aria-label="Toggle navigation" onClick={Toggle}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="52"
                            height="24"
                            viewBox="0 0 52 24"
                        >
                            <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
                                <rect
                                    id="Rectangle_3"
                                    data-name="Rectangle 3"
                                    width="42"
                                    height="4"
                                    rx="2"
                                    transform="translate(304 47)"
                                    fill="#574c4c"
                                />
                                <rect
                                    id="Rectangle_5"
                                    data-name="Rectangle 5"
                                    width="42"
                                    height="4"
                                    rx="2"
                                    transform="translate(304 67)"
                                    fill="#574c4c"
                                />
                                <rect
                                    id="Rectangle_4"
                                    data-name="Rectangle 4"
                                    width="52"
                                    height="4"
                                    rx="2"
                                    transform="translate(294 57)"
                                    fill="#574c4c"
                                />
                            </g>
                        </svg>
                    </button>
                    <div className={"collapse navbar-collapse navitem " + Show} id="navbarSupportedContent">
                        <ul className='navbar-nav navbar-nav1  mb-3 mt-3'>
                            <li className='nav-item nav-item1 '>
                                <NavLink className='nav-link  Home ' aria-current='page' to='/'>
                                    <i className='fa-solid fa-home me-2'> </i> Home
                                </NavLink>
                            </li>
                            <li className='nav-item nav-item1'>
                                <NavLink className='nav-link Flight ' aria-current='page' to='/Resume'>
                                    <i className="fa-solid fa-file me-2"></i> Resume
                                </NavLink>
                            </li>
                            <li className='nav-item nav-item1'>
                                <NavLink className='nav-link Hotel ' aria-current='page' to='/Projects'>
                                    <i class="fa-brands fa-github me-2"></i> Projects
                                </NavLink>
                            </li>
                            <li className='nav-item  nav-item1'>
                                <NavLink className='nav-link  Tour' aria-current='page' to='/Contact'>
                                    <i className='fa-solid fa-user me-2 '> </i>Contact
                                </NavLink>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
