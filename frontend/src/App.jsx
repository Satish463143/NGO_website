import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>      
    </div>
  )
}

export default App