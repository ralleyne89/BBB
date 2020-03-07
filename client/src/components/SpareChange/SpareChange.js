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



const SpareChange = () => {
  
  const [progressValue, setProgressValue] = useState(0);
  const {state, dispatch} = useGlobalState();
    const [clicked, setClicked] = useState({isClicked: false});

    function SpareChangeProgress() {

      let seconds = 0;
      const intervalId = setInterval(() => {
        {
          dispatch({type: USE_HUSTLE, hustle: 'spareChange'});
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
          <div className="box hustle-container">
      {/* spare change container starts here */}
    <div className="spare-change-container columns">
      <div className="column">
      
        <img
          className="hustle-img"
          src="./img/BBB_hustles_spare_change.png"
          alt=""
        />

      </div>
      <div className="column">
      <HustleLevel />
      <b className="hustle-name">Spare Change</b>
      {/* <b className="multiplier">x1</b> */}
      <ProgressBar value={progressValue} />

      <div className="columns">
          <div className="column">
      <div className="money-button button" onClick={SpareChangeProgress}>
        <img src="./img/coin.png" alt="" srcset="" className='coin'/>
      </div>

          </div>
          <div className="column">
      <LevelupButton cost={500} />
            
          </div>
        </div>

      </div>
    </div>
    </div>
  )


  }


export default SpareChange;