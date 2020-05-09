import React, { Fragment } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <hr />
    </Fragment>
  );
};

export default Home;
