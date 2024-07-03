import React, { useContext } from 'react'
import Context from './Context';
import Card from './Card';

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