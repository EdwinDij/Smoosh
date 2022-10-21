import React, { useState, FormEvent } from 'react'
import { useNavigate } from "react-router-dom"
import { gameObj } from '../../JeuxObj'
import { db } from '../../Firebase.config'
import {  doc, updateDoc } from 'firebase/firestore'
export default function Identity() {
  const [pseudo, setPseudo] = useState("")
  const [age, setAge] = useState("")
  const [sexe, setSexe] = useState("")
  const [game, setGame] = useState("")

  const navigate = useNavigate()
  const storEmail:any = localStorage.getItem('email')
  const userRef:any = doc(db, 'users', storEmail)
  const postData = async (e: FormEvent) => {
    const userData = updateDoc(userRef,{
      Pseudo: pseudo,
      Âge: age,
      Sexe: sexe,
      Game: game,
    },)
    navigate('/profil')
  }
  

  return (
    <div className='Identity'>
      <form className='identity-form' onSubmit={postData} >
        <label>Pseudo</label>
        <input name="pseudo" type="text" onChange={(e) => setPseudo(e.target.value)} />
        <label>Âge</label>
        <input name='age' type="number" min="10" max="100" onChange={(e) => setAge(e.target.value)} />
        <label>Sexe</label>
        <select name='sexe' id="sexeinput" onChange={(e) => setSexe(e.target.value)}>
          <option value="">--Choississez votre sexe</option>
          <option value="Femme">Femme</option>
          <option value="Homme">Homme</option>
          <option value="Autre">Autre</option>
          <option value="None">Ne souhaite pas le divulguer</option>
        </select>
        <label>Jeux favori</label>
        <select name="games" id="games" onChange={(e) => setGame(e.target.value)}>
          {gameObj.map((games: any, key: any) => {
            return <option key={games.id}>{games.name}</option>
          })}
        </select>
        <button type='submit'>Envoyer</button>
      </form>
    </div>
  )
}
