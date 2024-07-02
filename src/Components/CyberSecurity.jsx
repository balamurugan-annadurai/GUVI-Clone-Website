import React, { useContext } from 'react'
import Context from './Context';
import Card from './Card';

const CyberSecurity = () => {
  const blogs = useContext(Context);
  return (
    <div className='container row justify-content-center'>
      {
        blogs.map((blog, index) => (
          blog.domain === 'cs' && <Card img={blog.img} title={blog.title} key={index} />
        ))
      }
    </div>
  )
}

export default CyberSecurity