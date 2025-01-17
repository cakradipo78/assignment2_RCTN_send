import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/home'
import Skill from './pages/skill'
import About from './pages/About'
import Award from './pages/Award'
import Experience from './pages/Experience'
import Interest from './pages/Interest'
import{Routes, Route} from "react-router-dom"
import SideBar from './components/sidebar'
import Dashboard from './pages/dashboard'






function App() {


  return (
    <>

<div className="container-fluid">
    <div className="row flex-nowrap">
        <SideBar/>
        <div className="col py-3">

            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/skill' element={<Skill/>}/>
              <Route path='/about' element={<About/>}/> 
              <Route path='/experience' element={<Experience/>}/> 
              <Route path='/interest' element={<Interest/>}/>  
              <Route path='/award' element={<Award/>}/> 
              <Route path='/dashboard' element={<Dashboard/>}/> 
        
     
            </Routes>
        </div>
    </div>
</div>




    
    </>
  )
}

export default App
