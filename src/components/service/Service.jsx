import React from 'react'
import './service.css'

import {BiCheckboxSquare} from 'react-icons/bi'

const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h1 className='services__title'>Services</h1>
      

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Website Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>
          </ul>
        </article> 

        <article className='service'>
          <div className='service__head'>
            <h3>Website Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>
          </ul>
        </article> 

        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>

            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Create design for multiple platform</p>
            </li>
          </ul>
        </article> 

      </div>
    </section>
  )
}

export default Service