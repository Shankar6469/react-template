import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/*' element={<Notfound/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
