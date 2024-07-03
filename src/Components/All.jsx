import React, { useContext } from 'react'
import Context from './Context'
import Card from './Card';

const All = () => {
  const blogs = useContext(Context);
  return (
    <div className='container row justify-content-center'>
      {
        blogs.map((blog,index) => (
          <Card blog={blog} key={index}/>
        ))
       }
    </div>
  )
}

export default All