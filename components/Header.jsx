import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';

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
    <div className="container mx-auto mb-8 px-10">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href='/'>
            <span className="cursor-pointer font-bold text-4xl text-black">
              Lifetiment
             </span>
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