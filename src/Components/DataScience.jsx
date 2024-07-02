import React, { useContext } from 'react'
import Context from './Context';
import Card from './Card';

const DataScience = () => {
  const blogs = useContext(Context);
  return (
    <div className='container row justify-content-center'>
      {
        blogs.map((blog, index) => (
          blog.domain === 'ds' && <Card img={blog.img} title={blog.title} key={index} />
        ))
      }
    </div>
  )
}

export default DataScience