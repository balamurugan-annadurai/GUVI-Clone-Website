import React, { useContext } from 'react'
import Context from './Context';
import Card from './Card';

//DataScience component to display only DataScience related blogs
const DataScience = () => {
  const blogs = useContext(Context);
  return (
    <div className='container row justify-content-center'>
      {
        blogs.map((blog, index) => (
          blog.domain === 'Data science' && <Card blog={blog} key={index}/>
        ))
      }
    </div>
  )
}

export default DataScience