import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";

function App() { 
  return (
    <div className= 'p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={< Home /> } />
        <Route path='/login' element={< Login /> } />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;
