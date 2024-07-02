import React from 'react'

const Card = ({ img, title }) => {
    return (
        <div className='card-container col-lg-6 col-sm-6 col-xl-4 d-flex flex-column align-items-center mt-5'>
            <div className="inner-container card">
                    <img className='blog-img' src={img} alt="img" />
              
                <h6 className='title text-center p-2'>{title}</h6>
            </div>
        </div>
    )
}

export default Card