import React, { useContext } from 'react'
import Context from './Context';
import Card from './Card';

//CyberSecurity component to display only CyberSecurity related blogs
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