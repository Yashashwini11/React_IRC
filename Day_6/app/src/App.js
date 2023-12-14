import React from 'react'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import {Link} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </>
  )
}

export default App