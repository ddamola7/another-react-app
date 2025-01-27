import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-blue-950 flex items-center justify-around p-20 text-white'>
        <div>
            <h3 className='text-md font-bold mb-3'>Solution</h3>
            <ul className='space-y-2'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>

                <li> <Link to={'/blogs'}>Blogs</Link></li>

                <li> <Link to={'/create'}>Add Blogs</Link></li>


                <li>Commerce</li>
                <li>Insights</li>
            </ul>
        </div>

        <div>
            <h3 className='text-md font-bold mb-3'>Support</h3>
            <ul className='space-y-2'>
                <li>Submit</li>
                <li>Documentation</li>
                <li>Guides</li>
            </ul>
        </div>

        <div>
            <h3 className='text-md font-bold mb-3'>Company</h3>
            <ul className='space-y-2'>
                <li>About</li>
                <li>Blogs</li>
                <li>Jobs</li>
                <li>Press</li>
            </ul>
        </div>
        <div>
            <h3 className='text-md font-bold mb-6'>Legal</h3>
            <ul className='space-y-2'>
                <li>Terms of services</li>
                <li>Privacy policy</li>
                <li>License</li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer
