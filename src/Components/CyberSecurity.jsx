import React, { useContext } from 'react'
import Context from './Context';
import Card from './Card';

const CyberSecurity = () => {
  const blogs = useContext(Context);
  return (
    <div className='container row justify-content-center'>
      {
        blogs.map((blog, index) => (
          blog.domain === 'Cyber security' && <Card blog={blog} key={index}/>
        ))
      }
    </div>
  )
}

export default CyberSecurity