import React, { useState, useEffect } from 'react';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import { useGlobalState } from "../useGlobalState" 


function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useAuth();
  const [clickUp, dispatch] = useGlobalState();
  // const [autoUp, dispatch] = useGlobalSTate()

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <div className="container Profile">
      <h1>On the profile page!</h1>
      <h2>Currency: {clickUp}</h2>
      <button onClick={() => dispatch({type: "INCREMENT"})}>Increase</button>
     <br></br>
     <br></br>
      <h2>Test Currency: {clickUp}</h2>
      <button onClick={() => dispatch({type: "INCREMENT2"})}>Increase</button>
      <p>Username: {username}Bob</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Profile;
