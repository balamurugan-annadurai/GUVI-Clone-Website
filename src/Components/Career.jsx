import React, { useContext } from 'react'
import Context from './Context';
import Card from './Card';

//Career component to display only career related blogs
const Career = () => {
  const blogs = useContext(Context);
  
  return (
      <div className='container row justify-content-center'>
        {
          blogs.map((blog, index) => (
            blog.domain === 'Career' && <Card blog={blog} key={index}/>
          ))
        }
      </div>
  )
}
export default Career