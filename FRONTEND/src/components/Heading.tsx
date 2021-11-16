import React from 'react';

interface IProps {
  heading: string;
  description: string;
}

export const Heading: React.FC<IProps> = (props) => {
  return (
    <div className='text-center my-16'>
      <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
        {props.heading}
      </h2>
      <p className='mt-3 max-w-4xl mx-auto text-xl text-gray-500 sm:mt-4'>
        {props.description}
      </p>
    </div>
  );
};
