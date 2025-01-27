import React from 'react'

const Blog = (props) => {
  return (
    <div className=' p-4 bg-white shadow-xs mb-4 rounded '>
        <h2 className='font-bold text-gray-600 text-xl'>{props.title}</h2>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur tempora ut, labore doloribus sequi dicta, quo atque vel nam id deleniti doloremque libero perferendis ipsa odio. Amet, minus aliquid similique quis, possimus architecto cum unde sunt molestiae quam blanditiis deserunt ipsa nemo odit, perspiciatis eos placeat voluptates quasi fugit beatae.
        </p>
        <p>Author: <span className='font-bold text-gray-600'>{props.author}</span></p>
      
    </div>
  )
}

export default Blog
