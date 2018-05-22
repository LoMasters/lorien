import React, { Component } from 'react'
import Link from 'gatsby-link'
import './card.scss'

const Card = ({ title = '', body = '', url = '' }) =>
  <div className='card'>
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p>{body}</p>
    </div>
    <a className="read-more" href={url}>Learn More</a>
  </div>

export default Card
