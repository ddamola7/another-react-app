// import React from 'react'

// const Signup = () => {
//   return (
//     <>

//        <div className='min-h-screen bg-gray-100 flex justify-center items-center p-4'>

//        <div>
//             <h1 className='text-blue-600 text-6xl mt-4 font-bold h-4'>facebook</h1>
//         </div>

        
//         <div>
//             <h2 className='text-3xl font-semibold text-center mt-0 '>Create a new account</h2>
//             <p className='text-center mb-7 mt-2 text-gray-500'>It's quick and easy.</p>
//         </div>

        
//        <form action="">

//         <div className='mb-4 flex gap-2 rounded-lg text-sm'>
//             <input type="text" placeholder='Firstname'/>
//             <input type="text" placeholder='Surname'/>

//         </div>

        




//        </form>









//        </div>
        




//         </>
        








      
    

    

    
//   )
// }

// export default Signup

import React from 'react'

const Signup = () => {
  return (
<>
      

    <div className='min-h-screen bg-gray-100 flex justify-center items-center p-4'>

        <div className='w-full max-w-[510px] bg-white p-8 rounded-lg shadow-lg'>
            
        <div>
                <h1 className='text-3xl font-semibold text-center mt-0 '>Create a new account</h1>
                <p className='text-center mb-7 mt-2 text-gray-500'>It's quick and easy.</p>
            </div>


        <form action="">
            <div className='mb-4 flex gap-4'>
                <input type="text"  placeholder='First name' className='h-12 border border-c rounded-md flex-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                <input type="text"  placeholder='Surname' className='h-12  border rounded-md flex-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            </div>

            <div className='mb-4'>
                <p className='text-sm text-gray-600 mb-1'>Date of birth</p>
                
                <input type="date" className='w-full h-12 border rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                
            </div>

            <div>
            <div className="mb-4">
            <p className="text-sm text-gray-700">Gender</p>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="male" className="text-blue-500" />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="female" className="text-blue-500" />
                <span className="text-gray-700">Female</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="custom" className="text-blue-500" />
                <span className="text-gray-700">Custom</span>
              </label>
            </div>
          </div>
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1" htmlFor="email"></label>
            <input
              type="text"
              id="email"
              placeholder="Mobile number or email address"
              className="h-12 w-full border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>


          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-1" htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="New password"
              className="h-12 w-full border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>


          <div className="mb-6 text-sm text-gray-600">
            <p>
              People who use our service may have uploaded your contact information to Facebook. <a href="#" className="text-blue-900 hover:underline">Learn more.</a>
            </p>

            <p className="mt-2">
              By clicking Sign Up, you agree to our <a href="#" className="text-blue-900 hover:underline">Terms, Privacy Policy</a> and <a href="#" className="text-blue-900 hover:underline">Cookie Use.</a> You may receive SMS notifications from us and can opt out at any time.
            </p>

            </div>

            


            <div className="mb-4">
            <button
              type="submit"
              className="w-60 bg-green-600 text-white py-3 rounded-md font-semibold ml-[100px]"
            >
              Sign Up
            </button>
          </div>


          <div className="text-center text-sm text-gray-600">
            <p>
              Already have an account? <a href="#" className="text-blue-900 hover:underline">Log in</a>
            </p>
          </div>

        </form>
        </div>
        
        
    </div>

      
</>
  )
}

export default Signup

