import React from 'react';
import { Link } from 'react-router-dom';
import menuLogo from '../../images/background_big_big.jpg';

function Menu(props) {

  function handleClick(evt) {
  }

  function handleClose() {
  }

  return (
    <div className="menu" onClick={handleClick} >
      <img className="menu__background" src={menuLogo} alt="закрыть" onClick={props.onClose} />
    </div>
  )
}

export default Menu;