import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import {db} from '../Firebase.config'

export default function Profil() {
  const [userPseudo, setUserPseudo] = useState<string>("")
  const [userAge, setUserAge] = useState<string>("")
  const [userGame, setUserGame] = useState<string>("")
  const [userSexe, setUserSexe] = useState<string>("")

  const storEmail:any = localStorage.getItem('email')
  const colRef:any = doc(db, 'users', storEmail)
  const getUser = () => {
    getDoc(colRef)
      .then((snapshot) => {
         console.log(snapshot.data())
         const userCol:any = snapshot.data()
         setUserPseudo(userCol.Pseudo)
         setUserAge(userCol.Âge)
         setUserGame(userCol.Game)
         setUserSexe(userCol.Sexe)
      })
  }

getUser()
console.log(userPseudo)

  return (
    <div className='profil'> 
    <p>{userPseudo}</p>
    <p>{userAge}</p>
    <p>{userGame}</p>
    <p>{userSexe}</p>
    </div>
  )
}
