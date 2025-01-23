import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (


    <div className='bg-whitesmoke-300 min-h-screen p-4 items-center justify-center flex'>

        <div className='m-40 mt-5'>
            <h1 className='font-bold text-7xl text-blue-500 mt-6'>facebook</h1>
            <h3 className='mt-2  text-2xl'>Facebook helps you connect and share <br /> with the people in your life.</h3>
        </div>

        <div>

        <form className="shadow-xl border  w-full rounded-lg max-w-md p-8">
            
            <div>
                <input type="text" placeholder='Email address or phone number'
                 className='h-12 w-full  border-gray-200 rounded-md px-4 border' />
            </div>
            <div>
                <input type="text" placeholder='Password'
                 className='h-12 w-full border-gray-200 rounded-md px-4 border mt-3' />
            </div>

            <div className='bg-blue-600 text-white font-semibold pt-2 pb-2 mt-3 rounded-md px-5 text-center text-2xl'>
            <button>Log in</button>
            </div>

            <a href="" className='justify-center flex mt-7 text-blue-500'>Forgotten Password?</a>

            <div className='border mt-4'></div>

            <div className='flex justify-center  '>
                <Link to="/signup" className='mt-4 rounded-md bg-green-600 text-white text-lg hover:bg-green-700  font-medium h-12 w-48 flex justify-center items-center pt-4 pb-4'>Create a new account</Link>
            </div>

            


           
        </form>
        <p className='mb-6 p-10'>Create a Page for a celebrity, brand or business.</p>


        </div>
        

    </div>
    
  )
}

export default Login
