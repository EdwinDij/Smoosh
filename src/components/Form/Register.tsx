import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState, FormEvent } from 'react';
import { useNavigate } from "react-router-dom"
import { auth } from '../../Firebase.config';
import { validEmail } from './regex';



function LogForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirm, setPasswordConfirm] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>("")
  const [errorLogin, setErrorLogin] = useState("")

  const showPassword = () => {
    let inputPassword: any = document.getElementById("passwordhide")
    if (inputPassword.type === "password") {
      inputPassword.type = "text"
    } else {
      inputPassword.type = "password"
    }
  }

  const signIn = (e: FormEvent) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
      const user:any = userCredential.user
      localStorage.setItem('email', user.email)
      localStorage.setItem('VerifiedEmail', user.emailVerified )
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }

  return (
    <div>
      <div className="emailError">{emailError}</div>
      <div className="emailError">{errorLogin}</div>
      <div className="passwordError">{passwordError}</div>
      <div className="passwordConfirmError">{passwordConfirmError}</div>
      <form action='Post'className='log-form'>
        <label>Email</label>
        <input type="text"
          name="email"
          className='input-login'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mot de passe</label>
        <input type="password"
          name="pwd"
          id='passwordhide'
          className='input-login'
          onChange={(e) => setPassword(e.target.value)} />
        <label>Confirmer le mot de passe</label>
        <input type="password"
          name="pwd"
          className='input-login'
          onChange={(e) => setPasswordConfirm(e.target.value)} />
        <div className='bottom-form'>
          <div>
          <label className='labelChekbox'>afficher le mot de passe</label>
          <input type="checkbox" onClick={showPassword}/>
        </div>
        <button className='submit-form' type='submit' onClick={signIn}>S'inscrire</button>
        </div>
      </form>
    </div>
  )
}

export default LogForm