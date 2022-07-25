import React, { FormEvent, useState } from 'react'
import {Link} from "react-router-dom"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function RegisterForm() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [errorLogin, setErrorLogin] = useState("")
const auth = getAuth();


const login = async (e: FormEvent) => {

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user)
  } catch(error) {
    console.log(error)
    setErrorLogin(`${error}`)
  }
}
  return (
    <div>
      <div>{errorLogin}</div>
    <form action='get'className='log-form' onSubmit={login}>
      <label>Email</label>
      <input type="text" 
      name="email" 
      className='input-login'
      onChange={(e) => setEmail(e.target.value)}/>
      <label>Mot de passe</label>
      <input type="password" 
      name="pwd" 
      className='input-login'
      onChange={(e) => setPassword(e.target.value)}/>

      <a href='#' >mot de passe oublié?</a>
      <button className='submit-form' type="submit">Se connecter</button>
    </form>
</div>
  )
}

export default RegisterForm