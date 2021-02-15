import React, { useState } from "react";
import "./style.css";

import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER
} from "../../actions";

import { useGlobalState } from "../../useGlobalState";

import Squeegee from "../Squeegee/Squeegee";


const UnlockSqueegee = ({ cost }) => {
  const [clicked, setClicked] = useState({ isClicked: false });
  const { state, dispatch } = useGlobalState();
  const [progressValue, setProgressValue] = useState(0);

  function buySqueegee() {
    dispatch({ type: BUY_HUSTLE, hustle: "squeegee" });
    setClicked({ isClicked: true });
  }


  return (
    <>
      {clicked.isClicked === false ? (
        <section className="hero is-medium is-danger is-bold squeegee-container">
          <div className="hero-body">
              <div className="container">
                <h1 className="unlock-header">Next Hustle</h1>
                <b className="cost">{`$${cost}`}</b>
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
        </section>
      ) : (
        <Squeegee />
      )}
    </>
  );
};

export default UnlockSqueegee;
