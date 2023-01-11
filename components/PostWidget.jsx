import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { getRecentPosts, getSimilarPosts } from '../services';
import Link from 'next/link';


const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  console.log(relatedPosts);

  return (
    <div className='bg-slate-500/[.06] shadow-lg rounded-lg p-4 mb-8 divide-y divide-y-reverse'>
      <h3 className='text-xl mb-8 font-semibold border-b-2 pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4 hover:underline decoration-1'>
          <div className='flex-none'>
            <img 
              src={post.featuredImage.url} 
              alt={post.title} 
              height='50px' 
              width='50px' 
              className='align-middle rounded-full'
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='font-xs text-gray-500'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              { post.title }
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget