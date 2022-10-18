import React, { FormEvent, useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import  { auth, db } from '../../Firebase.config'
import { useNavigate } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore';
function RegisterForm() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorLogin, setErrorLogin] = useState("")
  const [userCollection, setCollection] = useState([])
  const navigate = useNavigate()



  const login = async (e: FormEvent) => {
    e.preventDefault()
    const docRef = doc(db, 'users', email) // collection de l'user enregistrer
    try {
      const userCredentials:any = await signInWithEmailAndPassword(auth, email, password)
      //console.log(userCredentials)
      const user = userCredentials.user
      const docUser = await getDoc(docRef)
      const dataUser:any = docUser.data()
      setCollection(dataUser)
      console.log(userCollection)
      navigate('/profil')
    }
    catch(error) {
      console.log(error)
      alert(error)
    }
  }

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
      <form action='get' className='log-form' onSubmit={login}>
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