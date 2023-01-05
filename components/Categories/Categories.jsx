import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../../services';
import { CategoriesStyles, CategorySpan } from './Categories.styles';


const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories) )
  }, [])
 
  return (
    <CategoriesStyles>
      <h3 className='text-xl mb-8 font-semibold border-b-2 pb-4'>
        Categories
      </h3>

      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <CategorySpan>
            {category.name}
          </CategorySpan>
        </Link>
      ))}
    </CategoriesStyles>
  )
}

export default Categories