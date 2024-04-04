import React, {Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Navbar from './Navbar'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const Home = lazy(() => import("./Home"))
const Login = lazy(() => import("./Login"))
const Signup = lazy(() => import("./Signup"))


function App() {
  return (
    
    <Suspense fallback={<img src='./../image1.jpg'/>}>
    <BrowserRouter>
    

    <Navbar/>
    
    <Routes>
      <Route path='/' element={ <Home/>}/>
      
      <Route path='/login' element={ <Login/>}/>
      
      <Route path='/signup' element={ <Signup/>}/>
      <Route path='/about'  element={ <About/>}/>
      


    </Routes>
    
    </BrowserRouter>
    </Suspense>

  )
}

export default App