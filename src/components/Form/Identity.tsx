import React from 'react'

export default function Identity() {

  return (
    <div className='Identity'>
      <form className='identity-form'>
        <label>Pseudo</label>
        <input name="pseudo"type="text"/>
        <label>Email</label>
        <input name='email' type="text">{/*récuperer les donné du local storage*/}</input>
        <label>Âge</label>
        <input name='age' type="number" min="0" max="100"/>
        <label>Sexe</label>
        <input type="text"list='sexe' name='sexe' id="sexeinput" />
        <datalist id='sexe'>
          <option value="Femme"/>
          <option value="Homme"/>
          <option value="Non-binaire"/>
          <option value="Autre"/>
        </datalist>
        <button type='submit'>Envoyer</button>
      </form>
    </div>
  )
}
