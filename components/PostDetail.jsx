import React from 'react'
import moment from 'moment';


const PostDetail = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };



  return (
    <div className='bg-white shadow-lg rounded-lg'>
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url} 
          alt={post.title} 
          className='object-top h-full w-full rounded-t-lg' 
        />
      </div>
      
      <main className="px-4 lg:px-0 h-full overflow-y-auto">
        <div className="container mx-auto grid w-full mb-4 items-center">
          <div className="grid gap-6 mb-4 md:grid-cols-1 xl:grid-cols-1 items-center lg:mb-0 w-full p-4 bg-white rounded-lg shadow-xs">
            <div className="flex items-center mb-4 lg:mb-0 w-full p-4 bg-white rounded-lg shadow-xs border-b-2">
              <div className="flex-none text-pink-500 bg-pink-100 rounded-full dark:text-pink-100 dark:bg-pink-500">
                <img 
                  src={post.author.photo.url}
                  alt={post.author.name}
                  height='50px'
                  width='50px'
                  className='align-middle rounded-full'
                />
              </div>
              
              <div className='flex flex-grow font-medium text-gray-700'>
                <p className="flex-auto inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
                <div className='flex-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="align-middle">
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                  </span>
                </div>
              </div>
            </div>
            <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
            
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

              return getContentFragment(index, children, typeObj, typeObj.type)
            })}
          </div>
        </div>
      </main>
    </div> 
  )
}
    {/* <div className="max-w-screen-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-screen-2xl">
      <div className="md:flex">
        <div className="md:shrink-0 overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url} 
            alt={post.title} 
            className='h-full w-full object-top md:h-full md:w-48 rounded-t-lg' //object-top h-full w-full
          />
        </div>
        <main className="px-4 lg:px-0 h-full overflow-y-auto p-8">
          <div className='container mx-auto grid w-full mb-4 items-center'>
            <div className="grid gap-6 mb-4 md:grid-cols-1 xl:grid-cols-1">
            <div className="flex items-center mb-4 lg:mb-0 w-full p-4 bg-white rounded-lg shadow-xs border-b-2">

            
             
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible for your team</a>
              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
            </div>
            </div>
            </div>
        </main>
      </div>
    </div> */}


export default PostDetail;