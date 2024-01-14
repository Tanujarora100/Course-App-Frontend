import React from 'react'

const Card = ({ title, description, image }) => {
  return (
    <div className='flex flex-col m-3 p-4 border border-gray-300 rounded-md shadow-md'>
      <h1 className='text-xl font-bold mb-2'>{title}</h1>
      <p className='text-gray-700 mb-4 flex-grow'>{description}</p>
      <img src={image.url} alt="" className='w-full h-32 object-cover rounded-md'/>
    </div>
  );
};

export default Card;


