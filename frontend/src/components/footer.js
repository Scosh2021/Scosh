import React from "react";
import "./footer.css";
import facebook from "../images/Facebook.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import gmail from "../images/gmail.svg";
export default function Footer() {
    return (
        <footer>
            <div className="container-fluid text-light footer py-md-3">
                <p className="cr21 text-secondary ms-1">Copyright 2021</p>
                <div className="main-footer text-center">
                    <div className="row">
                        <div className="col-12 col-lg-4 d-flex py-md-2 text-center scosh-dashed">
                            <span className="line"></span>
                            <h5 className="Scosh text-center mx-2">SCOSH</h5>
                            <span className="vertical-line"></span>
                        </div>
                        <div className="col-12 col-lg-4 py-md-2 d-flex text-center locationS">
                            <i className="fas fa-map-marker-alt mx-2"></i>
                            <p className="location text-center mx-1">
                                Sardar Vallabhai Institute Of Technology
                            </p>
                        </div>
                        <div className="social-links col-12 col-lg-4 text-center">
                            <a
                                href=" https://www.facebook.com/scosh.svnit/"
                                className="link"
                            >
                                <img src={facebook} alt="" />
                            </a>
                            <a
                                href=" https://twitter.com/scosh_svnit?lang=en"
                                className="link"
                            >
                                <img src={twitter} alt="" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/the-society-for-cultivation-of-science-and-humanities/mycompany/?viewAsMember=true"
                                className="link"
                            >
                                <img src={linkedin} alt="" />
                            </a>
                            <a
                                href="https://www.instagram.com/scosh.svnit/?hl=en"
                                className="link"
                            >
                                <img src={instagram} alt="" />
                            </a>
                            <a
                                href="mailto:svnit.scosh@gmail.com"
                                className="link"
                            >
                                <img src={gmail} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
