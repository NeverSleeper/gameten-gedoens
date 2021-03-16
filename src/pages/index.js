import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import About from '@sections/About';
import News from '@sections/News';

import Place from '@sections/Place';
import Attendance from '@sections/Attendance';

import Meals from '@sections/Meals';
import Presents from '@sections/Presents';

import Faq from '@sections/Faq';
import Contact from '@sections/Contact';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <About />
    <News/>
    <Place />
    <Attendance />
    <Meals />
    <Presents />
    <Faq />
    <Contact/>
  </Layout>
);

export default IndexPage;
