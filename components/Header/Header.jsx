import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services';
import Image from 'next/image'
import { HeaderStyles, HeaderContainer, HeaderTitle, HeaderLinks } from './Header.styles'

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
    <HeaderStyles className="flex items-center justify-between flex-wrap p-6 mb-8 bg-blue">
      <HeaderContainer>
        <Link href='/'>
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Image src="/logo.svg" alt="me" width="54" height="54" />
            <HeaderTitle>  
              <span className="font-bold text-xl tracking-wider"> Life<span className='font-normal'>timent</span></span>
            </HeaderTitle>
          </div>
      </Link>
      <HeaderLinks>
        <li>
          {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                  {category.name}
              </Link>
            ))}
        </li>
      </HeaderLinks>
      
    </HeaderContainer>
  </HeaderStyles>
   )
}
    

export default Header;