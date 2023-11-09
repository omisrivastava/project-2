import React from 'react'
import './Card.css'
const Card = ({ id, name, location, speciality, description, image }) => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={image} alt='' />
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
        <div className='card-body'>
          <h5>{speciality}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
