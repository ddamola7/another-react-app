import React from 'react'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div>
      <Navbar/>


      <div className=' mx-auto '>

      <Outlet/>
      </div>






    </div>
    
    
    
    
    
    </>
    
  )
}

export default App
