import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./hamburger.css";
import Scoshlogo from "../images/scosh.svg";
gsap.registerPlugin(ScrollTrigger);

function Navbar() {
    const location = useLocation();

    useEffect(() => {
        let nav = document.getElementById("nav"); //main nav container
        let navbarbrand = document.getElementsByClassName("nav-brand"); //navbar-brand or image
        let navlinks = document.getElementsByClassName("nav-link"); //nav-links
        if (location.pathname == "/") {
            //when using hashrouter location.hash can be used
            nav.classList.remove("navbar-bg");
            navbarbrand[0].classList.add("text-white");
            {
                for (let i = 0; i < 5; i++) {
                    navlinks[i].classList.add("text-white");
                }
            }
            gsap.to(".navbar", {
                backgroundColor: "#06053A",
                duration: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero", //here hero section refers to the start of blog, include it in the blog page main container classlist
                    start: "top top",
                    end: "",
                    toggleActions: "play none none reverse",
                },
            });
        } else {
            nav.classList.add("navbar-bg");
            navbarbrand[0].classList.add("text-white");
            {
                for (let i = 0; i < 5; i++) {
                    navlinks[i].classList.add("text-white");
                }
            }
        }
    }, [location]);

    useEffect(() => {
        var hamburger = document.querySelector(".hamburger");
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("is-active");
            let navmenu = document.getElementById("collapseNav");
            navmenu.classList.toggle("collapse");
        });
    });

    return (
        <nav
            className="navbar position-sticky top-0 start-0 py-3 navbar-expand-lg"
            id="nav"
        >
            {/* Scosh's logo is not included */}

            <div className="container-fluid px-md-5 px-3">
                <Link to="/" className="fw-normal navbar-brand ps-md-5">
                    <span className="nav-brand">
                        <img src={Scoshlogo} alt="Scosh 2021" />
                    </span>
                </Link>
                {/* <Link to="/contactpage" className="ms-auto">
                    <button className="btn btn-outline-info text-info">Contact Me</button>
                </Link> */}
                <button
                    className="hamburger hamburger--collapse navbar-toggler mx-2"
                    type="button"
                    data-bs-target="#collapseNav"
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div
                    className="collapse navbar-collapse flex-grow-0 panel-body"
                    id="collapseNav"
                >
                    <div className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/blogs"
                                className="nav-link text-end pe-4 pe-md-auto"
                            >
                                Blogs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/events"
                                className="nav-link text-end pe-4 pe-md-auto"
                            >
                                Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/workshops"
                                className="nav-link text-end pe-4 pe-md-auto"
                            >
                                Workshop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/teamspage"
                                className="nav-link text-end pe-4 pe-md-auto"
                            >
                                Teams
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contactpage"
                                className="nav-link text-end pe-4 pe-md-auto"
                            >
                                Contact
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
