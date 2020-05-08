import React, { Fragment } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import Hero from '../components/Hero';
import TodoList from '../components/TodoList';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <TodoList />;
  }
  return (
    <Fragment>
      <Hero />
      <hr />
    </Fragment>
  );
};

export default Home;
