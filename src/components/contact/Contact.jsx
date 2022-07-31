import React from "react";
import "./contact.css";

import { MdMarkEmailRead } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsSkype } from "react-icons/bs";

const data = [
    {
        id: 1,
        contact: "Email",
        contact_address: "safinwebdev@gmail.com",
        ContactIcon: <MdMarkEmailRead/>,
        contact_link: "mailto:safinwebdev@gmail.com",
        slug: "Mail Me",
    },

    {
        id: 2,
        contact: "Linkedin",
        contact_address: "Sayed islam Safin",
        ContactIcon: <FaLinkedin/>,
        contact_link:
            "https://www.linkedin.com/in/sayed-islam-safin-902a16172/",
        slug:"View Profile",
            
    },

    {
        id: 3,
        contact: "Github",
        contact_address: "Safin777",
        ContactIcon: <BsGithub/>,
        contact_link: "https://www.github.com/Safin777",
        slug:"Give me a star",
    },

    {
        id: 4,
        contact: "Whatsapp",
        contact_address: "Sayed islam Safin",
        ContactIcon: <BsWhatsapp/>,
        contact_link: "https://api.whatsapp.com/send?phone==+8801856777055",
        slug:"Send a Message",
    },

    {
        id: 5,
        contact: "Skype",
        contact_address: "Sayed islam Safin",
        ContactIcon: <BsSkype/>,
        contact_link: "https://join.skype.com/invite/vAp4Gc9jXvnG",
        slug:"Call me",
    },
];
const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h1>Contact Me</h1>

            <div className="container contact__container">
                {data.map(
                    ({
                        id,
                        contact,
                        contact_address,
                        ContactIcon,
                        contact_link,
                        slug,
                    }) => {
                        return (
                            <div className="contact__options">
                                <article className="conatact__option" key={id}>
                                    <h3 className="contact__icon">{ContactIcon}</h3>
                                    <h4>{contact}</h4>
                                    <h5>{contact_address}</h5>
                                    <a href={contact_link}>
                                        {slug}
                                    </a>
                                </article>
                            </div>
                        );
                    }
                )}

                <form action=""></form>
            </div>
        </section>
    );
};

export default Contact;
