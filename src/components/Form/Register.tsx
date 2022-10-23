import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState, FormEvent } from 'react';
import { useNavigate } from "react-router-dom"
import { auth, db } from '../../Firebase.config';
import {doc, setDoc} from 'firebase/firestore'



function LogForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate()

  const showPassword = () => {
    let inputPassword: any = document.getElementById("passwordhide")
    if (inputPassword.type === "password") {
      inputPassword.type = "text"
    } else {
      inputPassword.type = "password"
    }
  }

  const signIn = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const userCredential: any = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential.user)
      localStorage.setItem('email', userCredential.user.email)
      localStorage.setItem('emailVérifié', userCredential.user.emailVerified)
      navigate('/identity')
      setDoc(doc(db,"users", email ), { //création de l'user dans la db avec son mail et son uid
        email: email,
        uid : userCredential.user.uid
      })  
    }
    catch (error) {
      console.log(error)
      alert(error)
    }
  }

  return (
    <div className='w-full max-w-xs'>
      <form action='Post' className='flex flex-col gap-3 '>
        <label>Email</label>
        <input type="text"
          name="email"
          className='focus:border-indigo-300' 
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mot de passe</label>
        <input type="password"
          name="pwd"
          id='passwordhide'
          className='focus:border-indigo-300' 
          onChange={(e) => setPassword(e.target.value)} />
        <label>Confirmer le mot de passe</label>
        <input type="password"
          name="pwd"
          className='focus:border-indigo-300' />
        <div className='bottom-form'>
          <div>
            <label className='labelChekbox'>afficher le mot de passe</label>
            <input type="checkbox" onClick={showPassword} />
          </div>
          <button className="text-right text-white bg-indigo-400 font-bold py-2 px-4 rounded hover:bg-indigo-500 " type='submit' onClick={signIn}>S'inscrire</button>
        </div>
      </form>
    </div>
  )
}

export default LogForm