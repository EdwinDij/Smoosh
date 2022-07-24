import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState, MouseEvent } from 'react';
import {auth} from "../../Firebase.config"
import '../../Style/Form.scss'

function LogForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const handleSignUp = () => createUserWithEmailAndPassword
  (auth, email, password)
   /* const emailError = document.querySelector(".emailError") as HTMLInputElement;
    const passwordError = document.querySelector(".passwordError") as HTMLInputElement;
    const passwordConfirmError = document.querySelector(".passwordConfirmError") as HTMLInputElement;

    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    passwordConfirmError.innerHTML = ""
*/
  
  return (
    <div>
      <div className="errorBox"></div>
      <div className="passwordError"></div>
      <div className="passwordConfirmError"></div>
        <form action='Post' onSubmit={handleSignUp} className='log-form'>
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
          <label>Confirmer le mot de passe</label>
          <input type="password" 
          name="pwd" 
          className='input-login'
          onChange={(e) => setPasswordConfirm(e.target.value)}/>
          <button type='submit'>S'inscrire</button>
        </form>
    </div>
  )
}

export default LogForm