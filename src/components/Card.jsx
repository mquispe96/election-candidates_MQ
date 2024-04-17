import React from 'react'
import person from "../assets/person.jpg"

const Card = ({candidate}) => {
  return (
    <div className="candidate">
      <img src={person} alt='Person' />
      <p>{candidate}</p>
    </div>
  )
}

export default Card