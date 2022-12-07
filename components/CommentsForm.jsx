import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });
  
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef() 

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')

   /*  setLocalStorage(window.localStorage);
    const initialFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initialFormData); */
  }, [])

  /* const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  }; */


  const handleCommentSubmission = () => {
    setError(false)
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if(!comment || !name || !email) {
      setError(true)
      return 
    }

    const commentObj = { name, email, comment, slug }

    if(storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true)

        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
      })
  }

    /* const { name, email, comment, storeData } = formData;
      if (!name || !email || !comment) {
        setError(true);
        return;
      }
      const commentObj = {
        name,
        email,
        comment,
        slug,
      };

      if (storeData) {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
      } else {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
      }

      submitComment(commentObj)
        .then((res) => {
          if (res.createComment) {
            if (!storeData) {
              formData.name = '';
              formData.email = '';
            }
            formData.comment = '';
            setFormData((prevState) => ({
              ...prevState,
              ...formData,
            }));
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 3000);
          }
        }); 
   };*/


  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 smb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Leave a Reply
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        {/*  <textarea 
          value={formData.comment} 
          onChange={onInputChange} 
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
          name="comment" 
          placeholder="Comment" 
        /> */}
        <textarea 
          ref={commentEl} 
          className='border-solid border-2 border-black p-4 text-black outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100' 
          name="comment" 
          id=""
          placeholder='Comment'
          cols="30" 
          rows="10"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* <input type="text" value={formData.name} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name" />
        <input type="email" value={formData.email} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" /> */}
        <input 
          type="text" 
          ref={nameEl}
          className="border-solid border-2 border-black py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
          placeholder="Name"
          name="name" 
        />
        <input 
          type="email" 
          ref={emailEl}
          name="email" 
          className="border-solid border-2 border-black py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
          placeholder="Email" 
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
         {/*  <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label> */}
          <input 
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className="mt-8">
        <button 
          type="button"
          onClick={handleCommentSubmission} 
          className="bg-fresa transition font-bold duration-500 ease-in hover:bg-rabioli inline-block text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
      </div>
    </div>
  )
}

export default CommentsForm