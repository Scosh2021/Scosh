import React from "react";
import "./Contact.css";
import linkedin from "../images/linkedin.svg";
import gmail from "../images/gmail.svg";
const Contact = () => {
    return (
        <div className="contact">
            <div className="contact_heading">LET’S GET TO KNOW EACH OTHER</div>
            <div className="contact_subheading">
                Fill in the details below and let’s get this conversation going
            </div>
            <form className="contact_form">
                <input type="text" name="name" id="name" placeholder="Name*" />
                <input
                    type="text"
                    name="institute"
                    id="institute"
                    placeholder="Institute/Organization*"
                />
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email*"
                />
                <textarea
                    className="msg"
                    placeholder="Your Message..."
                    name="msg"
                    id="msg"
                ></textarea>

                <button className="contact_button">Send Message</button>
            </form>
            <div className="contact_otherMethod">
                <p>OR</p>
                <p>
                    Contact Us at:{" "}
                    <a href=" https://www.linkedin.com/company/the-society-for-cultivation-of-science-and-humanities/mycompany/?viewAsMember=true">
                        <img src={linkedin} alt="linked in" />
                    </a>{" "}
                    <a href="mailto:svnit.scosh@gmail.com">
                        <img src={gmail} alt="gmail" />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
