import React, {useState} from 'react';
import './style.css';

import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER
} from "../../actions";

import { useGlobalState } from "../../useGlobalState";

import { HUSTLERS, HUSTLES } from "../../hustlerConfig";
import Recycling from '../Recycling/Recycling';


const UnlockRecycling = ({cost}) => {

  const [clicked, setClicked] = useState({ isClicked: false });
  const { state, dispatch } = useGlobalState();
  const [progressValue, setProgressValue] = useState(0);

  function buyRecycling() {
    dispatch({ type: BUY_HUSTLE, hustle: "recycling" });
    setClicked({ isClicked: true });
  }

  return (
    <>
      {clicked.isClicked === false ? (
        <section className="hero is-medium is-danger is-bold recycling-container">
          <div className="hero-body">
            <div className="container">
              <div className="container">
                <h1 className="unlock-header">Next Hustle</h1>
                <b className="cost">{`$${cost}`}</b>
                <br />
                <button
                  className="button is-large unlock"
                  onClick={buyRecycling}
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
      ) : (
        <Recycling/>
      )}
    </>
  );
};

export default UnlockRecycling;
