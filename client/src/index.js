import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import './index.css';
import App from './App';
import {AuthProvider, useAuth} from './utils/auth';

import {GlobalProvider} from './useGlobalState';

import registerServiceWorker from './registerServiceWorker';

// Our Components
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Inventory from './pages/Inventory';
import Hustles from './pages/Hustles';
import Hustlers from './pages/Hustlers';
import Navbar from '../src/components/Navbar';

// Here is if we have an id_token in localStorage
if (localStorage.getItem('id_token')) {
  // then we will attach it to the headers of each request from react
  // application via axios
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('id_token')}`;
}

function ProtectedRoute({children, ...rest}) {
  const {isLoggedIn} = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return <Redirect to="/signup" />;
}

ReactDOM.render(
  <AuthProvider>
    <Router>
      <div>
        <GlobalProvider>
          <Switch>
            <ProtectedRoute exact path="/">
              <App />
            </ProtectedRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <ProtectedRoute exact path="/profile">
              <Home />
            </ProtectedRoute>
            <ProtectedRoute exact path="/inventory">
              <Inventory />
            </ProtectedRoute>
            <ProtectedRoute exact path="/hustles">
              <Hustles />
            </ProtectedRoute>
            <ProtectedRoute exact path="/hustlers">
              <Hustlers />
            </ProtectedRoute>
          </Switch>
        </GlobalProvider>
      </div>
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);
registerServiceWorker();
