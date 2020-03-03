import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import API from './../utils/API';
import {useAuth} from '../utils/auth'
import './Signup.css'


function Signup() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { isLoggedIn } = useAuth()

  const history = useHistory()

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.email, formState.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        history.replace('/login');
      })
      .catch(err => alert(err));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="container">
      <h1 className='header'>Signup</h1>
      <hr/>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            className="form-control"
            placeholder="Username"
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd"></label>
          <input
            className="form-control"
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
      <p className='login'>
        <Link to="/login">Go to Login</Link>
      </p>
    </div>
  );
}

export default Signup;
