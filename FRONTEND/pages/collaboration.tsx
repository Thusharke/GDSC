import Head from 'next/head';
import React from 'react';
import { CollaborationCard } from '../src/components/CollaborationCard';
import { Heading } from '../src/components/Heading';
import { Footer } from '../src/components/Layouts/Footer';
import { Nav } from '../src/components/Layouts/Nav';

const collabData = [
  {
    name: 'Cyrrup',
    description:
      'Completely Made in India, our highly Customizable Solutions have been designed to cater to the different telematics needs of the Logistics industry. Backed by our guaranteed and efficient Post-Sales Service, We stand for TRUST.',
    ceoName: 'Gaurav Kumar, CEO at Cyrrup',
    title: 'On a mission to empower trust',
    about:
      'Reports suggest that on an average, around 31% of trucking operational costs are accounted towards fuel cost. Fuel theft is a major contributor towards this cost, wherein, around 8% of total diesel filled in trucks is stolen during transit. As per statistics, 2 million tons of diesel was stolen in 2017.',
    para: [
      'Our Diesel Theft Detection Solution (Diesel Eye) works towards minimizing this cost, by detecting fuel theft. Daily reports containing fuel inlet/outlet and theft information, along with GPS location and Time Stamp are sent across to the vehicle owners via our Android App and Web Dashboard.',
      'Our Smart Fleet Management Solutions help Truck owners in keeping track of Vehicle History – Servicing Information, Trips done by the vehicle, Vehicle Performance, Vehicle Document Management and Vehicle Driver Management. Trip Distances, Idle Times, Stopping Points, etc. are recorded with Google Maps for Operations Optimization in future.',
      'Our Driving Behavior Monitoring Solution (Vehicle BlackBox) has been designed to focus on enhancing Safety Standards of the driven vehicle, by keeping a check on rash driving.',
    ],
    stats: [
      { label: 'Founded', value: '2018' },
      { label: 'Employees', value: '10' },
    ],
    companyLink: 'https://www.cyrrup.com/',
  },
];

const collaboration: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>GDSC | Collaboration</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='pt-24'>
        <Heading
          heading='Our Collaborations'
          description=' Collaboration is where we the GDSC CVR get in touch with such
            industry functioning companies where our student community gets a
            chance to explore and get hands on experience.'
        />

        <CollaborationCard content={collabData} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default collaboration;
