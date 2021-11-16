import { Router, useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { BlogCard } from '../../src/components/BlogCard';
import { Heading } from '../../src/components/Heading';
import { Footer } from '../../src/components/Layouts/Footer';
import { Nav } from '../../src/components/Layouts/Nav';
export interface IBlog {
  id: string;
  title: string;
  category: string;
  date: string;
  dateTime: string;
  shortDesc: string;
  image: string;
  readingTime: string;
  author: IAuthor;
  userUrl: string;
}
interface IAuthor {
  name: string;
  imageUrl: string;
}
const blogs: React.FC = () => {
  const [posts, setPosts] = useState<IBlog[]>(undefined);
  const grabData = async () => {
    const res = await import(`../../content/blogs/${'content'}.md`);
    const data = res.default;
    setPosts(data.attributes.blogs);
  };
  useEffect(() => {
    grabData();
  }, []);
  if (posts) console.log(posts);
  return (
    <React.Fragment>
      <Head>
        <title>GDSC | Blogs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='pt-10'>
        <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='bg-white h-1/3 sm:h-2/3' />
          </div>
          <div className='relative max-w-7xl mx-auto'>
            <Heading
              heading='Our Blogs'
              description='Blogs are written by our student community to share the technical and non technical knowledge.'
            />
            <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
              {posts && posts.map((post) => <BlogCard post={post} />)}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default blogs;
