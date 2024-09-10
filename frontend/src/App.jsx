import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import ProjectPage from './Pages/ProjectPage/ProjectPage'
import MobileNav from './component/MobileNav/MobileNav'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MobileNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<ProjectPage/>}/>
      </Routes>
      <Footer/>      
    </div>
  )
}

export default App