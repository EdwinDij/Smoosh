import React from 'react';
import './App.scss';
import './Style/Form.scss'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

      {<Login />}
  
    </div>
  );
}

export default App;
