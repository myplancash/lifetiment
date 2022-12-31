import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';;
import Image from 'next/image'
import Container from './Container';

// hardcoding categories 
/* const categories = [
  {
    name: 'Money Patterns', 
    slug: 'money-patterns'
  }, 
  { name: 'Life Patterns', 
    slug: 'life-patterns'
  },
]
 */

const Header = () => {
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])


  return (
    <header className="flex items-center justify-between flex-wrap p-6 mb-8 bg-blue sticky top-0 z-10">
        <Link href='/'>
          <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image src="/logo.svg" alt="me" width="54" height="54" />
          <span className="font-bold text-xl tracking-wider">   Life<span className='font-normal'>timent</span></span>
        </div>
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
         {/*  <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Docs
          </a> */}
        </div>
        <div>
       {/*  <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
          <div className="hidden md:float-right md:contents inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <span className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4 cursor-pointer">
                    {category.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
    </div>
  </header>
   )
}
    {/* <div className="container mx-auto mb-4 px-5">
      <div className="border-b w-full inline-block border-black-400 py-8">
        <div className="md:float-left block">
          <Link href='/'>
             <Image
                unoptimized
                src={logo}
                alt='Picture of the Logo Brand"'
                sizes="(min-width: 768px) 80vw,
                (min-width: 1200px) 30vw,
                13vw"
                width={100}
                height={1000}
                className="align-middle drop-shadow-lg rounded-full hover:text-rose-400"
              />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-rabioli duration-300 md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div> */}
 

export default Header;