import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState, FormEvent } from 'react';
import { auth } from "../../Firebase.config"
import { validEmail } from './regex';

function LogForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirm, setPasswordConfirm] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>("")
  const [errorLogin, setErrorLogin] = useState("")
  const error = {
    emailError: "Mettre un mail valide",
    passwordError: "Le mot de passe nécessite 8 caractères",
    passwordConfirmError: "Les mots de passe ne correspondent pas",
    emptyError: "remplir les champs du formulaire"
  }
  // envoie des données a la base de donnée
  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      setPasswordConfirmError(error.passwordConfirmError)
    }
    if (password.length < 8) {
      setPasswordError(error.passwordError)
    }
    if (validEmail.test(email) === false) {
      setEmailError(error.emailError)
    }
    if (password === passwordConfirm && validEmail.test(email.trim())) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential.user)
      } catch (error) {
        console.log(error)
        setErrorLogin(`${error}`)
      }
    }
  }
  //afficher le mdp

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
      <div className="emailError">{emailError}</div>
      <div className="emailError">{errorLogin}</div>
      <div className="passwordError">{passwordError}</div>
      <div className="passwordConfirmError">{passwordConfirmError}</div>
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
          id='passwordhide'
          className='input-login'
          onChange={(e) => setPassword(e.target.value)} />
        <label>Confirmer le mot de passe</label>
        <input type="password"
          name="pwd"
          className='input-login'
          onChange={(e) => setPasswordConfirm(e.target.value)} />
          <div>
          <label className='labelChekbox'>afficher le mot de passe</label>
          <input type="checkbox" onClick={showPassword}/>
          </div>
          
        <button className='submit-form' type='submit'>S'inscrire</button>
      </form>
    </div>
  )
}

export default LogForm