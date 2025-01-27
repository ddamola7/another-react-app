import React from 'react'
import Blog from '../component/Blog'

const Blogs = () => {
  return (
    <>
   <main className='bg-gray-100 px-[300px] min-h-screen pt-4'>
   <Blog title="this is the first blog" author="oyindamola"/>
    <Blog  title="this is the second blog" author="Ehi" />
    <Blog  title="this is the third blog" author="Alex"/>
    <Blog  title="this is the fourth blog" author="Khitan"/>
    <Blog  title="this is the fifth blog" author="Demola"/>
   </main>
        
      
    </>
  )
}

export default Blogs
