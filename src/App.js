import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import Home from './views/Home';
import Profile from './views/Profile';
import { useAuth0 } from './react-auth0-spa';
import history from './utils/history';

import { Provider } from 'react-redux';
import store from './store';

// styles
import './App.css';

// fontawesome
import initFontAwesome from './utils/initFontAwesome';
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Provider store={store}>
      <Router history={history}>
        <div id='app' className='d-flex flex-column h-100'>
          <NavBar />
          <Container className='flex-grow-1 mt-5'>
            <Switch>
              <Route path='/' exact component={Home} />
              <PrivateRoute path='/mytodos' component={TodoList} />
              <PrivateRoute path='/profile' component={Profile} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
