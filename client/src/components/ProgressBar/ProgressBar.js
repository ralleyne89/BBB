import React from 'react';
import './style.css'

const ProgressBar = ({value, max = 100 }) => {


  if (typeof value === 'undefined') {
    // ommit the value attribute to render an animated "loading" progress bar
   return  <progress className="progress is-danger is-large" max={max}>90%</progress>
  } 
  return (
    <progress className="progress is-danger is-large" value={value} max={max}>90%</progress>
    
  )
  };
  
  
    

  
export default ProgressBar;
