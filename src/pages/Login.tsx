import React from 'react';
import LoginForm from "../components/Form/Register";
import Register from "../components/Form/LoginForm";
import { useState, MouseEvent } from 'react';
function Login() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleModals = (e: MouseEvent<HTMLButtonElement>) => {
    if ((e.target as HTMLInputElement).id === "register") {
      setRegister(true)
      setIsActive(true)
      setLogin(false)
    } else {
      setLogin(true)
      setIsActive(false)
      setRegister(false)
    }

  }
  return (
    <div className='Login'>
      <div className="description-site">
        <h1 className="title-description">
          Partager. Découvrir. Jouer!
        </h1>
        <p className="subtitle-description">
          Smoosh c'est le réseau social des gameurs et gameuse, qui souhaite partager du contenu, des news et s'informer continuellement sur une seule et même plateforme.
        </p>
      </div>
      <div className="connection">
        <div className="button-zone">
          <button className='change-btn' id="register"
            style={{
              color: isActive ? 'red' : ''
            }}
            onClick={handleModals}>S'inscrire</button>
          <button className='change-btn' id="login"
            style={{
              color: isActive ? '' : 'red'
            }}
            onClick={handleModals}>Connection</button>
        </div>
        {register && <LoginForm />}
        {login && <Register />}
      </div>
    </div>
  )
}

export default Login