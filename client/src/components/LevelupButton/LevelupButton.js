import React from 'react';
import './style.css';

const LevelupButton = ({cost}) => {
  return (
    <div>
      <button className="button" id="level-button">
        <span className="icon is-medium">
          <i className="fas fa-arrow-alt-circle-up"></i>
          <p style={{marginLeft: '5px'}}>Level Up</p>
          <br/>
          {/* <small>${cost}</small> */}
        </span>
      </button>
    </div>
  );
};

export default LevelupButton;
