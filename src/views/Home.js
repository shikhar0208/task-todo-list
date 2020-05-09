import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import Hero from '../components/Hero';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Redirect to='/mytodos' />;
  }
  return (
    <Fragment>
      <Hero />
      <hr />
    </Fragment>
  );
};

export default Home;
