import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ blog }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/blog', { state: { blog } });
    }
    return (
        <div onClick={handleClick} className='card-container col-lg-6 col-sm-6 col-xl-4 d-flex flex-column align-items-center mt-5'>
            <div className="inner-container card">
                    <img className='blog-img' src={blog.img} alt="img" />
              
                <h6 className='title text-center p-2'>{blog.title}</h6>
            </div>
        </div>
    )
}

export default Card