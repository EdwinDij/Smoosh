import React  from 'react';
import LoginForm from "../components/Form/Register";
import Register from "../components/Form/LoginForm";
import {useState, MouseEvent} from 'react';
function Login() {
  const [login, setLogin]= useState(false)
  const [register, setRegister]= useState(true)


  const handleModals = (e: MouseEvent<HTMLButtonElement>) => {
    if ((e.target as HTMLInputElement).id === "register") {
      setRegister(true)
      setLogin(false)
    } else {
      setLogin(true)
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
        <button className='change-btn' id="register" onClick={handleModals}>S'inscrire</button>
        <button className='change-btn' id="login" onClick={handleModals}>Connection</button>
        {register&&<LoginForm />}
        {login&&<Register />}
        </div>
    </div>
  )
}

export default Login