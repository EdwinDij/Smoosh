import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState, MouseEvent, FormEvent, useEffect } from 'react';
import { auth } from "../../Firebase.config"
import { validEmail } from './regex';
import '../../Style/Form.scss'
import { format } from 'path';

function LogForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirm, setPasswordConfirm] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>("")
  const [emptyError, setEmptyError] = useState<string>("")
  const error = {
    emailError: "Mettre un mail valide",
    passwordError: "caractère spéciaux et au moins un chiffre sont nécessaire",
    passwordConfirmError: "Les mots de passe ne correspondent pas",
    emptyError: "remplir les champs du formulaire"
  }


  // envoie des donné a la base de donnée

  const handleSignUp = () => {

  if (password === passwordConfirm && validEmail.test(email.trim())) {
    createUserWithEmailAndPassword
    (auth, email, password)
  } else
    if (validEmail.test(email.trim())) {
      setEmailError("")
    } else
      if (password !== passwordConfirm) {
        setPasswordConfirmError(error.passwordConfirmError)
      } else if (password && email && passwordConfirm === null) {
        setEmptyError(error.emptyError)
      } 
    }
  return (
    <div>
      <div className="emailError">{emailError}</div>
      <div className="passwordError">{passwordError}</div>
      <div className="passwordConfirmError">{passwordConfirmError}</div>
      <div className="emptyError">{emptyError}</div>
      <form action='Post' onSubmit={handleSignUp} className='log-form'>
        <label>Email</label>
        <input type="text"
          name="email"
          className='input-login'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mot de passe</label>
        <input type="password"
          name="pwd"
          className='input-login'
          onChange={(e) => setPassword(e.target.value)} />
        <label>Confirmer le mot de passe</label>
        <input type="password"
          name="pwd"
          className='input-login'
          onChange={(e) => setPasswordConfirm(e.target.value)} />
        <button type='submit'>S'inscrire</button>
      </form>
    </div>
  )
}

export default LogForm