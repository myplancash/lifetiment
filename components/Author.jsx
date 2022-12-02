import React from 'react'

const Author = ({ author }) => {
  return (
    <div className='flex items-center w-full mt-5 mb-5 px-5 p-5 relative rounded-lg bg-black bg-opacity=20'>
      <div className='flex-none'>
        <img 
          src={author.photo.url} 
          alt={author.name} 
          className="align-middle rounded-full" 
          width='100px'
          height='100px'
        />
      </div>
      <div className='flex-grow ml-4'>
        <h3 className='text-white mx-4 lg:text-lg font-bold md:text-sm sm:text-sm'>{author.name}</h3>
        <p className='text-white mx-4 lg:text-lg md:text-base sm:text-sm'>{author.bio}</p>
      </div>
    </div>
  )
}

export default Author