import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './Hustles.css';

const Hustles = () => {
  return (
    <>
      <Navbar />
      <div className="container" style={{paddingTop: 50}}>
        <Link to="/profile">
        <i  className="far fa-window-close fa-4x" style={{margin: 0, float: 'right', marginTop: 50}}/>
        </Link>
        <h1 className="header" style={{margin: 0, color: '#fff'}}>Hustles</h1>
        <p className="header-description" style={{color: '#fff'}}>
          PURCHASE THESE BOOSTERS TO GIVE YOUR HUSTLE AN UPGRADE
        </p>
        <hr />
        <div className="box" id="spare-change">
          <img src="./img/BBB_hustles_spare_change.png" width="100px" alt="" />
          <div className="hustleinfo">
            <h1 className="hustletitle">CHANGE IS A’COMIN</h1>
            <p className="description">SPARE CHANGE PROFITS X2</p>
            <b className="hustlecost">$350</b>
          </div>
          <button className="button">BUY</button>
        </div>

        <div className="box">
          <img src="./img/BBB_hustles_squeegee.png" width="100px" alt="" />
          <div className="hustleinfo">
            <h1 className="hustletitle">WIPE ME DOWN</h1>
            <p className="description">SQUEEGEE PROFITS X2</p>
            <b className="hustlecost">$800</b>
          </div>
          <button className="button">BUY</button>
        </div>
      </div>
    </>
  );
};

export default Hustles;
