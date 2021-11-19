import React, { useEffect, useRef } from 'react';

import { BsInstagram } from 'react-icons/Bs';
import { BsGithub } from 'react-icons/Bs';
import { BsTwitter } from 'react-icons/Bs';
import { BsYoutube } from 'react-icons/Bs';
import { BsLinkedin } from 'react-icons/Bs';

interface IProps {
  person: IPerson;
}
interface IPerson {
  name: string;
  role: string;
  image: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
}
export const TeamCard: React.FC<IProps> = (props) => {
  return (
    <div className='space-y-4'>
      <div className='aspect-w-3 aspect-h-2'>
        <img
          className='object-cover shadow-lg rounded-lg'
          src={props.person.image}
          alt='team-image'
        />
      </div>
      <div className='text-lg leading-6 font-medium space-y-1'>
        <h3>{props.person.name}</h3>
        <p className='text-blue-600'>{props.person.role}</p>
      </div>

      <div className='flex space-x-5'>
        <a
          href={props.person.linkedinUrl}
          className='text-gray-400 hover:text-gray-500'
        >
          <span className='sr-only'>Linkedin</span>
          <BsLinkedin />
        </a>
        <a
          href={props.person.githubUrl}
          className='text-gray-400 hover:text-gray-500'
        >
          <span className='sr-only'>Github</span>
          <BsGithub />
        </a>
        {/* <a
          href={props.person.twitterUrl}
          className='text-gray-400 hover:text-gray-500'
        >
          <span className='sr-only'>Twitter</span>
          <BsTwitter />
        </a> */}
        {/* <a
          href={props.person.youtubeUrl}
          className='text-gray-400 hover:text-gray-500'
        >
          <span className='sr-only'>Youtube</span>
          <BsYoutube />
        </a> */}
        <a
          href={props.person.instagramUrl}
          className='text-gray-400 hover:text-gray-500'
        >
          <span className='sr-only'>Instagram</span>
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};
