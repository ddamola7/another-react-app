import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      <Outlet/>
    </div>
    <Footer/>
   
    
    
    
    
    </>
    
  )
}

export default App
