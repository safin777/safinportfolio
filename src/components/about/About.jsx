import React from "react";
import "./about.css";
import ME from "../../assets/img/me2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h1 className="about__title">About Me</h1>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>6 month working experience</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>34+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <BsFolderCheck className="about__icon" />
                            <h5>Projetcs</h5>
                            <small>15+ completed projects</small>
                        </article>
                    </div>
                    <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;
