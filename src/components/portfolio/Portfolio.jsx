import React from 'react'
import './portfolio.css'
import Metro from "../../assets/img/metrocery.png";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works....</h5>
      <h1 className='portfolio__title'>Portfolio</h1>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={Metro} alt="metro"/>
          </div>
          <h3>This is portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div> 
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={Metro} alt="metro"/>
          </div>
          <h3>This is portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div> 
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={Metro} alt="metro"/>
          </div>
          <h3>This is portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div> 
        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={Metro} alt="metro"/>
          </div>
          <h3>This is portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div> 
        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={Metro} alt="metro"/>
          </div>
          <h3>This is portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div> 
        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={Metro} alt="metro"/>
          </div>
          <h3>This is portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div> 
        </article>
      </div>
    </section>
  )
}

export default Portfolio