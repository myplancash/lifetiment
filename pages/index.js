// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget, Footer } from '../components'
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections'

export default function Home({ posts }) {
 /*  const posts = [
    { 
      title: 'Life Patterns of Success',
      excerpt: 'learn the most reliable and pure lessons from the greatest Successful people..'
    },
    { 
      title: '5 Rules to manage your time as Stoics',
      excerpt: 'The same type of problem, how can we ajust a greater amount of tasks in the same amount of life-hours...?'
    },
    {
      title: 'Money An Ubiquitous Necessity',
      excerpt: 'which one is a better strategy, save more or gain more? maybe both but...'
    },
  ] */

  return (
    <div className="">
      <Head>
        <title>Lifetiment Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 w-auto'>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard key={post.title} post={post.node} />
          )).filter((_, index) => index < 3)}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// how to fetch data using getStaticProps in next.js
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  }
}