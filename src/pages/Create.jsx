
import React, { useState } from 'react'



const Create = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const [author, setAuthor] = useState('')

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log({title,content,image,author})

        setTitle('');
        setContent('');
        setImage('');
        setAuthor('');
    }




    return (
        <main className='bg-gray-100 flex items-center min-h-screen  flex-col'>
            <div className='mt-20'>
                <h2 className='text-center font-bold text-2xl underline text-slate-800'>Add a blog</h2>
                <form onSubmit={handlesubmit} action="" className='shadow-xl mt-10 p-10 bg-white rounded'>
                    <div>
                        <label htmlFor="">Title:</label>
                        <input 
                        value={title} 
                        className='rounded shadow-xs p-2 bg-gray-100 w-full mb-2' 
                        type="text" 
                        placeholder='Title'
                        onChange={(e) => setTitle(e.target.value)}
                         />
                        
                    </div>

                    <div>
                        <label htmlFor="">Content:</label>
                        <textarea value={content} 
                        className='rounded shadow-xs p-2 bg-gray-100 w-full h-20 mb-2' 
                        name="" id="" placeholder='write a content here'  onChange={(e) => setContent(e.target.value)}></textarea>
                       
                    </div>

                    <div>
                        {/* <label htmlFor="">Images</label> */}
                        <input value={image} className='bg-gray-100 p-2 shadow-xs mb-2' type="file"
                         onChange={(e) => setImage(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="">Author:</label>
                        <select value={author} className=' ms-2 bg-gray-100 p-2 shadow-xs'  name="" id=""  onChange={(e) => setAuthor(e.target.value)}>
                        <option value="">select Author</option>  
                            <option value="Gbenga">Gbenga</option>
                            <option value="Alex">Alex</option>
                            <option value="Ehis">Ehis</option>
                        </select>
                    </div>

                    <button className='w-full py-1 text-center rounded bg-blue-500 hover:bg-blue-300 mt-4 font-medium text-white' type='Submit'>Add Blog</button>
                </form>
            </div>
        </main>
    )
}

export default Create
