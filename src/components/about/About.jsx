import React from "react";
import "./about.css";
import ME from "../../assets/img/me2.jpg";
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
                            <small> 1 year working experience</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>4+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <BsFolderCheck className="about__icon" />
                            <h5>Projetcs</h5>
                            <small>10+ completed projects</small>
                        </article>
                    </div>
                    <p>
                        I am web developer with a vast array of knowledge in
                        many different front end and back end
                        language,responsive frameworks, database and best code
                        practice. My objective is simply to be the best web
                        developer that I can be and to contribute to the
                        technology industry all that I know and can do. I am
                        dedicated to perfecting my craft by learning from more
                        resources, remaining humble and continuously making
                        strides to learn all that I can about development. My
                        understanding of problem-solving and Research of
                        Computer Vision and Artificial Intelligence are also
                        skills that have and will continue to contribute to my
                        overall success as a developer.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
