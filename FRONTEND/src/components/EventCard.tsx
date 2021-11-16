import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IProps {
  content: IEventContent[];
}

interface IEventContent {
  title: string;
  description: string;
  date: string;
  time: string;
  registerUrl: string;
  watchUrl: string;
  speakers: string;
}

export const EventCard: React.FC<IProps> = (props) => {
  useEffect(() => {
    AOS.init({
      delay: 3, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <React.Fragment>
      {props &&
        props.content.map((event) => {
          return (
            <div
              key={event.title}
              data-aos='fade-left'
              className='max-w-4xl mx-8 rounded-xl my-20 p-4 flex flex-col items-center shadow-xl md:flex-row md:mx-auto'
            >
              <div
                style={{ backgroundColor: '#ECEBFA' }}
                className='w-full h-52 rounded-md flex flex-col text-center items-center justify-center md:w-52'
              >
                <h4 className='font-extrabold text-xl italic'>{event.date}</h4>
                <h4 className='uppercase my-1 text-lg font-bold text-gray-600 tracking-wide'>
                  {event.time}
                </h4>
              </div>
              <div className='w-full ml-0 mt-3 flex flex-col md:ml-4 md:mt-0 md:p-0'>
                <h3 className='text-xl font-semibold mb-2'>{event.title}</h3>
                <p className='text-md font-semibold text-gray-500 pr-7'>
                  {event.description}
                </p>
                <p className='text-md font-semibold text-gray-600 my-2'>
                  <span style={{ color: '#7C7C7C' }} className='font-bold'>
                    Speakers:{' '}
                  </span>{' '}
                  {event.speakers}
                </p>
                {new Date().getTime() > new Date(event.date).getTime() ? (
                  <a
                    href=''
                    className='my-2 text-indigo-700 font-semibold underline'
                  >
                    Watch Video
                  </a>
                ) : (
                  <a
                    href={event.registerUrl}
                    className='my-2 text-indigo-700 font-semibold underline'
                  >
                    Register
                  </a>
                )}
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
};
