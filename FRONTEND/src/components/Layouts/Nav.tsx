import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Events', href: '/events' },
  { name: 'Tracks', href: '/tracks ' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Collaborations', href: '/collaboration' },
  // { name: 'WOW', href: '/wow ' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Nav: React.FC = () => {
  return (
    <Popover className='fixed w-full z-20 bg-white border-b-2 border-gray-50 shadow-lg'>
      <div className='flex justify-between items-center px-4 py-4 sm:px-6 md:justify-start md:space-x-10'>
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <Link href='/'>
            <a className='flex items-center'>
              <span className='sr-only'>CVR COLLEGE OF ENGINEERING</span>
              <div className='flex flex-row items-center'>
                <img
                  className='h-12 w-auto sm:h-12'
                  src='/dsccvr.png'
                  alt='gdsccvr'
                />
                <span className='text-xl font-semibold mb-1'>
                  Google Developers Student Club
                </span>
              </div>
            </a>
          </Link>
        </div>
        <div className='-mr-2 -my-2 md:hidden'>
          <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>

        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          <Popover.Group as='nav' className='hidden md:flex space-x-10'>
            {navigation.map((navigate) => {
              return (
                <Link key={navigate.name} href={navigate.href}>
                  <span className='cursor-pointer text-lg font-medium text-gray-500 hover:text-gray-900'>
                    {navigate.name}
                  </span>
                </Link>
              );
            })}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <Link href='/'>
                  <a className='flex items-center'>
                    <span className='sr-only'>CVR COLLEGE OF ENGINEERING</span>
                    <div className='flex flex-row items-center'>
                      <img
                        className='h-12 w-auto sm:h-12'
                        src='/dsccvr.png'
                        alt='gdsccvr'
                      />
                      <span className='text-xl font-semibold mb-1'>
                        Google Developers Student Club
                      </span>
                    </div>
                  </a>
                </Link>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='py-6 px-5'>
              <div className='grid grid-cols-1 gap-4'>
                {navigation.map((navigate) => {
                  return (
                    <Link key={navigate.name} href={navigate.href}>
                      <span className='cursor-pointer text-lg font-medium text-gray-900 hover:text-gray-700'>
                        {navigate.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
