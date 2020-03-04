import React, {useState} from 'react';
import './style.css';
import HustleLevel from '../HustleLevel/HustleLevel';
import LevelupButton from '../LevelupButton/LevelupButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER,
} from '../../actions';

import {useGlobalState} from '../../useGlobalState';



const Squeegee = () => {
  
  const [progressValue, setProgressValue] = useState(0);
  const {state, dispatch} = useGlobalState();
    const [clicked, setClicked] = useState({isClicked: false});

    function SqueegeeProgress() {

      let seconds = 0;
      const intervalId = setInterval(() => {
        {
          dispatch({type: USE_HUSTLE, hustle: 'squeegee'});
        }
        if (seconds < 15) {
          seconds += 1;
          setProgressValue(seconds * 7);
        } else {
          clearInterval(intervalId);
          setProgressValue(0);
        }
      }, 1000);
  
      return () => clearInterval(intervalId);
  
    }
  
  return (
          <div className="box hustle-container">
      {/* spare change container starts here */}
    <div className="spare-change-container columns">
      <div className="column">
      <button onClick={SqueegeeProgress} className="hustle-button spare-change-button">
        <img
          className="squeegee-img"
          src="./img/BBB_hustles_squeegee.png"
          alt=""
        />
      </button>
      </div>
      <div className="column">
      <b className="hustle-name">Squeegee</b>
      {/* <b className="multiplier">x1</b> */}
      <ProgressBar value={progressValue} />
      <HustleLevel />
      <LevelupButton cost={10000} />

      </div>
    </div>
    </div>
  )


  }


export default Squeegee;