import React from 'react'
import Adduser from './Pages/Adduser'
import Edituser from './Pages/Edituser'
import Users from './Pages/Users'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Users/>} />
        <Route path="/add" element={<Adduser/>} />
        <Route path="/edit/:id" element={<Edituser/>} />
    </Routes>
  
    </>
  )
}

export default App