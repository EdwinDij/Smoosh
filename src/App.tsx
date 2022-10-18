import React from 'react';
import './App.scss';
import './Style/Form.scss'
import './Style/Loader.scss'
import Login from './pages/Login'
import Loader from './components/Loader/Loader'
import Identity from './components/Form/Identity';
import Profil from './pages/profil';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='loader' element={<Loader />} />
        <Route path='identity' element={<Identity />} />
        <Route path='profil' element={<Profil />} />
      </Routes>


    </div>
  );
}

export default App;
