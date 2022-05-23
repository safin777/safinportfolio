import React from "react";
import "./experience.css";
import {SiCss3} from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import {SiExpress} from "react-icons/si";
import { SiPhp } from "react-icons/si";
import {SiPython} from "react-icons/si";
import {SiNextdotjs} from "react-icons/si";
import {SiMysql} from "react-icons/si";
import {SiGit} from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {SiDocker} from "react-icons/si";
const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h1 className="experience__title">My Experiences</h1>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3 className="experience__content-title">Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                        <SiHtml5 className="experience__icon" />
                            <div>
                                <h5>HTML</h5>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                        <SiCss3 className="experience__icon" />
                            <div>
                                <h5>CSS</h5>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                        <SiBootstrap className="experience__icon" />
                            <div>
                                <h5>Bootstrap</h5>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                        <SiTailwindcss className="experience__icon" />
                            <div>
                                <h5>Tailwind CSS</h5>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                        <SiReact className="experience__icon" />
                            <div>
                                <h5>React</h5>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                        <SiVuedotjs className="experience__icon" />
                            <div>
                                <h5>Vue</h5>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        

                        <article className="experience__details">
                        <SiJquery className="experience__icon" />
                            <div>
                                <h5>Jquery</h5>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                        <SiJavascript className="experience__icon" />
                            <div>
                                <h5>Javascript</h5>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* End of frontEnd */}

                <div className="experience__backend">
                    <h3 className="experience__content-title">Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                        <SiLaravel className="experience__icon" />
                            <div>
                                <h5>Laravel</h5>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                        <SiPhp className="experience__icon" />
                            <div>
                                <h5>PHP</h5>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                        <SiNodedotjs className="experience__icon" />
                            <div>
                                <h5>Node Js</h5>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                        <SiExpress className="experience__icon" />
                            <div>
                                <h5>Express Js</h5>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                        <SiPython className="experience__icon" />
                            <div>
                                <h5>Python</h5>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiNextdotjs className="experience__icon" />
                            <div>
                                <h5>Next.Js</h5>
                                <small className="text-light">
                                Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiMysql className="experience__icon" />
                            <div>
                                <h5>My Sql</h5>
                                <small className="text-light">
                                Experienced
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiMongodb className="experience__icon" />
                            <div>
                                <h5>Mongodb</h5>
                                <small className="text-light">
                                Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiGit className="experience__icon" />
                            <div>
                                <h5>Git</h5>
                                <small className="text-light">
                                Experienced
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiDocker className="experience__icon" />
                            <div>
                                <h5>Docker</h5>
                                <small className="text-light">
                                Intermediate
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
