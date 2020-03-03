import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../utils/auth';
import MenuButton from '../MenuButton'

import {useGlobalState} from '../../useGlobalState';
import './style.css';

function Navbar() {
  const {state, dispatch} = useGlobalState();
  return (
    <nav className="navbar navbar-expand navbar-dark bank">
      <div className="container">
        <div className="coin-container">
        <img className='coin-img' src="./img/coin.png" alt="" />
        <p className='coin-total'>${state.disposableCoins}</p>
        </div>
        {/* Bob icon that connects to inventory page */}

        <Link to="/inventory">
          <img
            className="bob-icon"
            src="./img/BBB_character_icon.png"
            width="100px"
            alt=""
          />
        </Link>
      <MenuButton/>
      </div>
    </nav>
  );
}

export default Navbar;
