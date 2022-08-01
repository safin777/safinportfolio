import React from "react";
import "./footer.css";

import {FiFacebook} from "react-icons/fi";
import {BsSkype} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";

const social = [
    {
        id: 1,
        name: "Facebook",
        link: "https://www.facebook.com",
        icon: <FiFacebook />,
    },

    {
        id: 2,
        name: "Skype",
        link: "https://join.skype.com/invite/vAp4Gc9jXvnG",
        icon: <BsSkype />,
    },

    {
        id: 3,
        name: "Whatsapp",
        link: "https://api.whatsapp.com/send?phone==+8801856777055",
        icon: <BsWhatsapp />,
    },

    {
        id: 4,
        name: "Github",
        link: "https://www.github.com/Safin777",
        icon: <BsGithub />,
    },
];

const Footer = () => {
    return (
        <section id="footer">
            <footer>
                <a href="#" className="footer__logo">
                    DEV-LABOUR
                </a>
                <ul className="permalinks">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experiences</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#testimonilas">Testimonials</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                <div className="footer__socials">
                    {social.map(({ id, link, icon }) => {
                        return (
                            <a
                                href={link}
                                className="footer__social-item"
                                key={id}
                            >
                                {icon}
                            </a>
                        );
                    })}
                </div>


                <div className="footer__copyright">
                <small>&copy; DEV-LABOUR. All right reserved.</small>
                </div>

            </footer>
        </section>
    );
};

export default Footer;
