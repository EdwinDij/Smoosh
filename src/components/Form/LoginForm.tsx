import React, { FormEvent, useState } from 'react'
import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import  { auth } from '../../Firebase.config'

function RegisterForm() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorLogin, setErrorLogin] = useState("")


  const showPassword = () => {
    let inputPassword: any = document.getElementById("passwordhide")
    if (inputPassword.type === "password") {
      inputPassword.type = "text"
    } else {
      inputPassword.type = "password"
    }
  }

  

  return (
    <div>
      <div>{errorLogin}</div>
      <form action='get' className='log-form' >
        <label>Email</label>
        <input type="text"
          name="email"
          className='input-login'
          onChange={(e) => setEmail(e.target.value)} />
        <label>Mot de passe</label>
        <input type="password"
          name="pwd"
          id='passwordhide'
          className='input-login'
          onChange={(e) => setPassword(e.target.value)} />
        <div className='bottom-form'>
          <div>
          <label className='labelChekbox'>afficher le mot de passe</label>
          <input type="checkbox" onClick={showPassword} />
        </div>
        {/*<a href='#' >mot de passe oublié?</a>*/}
        <button className='submit-form' type="submit">Se connecter</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm