import React, { useState, useEffect, useRef } from 'react';

const CommentsForm = ({ slug }) => {

  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()


  const handleCommentSubmission = () => {
    return 
  }


  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 smb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Comments Form
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea 
          ref={commentEl} 
          className='border-solid border-2 border-indigo-600 p-4 text-gray-700 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-100 bg-gray-100' 
          name="comment" 
          id=""
          placeholder='Comment'
          cols="30" 
          rows="10"
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input 
          ref={nameEl}
          type="text" 
          className='border-solid border-2 border-indigo-600 py-2 px-4 text-gray-700 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-100 bg-gray-100'
          name="name"
          placeholder='Name'
        />
        <input 
          ref={emailEl}
          type="text" 
          className='border-solid border-2 border-indigo-600 py-2 px-4 text-gray-700 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-100 bg-gray-100'
          name="email"
          placeholder='Email'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
      {error && <p className='text-xs text-red-500'>All fields are required</p>}
      <div className='mt-8'>
        <button 
          type='button' 
          onClick='handleCommentSubmission'
          className='transition duration-500 ease hover:bg-indigo-900 inline-block'
        > Post Comment
        </button>
      </div>

      </div>
    </div>
  )
}

export default CommentsForm