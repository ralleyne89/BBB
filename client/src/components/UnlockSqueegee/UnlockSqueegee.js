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


// let Cost = props => [
//   {
//     name: 'Squeegee',
//     cost: '20000',
//   },{
//     name: 'Recycling',
//     cost: "50000"
//   }
// ]


const UnlockSqueegee = ({cost}) => {
  const [clicked, setClicked] = useState({isClicked: false});
  const { state, dispatch } = useGlobalState();

  function buySqueegee() {
    dispatch({type: BUY_HUSTLE, hustle: 'squeegee'});
    setClicked({isClicked: true});
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
      ) : null}
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