/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { label: 'Founded', value: '2018' },
  { label: 'Employees', value: '10' },
];

interface IProps {
  content: IPropsContent[];
}

interface IPropsContent {
  name: string;
  description: string;
  ceoName: string;
  title: string;
  about: string;
  companyLink: string;
  //   para: IParaContent[];
  //   stats: IStatsContent[];
}

// interface IParaContent {
//   paragraph: string;
// }

// interface IStatsContent {
//   stats: {
//     label: string;
//     value: string;
//   };
// }

export const CollaborationCard: React.FC<IProps> = (props) => {
  return (
    <div className='relative bg-white py-10'>
      <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
        <div className='relative sm:py-16 lg:py-0'>
          <div
            aria-hidden='true'
            className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
          >
            <div className='absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72' />
            <svg
              className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
              width={404}
              height={392}
              fill='none'
              viewBox='0 0 404 392'
            >
              <defs>
                <pattern
                  id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
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
                height={392}
                fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
              />
            </svg>
          </div>
          <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
            <div className='relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden'>
              <img
                className='absolute inset-0 h-full w-full object-cover'
                src='/collaboration/cyrrupceo.jpeg'
                alt='ceo-image'
              />
              <div className='absolute inset-0 bg-gray-500 mix-blend-multiply' />
              <div className='relative px-8'>
                <div>
                  <h1 className='text-3xl font-bold text-white tracking-wide'>
                    Cyrrup
                  </h1>
                </div>
                <blockquote className='mt-8'>
                  <div className='relative text-lg font-medium text-white md:flex-grow'>
                    <svg
                      className='absolute -top-2 left-0 transform -translate-x-3 -translate-y-2 h-6 w-6 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 32 32'
                      aria-hidden='true'
                    >
                      <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                    </svg>
                    <p className='relative'>
                      Completely Made in India, our highly Customizable
                      Solutions have been designed to cater to the different
                      telematics needs of the Logistics industry. Backed by our
                      guaranteed and efficient Post-Sales Service, We stand for
                      TRUST.
                    </p>
                  </div>

                  <footer className='mt-4'>
                    <p className='text-base font-semibold text-gray-400'>
                      Gaurav Kumar, CEO at Cyrrup
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
          <div className='pt-12 sm:pt-16 lg:pt-20'>
            <h2 className='text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl'>
              On a mission to empower trust
            </h2>
            <div className='mt-6 text-gray-500 space-y-6'>
              <p className='text-lg'>
                Reports suggest that on an average, around 31% of trucking
                operational costs are accounted towards fuel cost. Fuel theft is
                a major contributor towards this cost, wherein, around 8% of
                total diesel filled in trucks is stolen during transit. As per
                statistics, 2 million tons of diesel was stolen in 2017.
              </p>
              <p className='text-base leading-7'>
                Our Diesel Theft Detection Solution (Diesel Eye) works towards
                minimizing this cost, by detecting fuel theft. Daily reports
                containing fuel inlet/outlet and theft information, along with
                GPS location and Time Stamp are sent across to the vehicle
                owners via our Android App and Web Dashboard.
              </p>
              <p className='text-base leading-7'>
                Our Smart Fleet Management Solutions help Truck owners in
                keeping track of Vehicle History – Servicing Information, Trips
                done by the vehicle, Vehicle Performance, Vehicle Document
                Management and Vehicle Driver Management. Trip Distances, Idle
                Times, Stopping Points, etc. are recorded with Google Maps for
                Operations Optimization in future.
              </p>
              <p className='text-base leading-7'>
                Our Driving Behavior Monitoring Solution (Vehicle BlackBox) has
                been designed to focus on enhancing Safety Standards of the
                driven vehicle, by keeping a check on rash driving.
              </p>
            </div>
          </div>
          <div className='mt-10'>
            <dl className='grid grid-cols-2 gap-x-4 gap-y-8'>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className='border-t-2 border-gray-100 pt-6'
                >
                  <dt className='text-base font-medium text-gray-500'>
                    {stat.label}
                  </dt>
                  <dd className='text-3xl font-extrabold tracking-tight text-gray-900'>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className='mt-10'>
              <a href='#' className='text-base font-medium text-yellow-500'>
                {' '}
                More about Cyyrup <span aria-hidden='true'>&rarr;</span>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
