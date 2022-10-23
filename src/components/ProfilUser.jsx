import React, {useState} from 'react'
import imgDefault from '../assets/user.png'

export default function ProfilUser({pseudo, age, game, sexe}) {

console.log(pseudo)

  return (
    <div>
      <div>
        <img src={imgDefault} alt="default img"/>
      </div>
      <div>{/* infos de l'user*/}
        <h1 className='text-black'>{pseudo}</h1>
      </div>
      
    </div>
  )
}
