import React, { useContext } from 'react'
import Context from './Context';
import Card from './Card';

//FullStackDevelopment component to display only FullStackDevelopment related blogs
const FullStackDevelopment = () => {
  const blogs = useContext(Context);
  return (
    <div className='container row justify-content-center'>
      {
        blogs.map((blog, index) => (
          blog.domain === 'Full stack Development' && <Card blog={blog} key={index}/>
        ))
      }
    </div>
  )
}

export default FullStackDevelopment