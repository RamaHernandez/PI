import React from 'react'
import "./Card.css" 

export default function Card({img,name}) {  //, temperaments, weight, id VA ADENTRO
  return (
    <div className='Card'>
        <img src={img} alt="pepito" className='img'/>
        <h2 className='dogs__name'>{name}</h2>
    </div>
  )
}
