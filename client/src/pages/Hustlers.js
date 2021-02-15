import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER,
} from '../actions';

import {useGlobalState} from '../useGlobalState';
import {HUSTLERS, HUSTLES} from '../hustlerConfig';

const Hustlers = () => {
  const {state, dispatch} = useGlobalState();
  const [clicked, setClicked] = useState({isClicked: false});

  function buyJeff() {
    dispatch({type: BUY_HUSTLER, hustler: 'jeffPasos'});
    setClicked({isClicked: true});
  }



  return (
    <>
      <Navbar />
      <div className="container" style={{paddingTop: 50}}>
        <Link to="/profile">
        <i  className="far fa-window-close fa-4x" style={{margin: 0, float: 'right', marginTop: 50}}/>
        </Link>
        <h1 className="header" style={{margin: 0, color: '#fff'}}>Hustlers</h1>
        <p className="header-description" style={{color: '#fff'}}>
          WHAT'S A HUSTLE WITHOUT A HUSTLER? STACK UP THE SQUAD!
        </p>
        <hr />

        {clicked.isClicked === false ? (
          <div className="box column">
            <img
              src="./img/BBB_hustlers_01.png"
              width="100px"
              alt=""
            />

            <div className="hustleinfo">
              <h1 className="hustletitle">JEFF PESOS</h1>
              <p className="description">RUN SPARE CHANGE HUSTLE</p>
              <b className="hustlecost">$2000</b>
            </div>
            <button className="button" onClick={buyJeff}>
              BUY
            </button>
          </div>
        ) : null}

        <div className="box column">
          <img
            src="./img/BBB_hustlers_02.png"
            width="100px"
            alt=""
          />
          <div className="hustleinfo">
            <h1 className="hustletitle">RUSTY SHACKLEFORD</h1>
            <p className="description">RUN SQUEEGEE HUSTLE</p>
            <b className="hustlecost">$12000</b>
          </div>
          <button
            className="button"
            onClick={() =>
              dispatch({type: BUY_HUSTLER, hustler: 'rustyShackleford'})
            }
          >
            BUY
          </button>
        </div>
      </div>
    </>
  );
};

export default Hustlers;
