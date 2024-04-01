import Article from './components/section/Article'
import Footer from './components/section/Footer'
import Navbar from './components/section/Navbar'
import Presentation from './components/section/Presentation'
import Project from './components/section/Project'
import { useState } from 'react'
import './App.css'



function App() {

  return (
    <>
      <div>
        <Navbar />
        <Presentation />
        <Project />
        <Article />
        <Footer />
      </div>
      
    </>
  )
}

export default App
