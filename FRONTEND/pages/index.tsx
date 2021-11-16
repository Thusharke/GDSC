// Nav
// Hero
// Motto
// Faq
// Footer

import Head from 'next/head';
import React from 'react';
import { FAQ } from '../src/components/FAQ';
import { Hero } from '../src/components/Hero';
import { Footer } from '../src/components/Layouts/Footer';
import { Nav } from '../src/components/Layouts/Nav';
import { Motto } from '../src/components/Motto';
import { Testimonial } from '../src/components/Testimonial';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>GDSC</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='pt-24'>
        <Hero />
        <Motto />
        <Testimonial />
        <FAQ />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
