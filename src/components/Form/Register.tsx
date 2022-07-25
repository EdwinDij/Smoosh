import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState, FormEvent } from 'react';
import { auth } from "../../Firebase.config"
import { validEmail } from './regex';
import { async } from '@firebase/util';

function LogForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirm, setPasswordConfirm] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>("")
  const [emptyError, setEmptyError] = useState<string>("")
  const [errorLogin, setErrorLogin] = useState("")
  const error = {
    emailError: "Mettre un mail valide",
    passwordError: "Le mot de passe nécessite 8 caractères",
    passwordConfirmError: "Les mots de passe ne correspondent pas",
    emptyError: "remplir les champs du formulaire"
  }
  // envoie des donné a la base de donnée

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault()
    /*if (password === passwordConfirm && validEmail.test(email.trim())) {
      const userCredentials = createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredentials)
    } else
      if (password !== passwordConfirm) {
        setPasswordConfirmError(error.passwordConfirmError)
      } else if (password || email || passwordConfirm === "") {
        setEmptyError(error.emptyError)
      } else if (password.length < 8) {
        setPasswordError(error.passwordError)
      } else if (validEmail.test(email) === false) {
        setEmailError(error.emailError)*/
  
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          console.log(userCredential.user)
        } catch(error) {
          console.log(error)
          setErrorLogin(`${error}`)
      }
    }
  
  return (
    <div>
      <div className="emailError">{emailError}</div>
      <div className="emailError">{errorLogin}</div>
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
        <button className='submit-form' type='submit'>S'inscrire</button>
      </form>
    </div>
  )
}

export default LogForm