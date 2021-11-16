import React from 'react';

const cards = [
  {
    title: 'Learn',
    description:
      'LEARN upcoming technologies to create incredible stuff with other inquisitive developers.',
    image: 'motto/learn.png',
  },
  {
    title: 'Connect',
    description:
      'CONNECT with various developer communities  through peer –to- peer workshops and events that cultivate learning, sharing, and collaboration.',
    image: 'motto/connect.png',
  },
  {
    title: 'Grow',
    description:
      'GROW  together personally and professionally as developers by coming up with solutions that contribute to various real-world problems.',
    image: 'motto/grow.jpg',
  },
];

export const Motto: React.FC = () => {
  return (
    <div className='pt-10 pb-32'>
      <h4 className='my-10 text-4xl font-bold text-center'>Our Motto</h4>
      <div className='flex flex-wrap justify-evenly items-center' id='card'>
        {cards.map((card) => {
          return (
            <div key={card.title} className='card'>
              <div className='imgBox'>
                <img src={card.image} alt={card.title} />
              </div>
              <div className='content'>
                <h2 className='text-lg uppercase font-semibold font-gray-500'>
                  {card.title}
                </h2>
                <p className='text-md font-semibold text-gray-400'>
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}

        <style jsx>
          {`
            .card {
              position: relative;
              max-width: 400px;
              height: 215px;
              background: #fff;
              margin: 70px 10px;
              padding: 20px 15px;
              display: flex;
              flex-direction: column;
              border-radius: 10px;
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
              transition: 0.3s ease-in-out;
            }

            .card:hover {
              height: 420px;
            }

            .card .imgBox {
              position: relative;
              border-radius: 10px;
              width: 260px;
              height: 260px;
              object-fit: cover;
              z-index: 1;
              top: -60px;
              left: 50px;
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            }
            .card .imgBox img {
              border-radius: 10px;
              max-width: 100%;
              border-radius: 4px;
            }

            .card .content {
              position: relative;
              margin-top: -140px;
              padding: 10px 15px;
              text-align: center;
              color: #111;
              visibility: hidden;
              opacity: 0;
              transition: 0.3s ease-in-out;
            }
            .card:hover .content {
              visibility: visible;
              opacity: 1;
              margin-top: -40px;
              transition-delay: 0.3s;
            }
          `}
        </style>
      </div>
    </div>
  );
};
