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


const showPassword = () => {
  let inputPassword:any = document.getElementById("passwordhide")
  if (inputPassword.type === "password") {
    inputPassword.type = "text"
  } else {
    inputPassword.type = "password"
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
      id='passwordhide'
      className='input-login'
      onChange={(e) => setPassword(e.target.value)}/>
<div>
          <label className='labelChekbox'>afficher le mot de passe</label>
          <input type="checkbox" onClick={showPassword}/>
          </div>
      <a href='#' >mot de passe oublié?</a>
      <button className='submit-form' type="submit">Se connecter</button>
    </form>
</div>
  )
}

export default RegisterForm