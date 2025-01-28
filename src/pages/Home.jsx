import React from 'react'
import Sidebar from '../component/Sidebar'
import Main from '../component/Main'
import RightSideBar from '../component/RightSideBar'

const Home = () => {
  return (
    <> 
    <main className='w-full flex items-center'>
        <Sidebar/>
        <Main/>
        <RightSideBar/>

    </main>
   
      
    </>
  )
}

export default Home
