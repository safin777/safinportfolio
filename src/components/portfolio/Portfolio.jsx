import React from "react";
import "./portfolio.css";

import Portfolio1 from "../../assets/img/Portfolio1.png";
import Portfolio2 from "../../assets/img/Portfolio2.png";
import Portfolio3 from "../../assets/img/Portfolio3.png";
import Portfolio4 from "../../assets/img/Portfolio4.png";

const data = [
    {
        id: 1,
        image: Portfolio1,
        title: "Sayed-Portfolio simple React Portfolio  Responsive Website ",
        github: "https://github.com/safin777/safinportfolio",
        demo: "https://github.com/safin777/safinportfolio",
    },

    {
        id: 2,
        image: Portfolio2,
        title: " CineFlix A Responsive Website for Movie Recommendation ",
        github: "https://github.com/safin777/Cineflix",
        demo: "https://safin777.github.io/Cineflix/",
    },

    {
        id: 3,
        image: Portfolio3,
        title: "Learn-JS DOM manipulation with Vanilla JavaScript",
        github: "https://github.com/safin777/learnJS",
        demo: "https://safin777.github.io/learnJS/",
    },

    {
        id: 4,
        image: Portfolio4,
        title: "R-Quiz A Responsive Website for Quiz Game with React and firebase",
        github: "https://github.com/safin777/r-quiz",
        demo: "https://safin777.github.io/r-quiz/",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works....</h5>
            <h1 className="portfolio__title">Portfolio</h1>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-img">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
