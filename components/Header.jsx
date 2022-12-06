import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import Image from 'next/image';
import logo from '../assets/logo.svg';

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
    <div className="container mx-auto mb-4 px-5">
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
    </div>
  )
}

export default Header;