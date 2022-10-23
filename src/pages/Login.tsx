import React from 'react';
import LoginForm from "../components/Form/Register";
import Register from "../components/Form/LoginForm";
import { useState, MouseEvent } from 'react';
function Login() {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleModals = (e: MouseEvent<HTMLButtonElement>) => {
    if ((e.target as HTMLInputElement).id === "register") {
      setRegister(true)
      setIsActive(true)
      setLogin(false)
    } else if ((e.target as HTMLInputElement).id === "login"){
      setLogin(true)
      setIsActive(false)
      setRegister(false)
    }
  }

  return (
    <div className='flex items-center text-black h-screen white '>
      <div className="description-site">
        <h1 className="text-6xl text-indigo-800 text-center w-9/12">
          Partager. Découvrir. Jouer!
        </h1>
        <p className="text-center w-9/12">
          Smoosh c'est le réseau social des gameurs et gameuses, qui souhaitent partager du contenu, des news et s'informer continuellement sur une seule et même plateforme.
        </p>
      </div>
      <div className="flex flex-col shadow-md bg-slate-500 rounded px-8 pt-2 pb-8 mb-4">
        <div className="pb-6 flex justify-around">
          <button className='change-btn' id="register"
            style={{
              color: isActive ? 'indigo' : ''
            }}
            onClick={handleModals}>{login}Connexion</button>
          <button className='change-btn' id="login"
            style={{
              color: isActive ? '' : 'indigo'
            }}
            onClick={handleModals}>{register}S'inscrire</button>
        </div>
        {register && <Register />}
        {login && <LoginForm />}
        
      </div>
    </div>
  )
}

export default Login