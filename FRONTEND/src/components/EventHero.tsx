import React from 'react';
// import { HiOutlineArrowNarrowDown } from 'react-icons/Hi';

export const EventHero: React.FC = () => {
  return (
    <div className='relative bg-gray-50 overflow-hidden py-24 pb-48'>
      <div
        className='hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full'
        aria-hidden='true'
      >
        <div className='relative h-full max-w-7xl mx-auto z-0'>
          <svg
            className='absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2'
            width={404}
            height={784}
            fill='none'
            viewBox='0 0 404 784'
          >
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
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
              height={784}
              fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
            />
          </svg>
          <svg
            className='absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2'
            width={404}
            height={784}
            fill='none'
            viewBox='0 0 404 784'
          >
            <defs>
              <pattern
                id='5d0dd344-b041-4d26-bec4-8d33ea57ec9b'
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
              height={784}
              fill='url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)'
            />
          </svg>
        </div>
      </div>
      <main className='relative mt-16 mx-auto max-w-7xl px-4 sm:mt-24 z-10'>
        <div className='text-center'>
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>Events to enrich your</span>{' '}
            <span className='block text-green-600 xl:inline'>Knowledge.</span>
          </h1>
          <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-4xl'>
            We at GDSC CVR organise various events to help the student community
            gain as much knowledge and exposure as we possibly can provide. The
            main motive behind these events is to encourage students to explore
            the world of technology and innovation and help reach their true
            potential.
          </p>
        </div>
      </main>
      {/* <div className='absolute bottom-0 animate-bounce w-full mt-5 mx-auto flex justify-center md:mt-8'>
        <HiOutlineArrowNarrowDown size={60} color='#6666f5' />
      </div> */}
    </div>
  );
};
