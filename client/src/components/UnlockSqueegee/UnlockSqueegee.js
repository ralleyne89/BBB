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

import { HUSTLERS, HUSTLES } from "../../hustlerConfig";

// let Cost = props => [
//   {
//     name: 'Squeegee',
//     cost: '20000',
//   },{
//     name: 'Recycling',
//     cost: "50000"
//   }
// ]



const UnlockSqueegee = ({ cost }) => {
  const [clicked, setClicked] = useState({ isClicked: false });
  const { state, dispatch } = useGlobalState();
  const [progressValue, setProgressValue] = useState(0);

  function buySqueegee() {
    dispatch({ type: BUY_HUSTLE, hustle: "squeegee" });
    setClicked({ isClicked: true });
  }

  function SqueegeeProgress() {

    let seconds = 0;
    const intervalId = setInterval(() => {
      {
        dispatch({type: USE_HUSTLE, hustle: 'squeegee'});
      }
      if (seconds < 9) {
        seconds += 1;
        setProgressValue(seconds * 10);
      } else {
        clearInterval(intervalId);
        setProgressValue(0);
      }
    }, 1000);
  
    return () => clearInterval(intervalId);
  
  }

  return (
    <>
      {clicked.isClicked === false ? (
        <section className="hero is-medium is-danger is-bold squeegeebutton">
          <div className="hero-body">
            <div className="container">
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
          </div>
        </section>
      ) : (
        <button
          onClick={SqueegeeProgress}
          className="hustle-button squeegee-button"
        >
          <img
            className="squeegee-img"
            src="./img/BBB_hustles_squeegee.png"
            alt=""
          />
        </button>
      )}
    </>
  );
};

// {clicked.isClicked === false ? (
// <section className="hero is-medium is-danger is-bold squeegeebutton">
// <div className="hero-body">
// <div className="container">
// <div className="container">
//   <h1 className="unlock-header">Next Hustle</h1>
//   <b className="cost">$40000</b>
//   <br />
//   <button
//     className="button is-large unlock"
//     onClick={buySqueegee}
//   >
//     <span className="icon is-medium">
//       <i className="fas fa-lock"></i>
//     </span>
//     <span>Unlock</span>
//     <br />
//   </button>
// </div>
// </div>
// </div>
// </section>
// ) : null}

// {clicked.isClicked === true ? (
//   <button onClick={SqueegeeProgress} className="hustle-button squeegee-button">
//     <img
//       className="squeegee-img"
//       src="./img/BBB_hustles_squeegee.png"
//       alt=""
//     />
//   </button>

// ) : null}

export default UnlockSqueegee;
