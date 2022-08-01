import React from "react";
import "./contact.css";

import { MdMarkEmailRead } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsSkype } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const data = [
    {
        id: 1,
        contact: "Email",
        contact_address: "safinwebdev@gmail.com",
        ContactIcon: <MdMarkEmailRead />,
        contact_link: "mailto:safinwebdev@gmail.com",
        slug: "Mail Me",
    },

    // {
    //     id: 2,
    //     contact: "Linkedin",
    //     contact_address: "Sayed islam Safin",
    //     ContactIcon: <FaLinkedin />,
    //     contact_link:
    //         "https://www.linkedin.com/in/sayed-islam-safin-902a16172/",
    //     slug: "View Profile",
    // },

    // {
    //     id: 3,
    //     contact: "Github",
    //     contact_address: "Safin777",
    //     ContactIcon: <BsGithub />,
    //     contact_link: "https://www.github.com/Safin777",
    //     slug: "Give me a star",
    // },

    {
        id: 4,
        contact: "Whatsapp",
        contact_address: "+8801856777055",
        ContactIcon: <BsWhatsapp />,
        contact_link: "https://api.whatsapp.com/send?phone==+8801856777055",
        slug: "Send a Message",
    },

    {
        id: 5,
        contact: "Skype",
        contact_address: "Sayed islam Safin",
        ContactIcon: <BsSkype />,
        contact_link: "https://join.skype.com/invite/vAp4Gc9jXvnG",
        slug: "Call me",
    },
];

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_sfwpdxv",
                "template_8w3dw3b",
                form.current,
                "iH5cr85K1oU7osZog"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
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
                                <article className="contact__option" key={id}>
                                    <h3 className="contact__option-icon">
                                        {ContactIcon}
                                    </h3>
                                    <h4>{contact}</h4>
                                    <h5>{contact_address}</h5>
                                    <a
                                        className="contact__link"
                                        href={contact_link}
                                    >
                                        {slug}
                                    </a>
                                </article>
                            </div>
                        );
                    }
                )}

                {/* Form Section */}

                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
