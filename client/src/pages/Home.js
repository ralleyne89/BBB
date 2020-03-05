// Testing components for homepage
import React, {useState, useEffect} from 'react';
import UnlockHustle from '../components/UnlockSqueegee/UnlockSqueegee';
import UnlockHustleTwo from '../components/UnlockRecycling/UnlockRecycling';
import NavButtons from '../components/NavButtons/NavButtons';
import Navbar from '../components/Navbar/Navbar';
import SpareChange from '../components/SpareChange/SpareChange'
import './Home.css';

import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER,
} from '../actions';

import {useGlobalState} from '../useGlobalState';

import {HUSTLERS, HUSTLES} from '../hustlerConfig';
import {Link} from 'react-router-dom';
import mainTheme from "../assets/music/profile_music.mp3"
import UnlockSqueegee from '../components/UnlockSqueegee/UnlockSqueegee';
import UnlockRecycling from '../components/UnlockRecycling/UnlockRecycling';
import UnlockSteal from '../components/UnlockSteal/UnlockSteal';
import UnlockChopShop from '../components/UnlockChopShop/UnlockChopShop';



const Home = () => {
  const [progressValue, setProgressValue] = useState(0);
  const {state, dispatch} = useGlobalState();
  const [clicked, setClicked] = useState({isClicked: false});
  
  
  let playing = false

let themeSong = new Audio (mainTheme)


function bobTheme() {

  playing = true
  if (!themeSong.playing){
  themeSong.play()
  themeSong.volume = 0.5
  }
}

useEffect(() => {

  bobTheme()

}, [])


  return (
    <div>
      <Navbar />
    
    <div className="columns" style={{margin: '10px', width: '100%', position: 'relative'}}>
      <div className="column" style={{marginTop: '170px', padding: '0'}}>
    <SpareChange/>
      <UnlockSqueegee cost={5000} />
      <UnlockRecycling cost={40000} />
      <UnlockSteal cost={150000} />
      <UnlockChopShop cost={500000} />
      </div>
      <div className="column" style={{marginTop: '170px', padding: '0'}}>
      <UnlockHustle cost={2500000} />
      <UnlockHustle cost={8000000} />
      <UnlockHustle cost={50000000} />
      <UnlockHustle cost={73000000} />
      <UnlockHustle cost={165000000} />
      </div>
      <div className="column" style={{marginTop: '170px', padding: '0'}}>
      <img src="./img/BBB_character_body.png" alt="" srcset="" width='400px' style={{marginTop: '450px', marginLeft: '20px'}} />
      </div>
    </div>

      {/* <UnlockHustleTwo cost={5000} /> */}

      {/* this is the statement that unlocks the hustle */}
      {/* {clicked.isClicked === false ? (
        <section className="hero is-medium is-danger is-bold squeegeebutton">
          <div className="hero-body">
            <div className="container">
              <div className="container">
                <h1 className="unlock-header">Next Hustle</h1>
                <b className="cost">$5000</b>
                <br />
                <button
                  className="button is-large unlock"
                  onClick={buySqueegee}
                >
                  <span className="icon is-medium">
                    <i className="fas fa-lock"></i>
                  </span>
                  <span>Unlock</span>
                  <br />
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : null} */}


      

      {/* Nav for going to Husters and Hustles page  */}
      <NavButtons />
    </div>
  );
};

export default Home;
