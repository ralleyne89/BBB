import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../utils/auth';
import MenuButton from '../MenuButton'

import {useGlobalState} from '../../useGlobalState';
import './style.css';

function Navbar() {
  const {state, dispatch} = useGlobalState();
  return (
    <nav className="navbar navbar-expand bank">
      <div className="container">
        {/* Bob icon that connects to inventory page */}

        <Link to="/inventory">
          <img
            className="bob-icon"
            src="./img/BBB_character_icon.png"
            width="60px"
            alt=""
          />
        </Link>
        <div className="coin-container">
        <p className='coin-total'>${state.disposableCoins}</p>
        <img className='coin-img' src="./img/coin.png" alt="" width={30}/>
        </div>
      <MenuButton/>
      </div>
    </nav>
  );
}

export default Navbar;
