import React from 'react'

function RegisterForm() {
  return (
    <div>
    <form action='Post'className='log-form'>
      <label>Email</label>
      <input type="text" name="email" className='input-login'/>
      <label>Mot de passe</label>
      <input type="password" name="pwd" className='input-login'/>
      <a href='#' >mot de passe oublié?</a>
      <button className='submit-form'>Se connecter</button>
    </form>
</div>
  )
}

export default RegisterForm