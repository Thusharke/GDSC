import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Footer } from '../../src/components/Layouts/Footer';
import { Nav } from '../../src/components/Layouts/Nav';
export interface IBlogPost {
  title: string;
  category: string;
  description: string;
  date: string;
  datetime: string;
  imageUrl: string;
  author: IAuthor;
  para: string[];
}

interface IAuthor {
  name: string;
  imageUrl: string;
}

const blog: React.FC = () => {
  const router = useRouter();
  const [blogData, setBlogData] = useState<IBlogPost | undefined>(undefined);
  let { id } = router.query;
  const grabData = async () => {
    if (!id) return;
    const res = await import(`../../content/blogs/posts/${id + ''}/content.md`);
    const data = res.default;
    console.log(data.attributes);
    setBlogData(data.attributes);
  };
  useEffect(() => {
    grabData();
  }, [id]);
  return (
    <React.Fragment>
      <Head>
        <title>GDSC | Blogs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='pt-10'>
        <div className='bg-white overflow-hidden'>
          <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
            <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen' />
            <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
              <div>
                <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
                  {blogData && blogData.category}
                </h2>
                <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  {blogData && blogData.title}
                </h3>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <a href='#'>
                      <span className='sr-only'>
                        {blogData && blogData.author.name}
                      </span>
                      <img
                        className='h-10 w-10 rounded-full'
                        src={blogData && blogData.author.imageUrl}
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <a href='#' className='hover:underline'>
                        {blogData && blogData.author.name}
                      </a>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={blogData && blogData.date}>
                        {blogData && blogData.date}
                      </time>
                      <span aria-hidden='true'>&middot;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='relative lg:row-start-1 lg:col-start-2'>
                <svg
                  className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'
                >
                  <defs>
                    <pattern
                      id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                  />
                </svg>
                <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
                  <figure>
                    <div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
                      <img
                        className='rounded-lg shadow-lg object-cover object-center'
                        src={blogData && blogData.imageUrl}
                        alt=''
                        width={1184}
                        height={1376}
                      />
                    </div>
                  </figure>
                </div>
              </div>
              <div className='mt-8 lg:mt-0'>
                <div className='text-base max-w-prose mx-auto lg:max-w-none'>
                  <p className='text-lg text-gray-500'>
                    {blogData && blogData.description}
                  </p>
                </div>
                {blogData &&
                  blogData.para.map((paragraph) => {
                    return (
                      <div className='mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                        <p>{paragraph}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default blog;
