import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-800 w-full flex items-center justify-between p-4'>

        <div className=' flex justify-between items-center font-bold'>
            <h1 className='text-white'>Facebook</h1>
        </div> 
        <div className='flex justify-between gap-6 text-white font-light'>
        <Link to="/" className=' font-medium  text-black  hover:bg-blue-300 py-1 px-3 bg-blue-200 rounded-lg shadow-sm'>Home</Link>
        <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
            
        </div>

        





    </nav>
  )
}

export default Navbar

