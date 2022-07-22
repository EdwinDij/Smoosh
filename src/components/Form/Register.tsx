import React from 'react'
import '../../Style/Form.scss'

function LogForm() {
  return (
    <div>
        <form action='Post'className='log-form'>
          <label>Email</label>
          <input type="text" name="email" className='input-login'/>
          <label>Mot de passe</label>
          <input type="password" name="pwd" className='input-login'/>
          <label>Confirmer le mot de passe</label>
          <input type="password" name="pwd" className='input-login'/>
          <button>S'inscrire</button>
        </form>
    </div>
  )
}

export default LogForm