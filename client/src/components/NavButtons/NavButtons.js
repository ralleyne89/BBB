import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import soundfile from "../../assets/music/page_trans.mp3"


const NavButtons = () => {
    let audio = new Audio(soundfile)

    const start = () => {
        audio.play()
    }

  return (
    <div className="navbuttons">
      <Link to="/hustles">
        <button onClick = {start} className="button is-large nav">Hustles</button>
      </Link>
      <Link to="/hustlers">
        <button onClick = {start} className="button is-large nav">Hustlers</button>
      </Link>
      {/* <Link to="/shop"> */}
        <button onClick = {start} className="button is-large nav">Shop</button>
      {/* </Link> */}
      <button onClick = {start} className="button is-large nav">Stats</button>
    </div>
  );
};

export default NavButtons;
