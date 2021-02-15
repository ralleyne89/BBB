import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Inventory = () => {
  const [wearsHat, setWearsHat] = useState({isWearing: 'none'});

  function EquipItem() {
    let Hat = (
      <div className="box column" style={{height: '100px', margin: '10px'}}>
        <img
          src="./img/BBB_items_hat.png"
          width="100px"
          alt=""
          style={{float: 'left'}}
        />
      </div>
    );
    setWearsHat({isWearing: 'hat'});

    // if( )
  }

  return (
    <>
    <Navbar/>
    <div className="container">
      <Link to="/profile">
        <i
          className="far fa-window-close fa-4x"
          style={{marginTop: '170px', float: 'right'}}
        ></i>
      </Link>
      <h1 className="header">Inventory</h1>
      <hr />
      {wearsHat.isWearing === 'none' ? (
        <img
          src="./img/BBB_character_body.png"
          width="350px"
          alt=""
          style={{margin: '0 auto'}}
        />
      ) : (
        <img
          src="./img/BBB_character_hat.png"
          width="350px"
          alt=""
          style={{margin: '0 auto'}}
        />
      )}

      <div className="">
        <button className="box" onClick={EquipItem}>
          <div className="">
            <img
              src="./img/BBB_items_hat.png"
              width="100px"
              alt=""
              style={{float: 'left'}}
            />
            <p>Hat</p>
          </div>
        </button>

        <button className="box" onClick={EquipItem}>
          <div className="">
            <img
              src="./img/BBB_items_shades.png"
              width="100px"
              alt=""
              style={{float: 'left'}}
            />
          </div>
          <p>Shades</p>
        </button>

        <button className="box" onClick={EquipItem}>
          <div className="">
            <img
              src="./img/BBB_items_sweater.png"
              width="100px"
              alt=""
              style={{float: 'left'}}
            />
          </div>
          <p>Sweater</p>
        </button>

        <button className="box" onClick={EquipItem}>
          <div className="">
            <img
              src="./img/BBB_items_headband.png"
              width="100px"
              alt=""
              style={{float: 'left'}}
            />
          </div>
          <p>Headband</p>
        </button>

        <button className="box" onClick={EquipItem}>
          <div className="">
            <img
              src="./img/BBB_items_chef.png"
              width="100px"
              alt=""
              style={{float: 'left'}}
            />
          </div>
          <p>Chef</p>
        </button>

        <button className="box" onClick={EquipItem}>
          <div className="">
            <img
              src="./img/BBB_items_stunners.png"
              width="100px"
              alt=""
              style={{float: 'left'}}
            />
          </div>
          <p>Stunners</p>
        </button>
      </div>
    </div>
    </>
  );
};

export default Inventory;
