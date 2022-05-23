import React from 'react'
import './portfolio.css'
import Metro from "../../assets/img/metrocery.png";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works....</h5>
      <h1>Portfolio</h1>

      <div className='container portfolio-container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={Metro} alt="metro"/>
          </div>
          <h3>This is portfolio item title</h3>
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio